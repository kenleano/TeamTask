<template>
    <div>
      <div class="project-container">
        <div v-for="(project, index) in projects" :key="index" class="project-item">
          <router-link :to="'/tasks/' + index">
            <div class="card">
              <h2 class="projectTitle">{{ project.title }}</h2>
              <p class="projectDescription">{{ project.description }}</p>
            </div>
          </router-link>
          <button @click="editProject(index)">Edit</button>
          <button @click="removeProject(index)">Remove</button>
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
  export default {
    name: "ProjectList",
    data() {
      return {
        projects: [
          {
            title: "E-Commerce Website",
            description: "Create an e-commerce website for an automotive hardware store.",
          },
          {
            title: "Personal Blog",
            description: "Create a personal blog website using a CMS platform.",
          },
          {
            title: "Social Media Platform",
            description: "Create a social media platform for a niche community.",
          },
        ],
        newProjectTitle: "",
        newProjectDescription: "",
      };
    },
    methods: {
      addProject() {
        if (this.newProjectTitle && this.newProjectDescription) {
          this.projects.push({
            title: this.newProjectTitle,
            description: this.newProjectDescription,
          });
          this.newProjectTitle = "";
          this.newProjectDescription = "";
        }
      },
      editProject(index) {
        console.log("Edit project: ", index);
      },
      removeProject(index) {
        console.log("Remove project: ", index);
        this.projects.splice(index, 1);
      },
    },
  };
  </script>
  
  <style>
  .project-container {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 20px;
  }
  
  .project-item {
    text-decoration-style: none;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding: 20px;
    width: 400px;
    font-size: 20px;
    text-align: left;
    word-wrap: break-word;
  }
  
  .project-item a {
    text-decoration: none;
    color: #5051F9;
  }
  
  .project-item p {
    text-decoration: none;
    color: #686871;
  }
  
  button {
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
    float: left;
    margin-right: 10px;
    margin-top: 10px;
  }
  
  #removeProject {
    background-color: #D34141;
  }
  
  .project-item:last-child button {
    background-color: #2ECC40;
  }
  
  .project-item:last-child h2 {
    color: #2ECC40;
  }
  </style>
  