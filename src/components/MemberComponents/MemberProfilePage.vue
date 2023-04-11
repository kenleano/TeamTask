<template>
  
    <NavigationBarMember />
    <div class="profile-container">
    <h1>Edit Profile</h1>
    <ProfileForm />
    <button id="logoutBtn"><router-link to="/">Log Out</router-link></button>
    <button id="saveBtn">Save</button>
  </div>
</template>
  
<script>
  import NavigationBarMember from "@/components/MemberComponents/NavigationBarMember.vue";
import ProfileForm from "./MemberProfileForm.vue";


export default {
  components: {
    NavigationBarMember,
    ProfileForm
  },
};
</script>
<style>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 60%;
  border-radius: 15px;
  background-color: #f5f5f5;
}

#logoutBtn {
  background-color: #ff0000bd;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 120px;
  font-size: 16px;
  cursor: pointer;
}

#logoutBtn a {
  text-decoration: none;
  color: white;
}

#saveBtn {
  background-color: #36b126;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: 120px;
  font-size: 16px;
  cursor: pointer;
}
</style>
  