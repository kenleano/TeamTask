vue components must contain two words "StudentLogin.vue"

<template>
    <div>
      <div class="member-container">
        <div v-for="(member, index) in members" :key="index" class="member-item">
          <div v-if="index !== editingIndex" id="role">
            <h3>{{ member.name }}</h3>
            <p>{{ member.email }}</p>
            <p>Role: {{ member.role }}</p>
          </div>
          <div v-if="index === editingIndex" id="role" class="member-item">
            <p>{{ member.name }}</p>
            <p>{{ member.email }}</p>
            <label>Role:</label>
            <select v-model="member.role">
              <option v-for="role in roles" :key="role" :value="role">{{ role }}</option>
            </select>
          </div>
          <button @click="editMember(index)" v-if="index !== editingIndex">Edit</button>
          <button @click="saveMember()" v-if="index === editingIndex">Save</button>
          <button @click="removeMember(index)">Remove</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MemberCard",
    data() {
      return {
        members: [
          { name: "John Doe", email: "johndoe@gmail.com", role: "team member" },
          { name: "Jane Smith", email: "janesmith@gmail.com", role: "team leader" },
          { name: "Bob Johnson", email: "bobjohnson@gmail.com", role: "team member" },
        ],
        editingIndex: -1,
        roles: ["team member", "team leader"],
      };
    },
    methods: {
      removeMember(index) {
        console.log("Remove member: ", index);
        this.members.splice(index, 1);
      },
      editMember(index) {
        console.log("Edit member: ", index);
        this.editingIndex = index;
      },
      saveMember() {
        console.log("Save member: ", this.editingIndex);
        this.editingIndex = -1;
      },
    },
  };
  </script>
  

<style>
.member-container {
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

.member-item {
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
    font-size: 20px;
    text-align: left;
    word-wrap: break-word;
}


.member-item button {
    background-color: #5051F9;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
#removeMember {
    background-color:red;
}

@media only screen and (max-width: 768px) {
  .member-container {
    display: grid;
    grid-template-columns: auto auto auto;
  }
}



</style>
