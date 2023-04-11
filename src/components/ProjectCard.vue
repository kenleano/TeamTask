<template>
  <div>
    <div class="project-container">
      <div v-for="(project, index) in projects" :key="index" class="project-item">
        <div>
          <h2 class="projectTitle">{{ project.title }}</h2>
    
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
      editIndex: null,
      updatedProjectTitle: "",
      updatedProjectDescription: "",
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
      this.editIndex = index;
      this.updatedProjectTitle = this.projects[index].title;
      this.updatedProjectDescription = this.projects[index].description;
    },
    updateProject(index) {
      console.log("Update project: ", index);
      if (this.updatedProjectTitle && this.updatedProjectDescription) {
        this.projects[index].title = this.updatedProjectTitle;
        this.projects[index].description = this.updatedProjectDescription;
        this.editIndex = null;
        this.updatedProjectTitle = "";
        this.updatedProjectDescription = "";
      }
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
    width: min(90%, 75rem);
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* adjust column width */
    grid-template-rows: auto auto;
    grid-gap: 10px;
    grid-auto-flow: row;
    padding: 20px;
    margin: 5rem auto;
    gap: 1em;

  }
  
  .project-item {
    text-align: center;
    background-color: #303540;
    border-radius: 15px;
    padding: 20px;
    word-wrap: break-word;
    margin: 20px;
    height: 90%; /* add height */
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
  
  .project-item a {
    text-decoration: none;
    color: #5051F9;
  }

  .project-item textarea {
    width: 100%;
    height: 100px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;

  }

  .project-item input {
    width: 100%;
    height: 30px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
  }
  
  .project-item p, .project-item label {
    text-decoration: none;
    color: #686871;
  }
  
  .project-item button {
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
  