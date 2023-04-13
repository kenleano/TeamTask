<template>
    <div >
    <NavigationBar />
    <div>
   <div >
   
    <button
      @click="handleAddProjectClick"

      >Create A project</button>
   </div>

   <div id="createProject"
    :style="{
        display: activeAdd ? 'block' : 'none',
      }"
      >
      <h4 id="loginTitle">Add New Project</h4>
      <br>

      <form @submit.prevent="createProject">
        <div class="form-group">
          <label for="email" class="login-form-label" >name:</label>
          <input type="text" class="login-form-input"  v-model="name"/>
        </div>
        <div class="form-group">
          <label for="password" class="login-form-label">description:</label>
          <input type="text" class="login-form-input"  v-model="desciption"/>
        </div>
        <div class="form-group">
          <label for="start">Due date:</label>

          <input type="date"  name="trip-start"  min="2023-01-01" max="2025-12-31" v-model="date" >
        </div>
        
        <div class="form-group">
          <button type="submit" id="createBTN" class="btn btn-primary">Create </button>
        </div>
        
      </form>

    </div>
    <div
    
     id="updateProject"
     :style="{
        display: activeUpdate ? 'block' : 'none',
      }"
    >
      
      <form @submit.prevent="updateProjectAss" >
        <div class="form-group">
          <label for="email" class="login-form-label" >name:</label>
          <input type="text" class="login-form-input" id="inputN" v-model="name"/>
        </div>
        <div class="form-group">
          <label for="password" class="login-form-label">description:</label>
          <input type="text" class="login-form-input" id="inputD" v-model="desciption"/>
        </div>
        <div class="form-group">
          <label for="start">Due date:</label>

          <input type="date" id="inputD" name="trip-start"  min="2023-01-01" max="2025-12-31" v-model="date" >
        </div>
        
        <div class="form-group">
          <button type="submit" id="createBTN" class="btn btn-primary">Update </button>
        </div>
       
      </form>
    </div>
    <div class="splash-page">
      <img src="../../assets/splashBG.png">
    </div>


<div id="projects" v-if="showTable">
  <table class="table" >
    <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">description</th>
      <th scope="col">date of creation</th>
      <th scope="col">due Date</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="project in projects" :key="project.id">
      <td>{{ project.name }}</td>
      <td>{{ project.description }}</td>
      <td>{{ project.createdDate.substring(-10,10) }}</td>
      <td>{{ project.deadLine.substring(-10,10) }}</td>
      <td><button @click="deleteProject(project.id)">Delete</button></td>
      <td><button @click="updateProject(project.id)">Update</button></td>
      <td><button  @click="detailPject(project.id)">Details</button></td>
    </tr>
  </tbody>
  </table>

  <!-- <div id="containerProjects"  v-for="project in projects" :key="project.id">
      <div class="card" style="width: 18rem;">
      <div class="card-body">
       <h5 class="card-title">{{ project.name }}</h5>
        <p class="card-text">{{ project.description }}</p>
        <a href="#" class="btn btn-primary">Delete</a>
        <a href="#" class="btn btn-primary">Edit</a>
      </div>
      </div>

  </div> -->

</div>
</div>
<ProjectVue :project="selectProject"  @update-project="handleUpdateProject" v-if="detailsShown"  :member="members"/>
</div>
<!-- <AppFooter/> -->
</template>
<script>
import AdminService from '../../services/AdminService';
import NavigationBar from "@/components/NavigationBar.vue";
import ProjectVue from '@/components/AdminComponents/ProjectVue.vue'; 
// import AppFooter from '../AppFooter.vue';
import 'bootstrap/dist/css/bootstrap.css';

// import NavigationBarAdmin from "@/components/AdminComponents/NavigationBarAdmin.vue"
  
  export default {
    components: {
      NavigationBar,
      ProjectVue,
      // AppFooter, 
      // NavigationBarAdmin
    },
    data() {
    return {
      activeAdd: false,
      activeUpdate:false,
      detailsShown:false, 
      

      name:'',
      desciption:'', 
      date:'',
      projects:[], 
      members:[], 
      showTable:false, 
      toupdate:0, 
      selectProject:Object, 




    };
    },
    mounted() {
    this.getProjects();
    this.getMembers(); 
    },
    methods: {
      handleAddProjectClick() {
      this.activeAdd = !this.activeAdd;
    },

    async createProject (){
      console.log("clicked"+this.name+this.desciption+this.date);
      try{
        var token = JSON.parse(localStorage.getItem('token'));
        console.log(token);
        const response = await AdminService.createProj(this.name, this.desciption,this.date);
        console.log(response.data); 
        this.projects.push({
          name:this.name,
          description: this.desciption,
          deadLine:this.date
        }); 
        console.log(this.projects); 
        this.getProjects();


      }catch( e){
        console.log(e); 

      } 

    }, 
    async getProjects (){
      const response = await AdminService.getProjects();
      console.log(response.data); 
      if(response.data.length>0){
        this.projects=response.data; 
        this.showTable=true;  

      }
    }, 
    async getMembers(){
      try{
          const response= await AdminService.getMembers(); 
          console.log(response.data); 
          this.members= response.data; 
      }catch (e){
        console.log(e); 
      }
    }, 
    async deleteProject(projectID){
      try{
        const response = await AdminService.deleteProjects(projectID);
        // if(response.data !=null) alert ("The project is deleted")
        console.log(response.data); 
        this.projects.splice(projectID,1);
        this.getProjects();
    

      }catch( e){
        console.log(e); 

      } 

    }, 
     updateProject(projectID){
        
        this.activeUpdate= ! this.activeUpdate; 
        this.activeAdd= false;

        var projectGet= this.projects.find(obj=>obj.id===projectID); 
        this.name= projectGet.name; 
        this.desciption= projectGet.description; 
        this.date=projectGet.deadLine.substring(-10,10); 
        this.toupdate= projectID; 

    }, 
    async updateProjectAss(){
      try{
        const response = await AdminService.updateProjects(this.toupdate,this.name, this.desciption,this.date);
        this.desciption= ''; 
        this.date=''; 
        this.toupdate= '';  
        console.log(response.data); 
        this.activeUpdate= false; 
        this.getProjects();
 
        

      }catch( e){
        console.log(e); 

      } 
    }, 
    detailPject(projectID){
      console.log(projectID+"selected");
      this.selectProject= this.projects.find(obj=>obj.id===projectID); 
      this.detailsShown=true; 
      

    }, 
    handleUpdateProject(p){

      const index = this.projects.findIndex(obj => obj.id === p.id);

      // Replace the object at that index
      this.projects.splice(index, 1,p);
      
    }


   },

  };

</script>

<style>
table,tr,th, td{
  border: 1px solid;
  border-collapse: collapse;

}
form{
  width: 50%;
  margin:auto; 
  padding-bottom: 2%;
}
#createProject{
  width :50%, 

}

#projects{
  width: 80%;
  margin: auto;
  margin-top: 2%;

}


</style>