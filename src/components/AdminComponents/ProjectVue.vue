<template>
   <div>
    <div >
        <h3>{{ project.name }}</h3>
   
   <button
     @click="handleAddTaskClick"

     >Create A Task</button>
  </div>
    <div id="creatTask"
    :style="{
        display: activeAdd ? 'block' : 'none',
      }"
      >
      <h4 id="loginTitle">Add New Task</h4>
      <br>

      <form @submit.prevent="createTask">
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


    
<div id="projects" v-if="showTable">
  <!-- <table class="table" > -->
    <!-- <thead>
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
    <tr v-for="task in  project.tasks" :key="task.id">
      <td>{{ task.name }}</td>
      <td>{{ task.description }}</td>
      <td>{{ task.createdDate.substring(-10,10) }}</td>
      <td>{{ task.deadLine.substring(-10,10) }}</td>
      <td><button @click="deleteProject(project.id)">Delete</button></td>
      <td><button @click="updateProject(project.id)">Update</button></td>
      <td><button  @click="detailPject(project.id)">Details</button></td>
    </tr>
  </tbody>
  </table> -->
  </div>

   <div id="containerProjects"  >
      <!-- <div class="card" style="width: 18rem;" >
      <div class="card-body">
       <h5 class="card-title">{{ task.name }}</h5>
        <p class="card-text">{{ task.description }}</p>
        <p class="card-text">{{ task.deadLine.substring(-10,10) }}</p>
        <p class="card-text">members:{{ task.members }}</p>
        <a href="#" class="btn btn-primary">Add New Member</a>
        <a href="#" class="btn btn-primary">Edit</a>
      </div>
      </div> -->

      <div class="card border-success mb-3" style="max-width: 18rem;margin: 2rem;" v-for="task in  this.project.tasks" :key="task.id" >
        <div class="card-header bg-transparent border-success">{{ task.name }}</div>
        <div class="card-body text-success">
            <!-- <h5 class="card-title">Success card title</h5> -->

            <p class="card-text">{{ task.description }}</p>
            <p class="card-text">members</p>
            <ul class="list-group">
                <li class="list-group-item" v-for="meb in  task.members" :key="meb.id">{{ meb.email }} 
                    <!-- <button  @click="deleteMember(meb, task)">
                    <FontAwesomeIcon :icon="faTrash" />
                    </button> -->

                
                </li>
                
            </ul>


            <select class="form-select" aria-label="Default select example"   v-model="task.selectedMember">
                 <option :value="meb2.id" v-for="meb2 in  this.member" :key="meb2.id">{{ meb2.name }} </option >            
            </select>

            
            <button type="button" class="btn btn-secondary"  @click="addMember(task)">Add New Member</button>

        </div>
        <div class="card-footer bg-transparent border-success">Dead Line:{{ task.deadLine.substring(-10,10) }}</div>
        </div>

  </div>



    

   </div>


</template>


<script>
// import NavigationBar from "@/components/NavigationBar.vue";
import AdminService from '../../services/AdminService';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default {
    components: {
      // NavigationBarAdmin
      // FontAwesomeIcon,
      
    }, 
    
    mounted() {
        console.log(this.project); 
      if(this.project.tasks.length>0){
        this.showTable=true; 
      }

    },
    data() {
    return {
        activeAdd:false,
        tasks:[], 
        name:'',
        desciption:'', 
        date:'',
        showTable:true,
        selectedmember:null,
        copyProject:this.project, 
        // faTrash: faTrash,


        


    };
  },
  props: {
    project: Object,
    member:Array, 
  },
  methods:{
    handleAddTaskClick(){
        this.activeAdd=true; 

    }, 
    async createTask(){
        try{
            console.log(this.name,this.desciption,this.date); 
            const response = await AdminService.createTasks(this.project.id,this.name,this.desciption,this.date);
            console.log(response.data); 
            console.log(this.project);

            this.copyProject.tasks.push(
                {"name":this.name, "description":this.desciption, "deadLine":this.date}
            )

            this.$emit('update-project', this.copyProject);
            console.log(this.project);


        }catch(e){
            console.log(e); 
        }

    }, 
    handleSelectionChange(){
        console.log(this.selectedmember);
        var memberID= this.member.find(p=>p.name===this.selectedmember); 
        console.log(memberID); 


    }, 
    async addMember(task){
        try{
            const response = await AdminService.assignMember_task(this.project.id,task.id,task.selectedMember);
            console.log(response.data); 
            const member= this.member.find(m=>m.id===task.selectedMember);
            console.log(member);
            console.log(this.copyProject.tasks)
            const ind= this.copyProject.tasks.findIndex(t=>t.id==task.id);
            console.log(this.copyProject.tasks[ind]);
            this.copyProject.tasks[ind].members.push(
                {id:this.selectedmember,name:member.name, email:member.email}
            )
            this.$emit('update-project', this.copyProject);
            console.log(this.project);


        }catch(e){
            console.log(e); 
        }


    }, 
    async deleteMember(m, task){
        try{
            console.log(this.project); 
            const memberID= this.member.find(me=>me.email===m.email).id; 
            console.log(memberID); 
            const responsse= await AdminService.removemember_task(task.id, memberID); 
            console.log(responsse); 
            const index = this.member.findIndex(me=>me.email===m.email);

            this.copyProject.tasks[task.id].members.splice(index,1); 
        
            this.$emit('update-project', this.copyProject);
        }catch(e){
            console.log(e); 
        }
       

    }
    // async getTasks(){
    //     const response = await AdminService.getTasks(this.project.id,);
    //   console.log(response.data); 
    //   if(response.data.length>0){
    //     this.projects=response.data; 
    //     this.showTable=true;  

    //   }
    // }
  }


}
</script>


<style>
#containerProjects{
    display: flex;
    justify-content: center;
}
</style>