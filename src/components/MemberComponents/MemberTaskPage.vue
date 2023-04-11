
<template>
    <div>
        <NavigationBarMember />
        <div>
            <div>
                <div v-if="project">

                    <h2 for="title">{{ project.name }}</h2>
                    <p>{{ project.description }}</p>
                    <p>Date Created: {{ project.createdDate }}</p>
                    <p>Deadline: {{ project.deadLine }}</p>
                    <p>Tasks:</p>
                    <div class="task-container">
                        <div class="task-item" v-for="task in project.tasks" :key="task.id">
                            <table className="taskTable">
                                <tr>{{ task.name }}</tr>
                                <tr>{{ task.description }}</tr>

                                <tr>Date Created: {{ task.createdDate }}</tr>
                                <tr>Deadline: {{ task.deadLine }}</tr>
                                <div v-for="member in task.members" :key="member.id">
                                    <tr>Members: </tr>

                                    <tr>{{ member.name }}</tr>
                                    <p>--------------</p>
                                </div>
                            </table>

                            <div v-for="comment in task.comments" :key="comment.id">
                                <table className="commentTable">
                                    <th>{{ comment.commentOwner.name }}:</th>
                                    <th><button v-if="isCurrentUser(comment.commentOwner.email)"
                                            @click="editComment(comment)">Edit</button></th>

                                    <th><button v-if="isCurrentUser(comment.commentOwner.email)"
                                            @click="deleteComment(comment.id)">Delete</button>
                                    </th>

                                    <tr>

                                        {{ comment.content }}
                                    </tr>
                                    <div v-if="currentComment === comment && isCurrentUser(comment.commentOwner.email)" >
                                    <form @submit.prevent="saveEditedComment(comment)">
                            
                                    <textarea v-model="currentComment.content" required></textarea>
                                    <button className="addCommentBtn" type="submit" >Save</button>
                                    <button type="button" @click="currentComment = null">Cancel</button>
                                </form>
                                    </div>
                                </table>
                              
                            </div>
                            <td>

                                <form @submit.prevent="addComment(task.id)">
                                    <label for="description">Comment:</label>
                                    <textarea v-model="newComment" required></textarea>
                                    <button className="addCommentBtn" type="submit">Add Comment</button>
                                </form>
                            </td>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="splash-page">
      <img src="../../assets/splashBG.png">
    </div>
</template>
<script>
import axios from "axios";
import NavigationBarMember from "./NavigationBarMember.vue";
export default {
    data() {
        return {
            projects: [],
            currentComment: null,
            editedComment: "",
        };
    },
    props: {

        projectId: {
            type: Number,
            required: true
        }
    },

    computed: {
        project() {
            //const projectID = this.$route.query.projectId;
            console.log("taskProp:" + this.$route.query.projectId);
            const projectId = Number(this.$route.query.projectId);

            //const pnumber = 1;
            return this.projects.find(p => p.id === projectId);
        }
    },

    mounted() {

        const user = JSON.parse(localStorage.getItem("user"));
        axios
            .get("http://localhost:8089/api2/m/projects", {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            })
            .then((response) => {
                this.projects = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        isCurrentUser(commentEmail) {
            const email = localStorage.getItem('email');
           
            return email === commentEmail;
        },
        viewTasks(projectId) {

            this.$emit("view-tasks", projectId);
        },
        addComment(taskId) {
            const user = JSON.parse(localStorage.getItem("user"));

            const formData = {
                content: this.newComment,
            };
            if (user && user.token) {
                axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
            }
            axios.post(`http://localhost:8089/api2/m/comments/${taskId}`, formData)
                .then(response => {
                    const taskIndex = this.project.tasks.findIndex(task => task.id === taskId);
                    this.project.tasks[taskIndex].comments.push(response.data);

                    // Clear the newComment variable
                    this.newComment = '';
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });

        },
        deleteComment(commentId) {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user && user.token) {
                axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
            }
            axios.delete(`http://localhost:8089/api2/m/comments/${commentId}`)
                .then(response => {
                    console.log(response);
                    // Remove the deleted comment from the task's comments array
                    const task = this.project.tasks.find(task => task.comments.some(comment => comment.id === commentId));
                    task.comments = task.comments.filter(comment => comment.id !== commentId);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        editComment(comment) {
            this.currentComment = comment;
            

        },
        saveEditedComment(comment) {
            const user = JSON.parse(localStorage.getItem("user"));
            if (user && user.token) {
                axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
            }
            
            const formData = {
                content:  comment.content,
            }
            console.log("EDITED COMMENT " + JSON.stringify(formData));

            axios.put(`http://localhost:8089/api2/m/comments/${comment.id}`,formData)
                .then(response => {
                    console.log(response);
                    this.currentComment = null;
                })
                .catch(error => {
                    console.log(error);
                });
        }

    },
    components: { NavigationBarMember }
};
</script>
    
  
<style>
.task-container {
    display: grid;
    width: min(90%, 75rem);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: auto auto;
    grid-gap: 10px;
    grid-auto-flow: row;
    padding: 20px;
    margin: 5rem auto;
    gap: 1em;
}

.task-item {
    list-style-type: none;
    text-align: center;
    background-color: #303540;
    border-radius: 15px;
    padding: 20px;
    word-wrap: break-word;
    margin: 20px;
    height: 90%;
    max-width: 100%;
    box-sizing: border-box;
    text-decoration-style: none;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding: 20px;
    width: 400px;
    font-size: 20px;
    text-align: left;
    word-wrap: break-word;
}

.task-item a {
    text-decoration: none;
    color: #5051F9;
}

.task-item textarea {
    width: 100%;
    height: 100px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
}

.task-item input {
    width: 100%;
    height: 30px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
}

.task-item p,
.project-item label {
    text-decoration: none;
    color: #686871;
}

.addCommentBtn {
    background-color: #5051F9;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
}
</style>