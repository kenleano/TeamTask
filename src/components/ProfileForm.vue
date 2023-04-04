<template>
    <div class="profile-form-container">
        <form>
            <div class="form-group">
                <label for="fullName" className="profile-label">Full Name</label>
                <input type="text" className="profile-input" placeholder="Manager Name">
            </div>
            
            <div class="form-group">
                <label for="email" className="profile-label">Email address</label>
                <input type="text"  className="profile-input" placeholder="manager@teamtask.com">
            </div>
            <label className="profile-label">Members</label>
            <MemberCard />
        </form>
    </div>
</template>
  
<script>
import MemberCard from './MemberCard.vue';

export default {
    components: {
        MemberCard
    },
};
  // any additional setup code
</script>
  
<style scoped>


.registration-form-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}

.registration-form-field {
    margin-bottom: 20px;
    width:80%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.profile-label {
    display: block;
    margin-bottom: 5px;
}

.profile-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 15px;
    
}

    .form-group {
  margin-bottom: 1rem;
  display: flex; /* add this line to use flexbox layout */
  flex-direction: column; /* stack the label and input vertically */
}

label {
  margin-bottom: 0.5rem; /* add some spacing between the label and input */
}

input {
  margin-bottom: 0.5rem; /* add some spacing between inputs */
  flex: 1; /* use remaining space to fill the parent container */
}

</style>
  