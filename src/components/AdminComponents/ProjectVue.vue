<template>
   <div>
    <div >
   
   <button
     @click="handleAddProjectClick"

     >Create A Task</button>
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

   </div>
</template>


<script>
// import NavigationBar from "@/components/NavigationBar.vue";

export default {
    components: {
      // NavigationBarAdmin
    }, 
    data() {
    return {

    };
  },
  props: {
    project: Object,
  },


}
</script>


<style>
</style>