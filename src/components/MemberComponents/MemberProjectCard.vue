<template>
  <div>
    <div class="project-container1">
      <div class="project-item2" v-for="project in projects" :key="project.id">
        <h2 for="title">{{ project.name }}</h2>
        <p>{{ project.description }}</p>
        <p>Date Created: {{ project.createdDate }}</p>
        <p>Deadline: {{ project.deadLine }}</p>
        <button><router-link :to="{path: '/api2/m/tasks', query: { projectId: project.id }}">View Tasks</router-link></button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
    };
  },
  async mounted() {
    // const user = JSON.parse(localStorage.getItem("user"));
    console.log(JSON.parse(localStorage.getItem('token'))); 
    axios
      .get("http://localhost:8089/api2/m/projects", {
        headers: {
          Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
        },
      })
      .then((response) => {
        this.projects = response.data;
        console.log(response.data); 
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
</script>


<!-- <template>
  <div>
    <div class="project-container">
      <div v-for="(project, index) in projects" :key="index" class="project-item">
        <div>
          <h2 class="projectTitle">{{ project.name }}</h2>
        </div>
        <div>
          <p class="projectDescription">{{ project.description }}</p>
          <button @click="editProject(index)">Edit</button>
          <button @click="removeProject(index)">Remove</button>
        </div>
        <div v-if="editIndex === index">
          <form @submit.prevent="updateProject(index)">
            <div>
              <label for="title">Title:</label>
              <input type="text" v-model="updatedProjectTitle" required>
            </div>
            <div>
              <label for="description">Description:</label>
              <textarea v-model="updatedProjectDescription" required></textarea>
            </div>
            <button type="submit">Update Project</button>
          </form>
        </div>
      </div>
      <div class="project-item">
        <form @submit.prevent="addProject">
          <div>
            <label for="title">Title:</label>
            <input type="text" v-model="newProjectTitle" required>
          </div>
          <div>
            <label for="description">Description:</label>
            <textarea v-model="newProjectDescription" required></textarea>
          </div>
          <button type="submit">Add Project</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import LoginService from "../../services/LoginService";
export default {
  name: "MemberProjectPage",
  data() {
    return {
      projects: [],
      newProjectTitle: "",
      newProjectDescription: "",
      editIndex: null,
      updatedProjectTitle: "",
      updatedProjectDescription: "",
    };
  },
  mounted() {
    this.loadProjects();
  },
  methods: {
    loadProjects() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  }
  axios
    .get("/api/projects")
    .then((response) => {
      this.projects = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
},
addProject() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
  }
  if (this.newProjectTitle && this.newProjectDescription) {
    const newProject = {
      name: this.newProjectTitle,
      description: this.newProjectDescription,
    };
    axios
      .post("/api/projects", newProject)
      .then((response) => {
        this.projects.push(response.data);
        this.newProjectTitle = "";
        this.newProjectDescription = "";
      })
      .catch((error) => {
        console.log(error);
      });
  }
},

    editProject(index) {
      console.log("Edit project: ", index);
      this.editIndex = index;
      this.updatedProjectTitle = this.projects[index].name;
      this.updatedProjectDescription = this.projects[index].description;
    },
    updateProject(index) {
      console.log("Update project: ", index);
      if (this.updatedProjectTitle && this.updatedProjectDescription) {
        const updatedProject = {
          name: this.updatedProjectTitle, description: this.updatedProjectDescription
        };
        this.projects.splice(index, 1, updatedProject);
        this.updatedProjectTitle = "";
        this.updatedProjectDescription = "";
      } else {
        console.log("Please provide both a title and description for the updated project.");
      }
    },
    removeProject(index) {
      console.log("Delete project: ", index);
      axios
        .delete(`/api/projects/${this.projects[index]._id}`, {
          headers: {
            Authorization: `Bearer ${this.$store.state.token}`,
          },
        })
        .then((response) => {  // Use the response parameter
          console.log(response);
          this.projects.splice(index, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }

  },
};

</script> -->


  
<style>
.project-container1 {
  display: grid;
  width: min(90%, 75rem);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  /* adjust column width */
  grid-template-rows: auto auto;
  grid-gap: 10px;
  grid-auto-flow: row;
  padding: 20px;
  margin: 5rem auto;
  gap: 1em;

}

.project-item2 {
  text-align: center;
  background-color: #303540;
  border-radius: 15px;
  padding: 20px;
  word-wrap: break-word;
  margin: 20px;
  height: 90%;
  /* add height */
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

.project-item2 a {
  text-decoration: none;
  color: #5051F9;
}

.project-item2 textarea {
  width: 100%;
  height: 100px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;

}

.project-item2 input {
  width: 100%;
  height: 30px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
}

.project-item2 p,
.project-item label {
  text-decoration: none;
  color: #686871;
}

.project-item2 button {
  background-color: #5051F9;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  bottom: 0;
  margin-right: 10px;
  margin-top: 10px;
}

#removeProject {
  background-color: #D34141;
}
</style>
  