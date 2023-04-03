<template>
    <div>
      <div class="task-container">
        <div v-for="(task, index) in tasks" :key="index" class="task-item">
          <router-link :to="'/tasks/' + index">
            <div class="card">
              <h2 class="taskTitle">{{ task.title }}</h2>
              <p class="taskDescription">{{ task.description }}</p>
            </div>
          </router-link>
          <button @click="editTask(index)">Edit</button>
          <button @click="removeTask(index)">Remove</button>
        </div>
        <div class="task-item">
          <form @submit.prevent="addTask">
            <div>
              <label for="title">Title:</label>
              <input type="text" v-model="newTaskTitle" required>
            </div>
            <div>
              <label for="description">Description:</label>
              <textarea v-model="newTaskDescription" required></textarea>
            </div>
            <button type="submit">Add Task</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TaskList",
    data() {
      return {
        tasks: [
          {
            title: "Front ENd",
            description: "Create an e-commerce website for an automotive hardware store.",
          },
          {
            title: "Backend Blog",
            description: "Create a personal blog website using a CMS platform.",
          },
          {
            title: "SEO",
            description: "Create a social media platform for a niche community.",
          },
        ],
        newTaskTitle: "",
        newTaskDescription: "",
      };
    },
    methods: {
      addTask() {
        if (this.newTaskTitle && this.newTaskDescription) {
          this.tasks.push({
            title: this.newTaskTitle,
            description: this.newTaskDescription,
          });
          this.newTaskTitle = "";
          this.newTaskDescription = "";
        }
      },
      editTask(index) {
        console.log("Edit task: ", index);
      },
      removeTask(index) {
        console.log("Remove task: ", index);
        this.tasks.splice(index, 1);
      },
    },
  };
  </script>
  
  <style>
  .task-container {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 20px;
  }
  
  .task-item {
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
  
  .task-item p {
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
  