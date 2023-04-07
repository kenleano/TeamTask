
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
                            <h3>{{ task.name }}</h3>
                            <p>{{ task.description }}</p>

                            <p>Date Created: {{ task.createdDate }}</p>
                            <p>Deadline: {{ task.deadLine }}</p>
                            <div v-for="member in task.members" :key="member.id">
                                <p>Members: </p>

                                <p>{{ member.name }}</p>
                                <p>--------------</p>
                            </div>
                            <div v-for="comment in task.comments" :key="comment.id">
                                <p>{{ comment.commentOwner.name }}:</p>
                                <p>{{ comment.content }}</p>
                            </div>
                            <form @submit.prevent="addComment(task.id)">
                                <label for="description">Comment:</label>
                                <textarea v-model="newComment" required></textarea>
                                <button type="submit">Add Comment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import NavigationBarMember from "./NavigationBarMember.vue";
export default {
    data() {
        return {
            projects: [],
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

.task-item button {
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