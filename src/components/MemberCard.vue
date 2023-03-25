vue components must contain two words "StudentLogin.vue"

<template>
    <div>
        <div class="member-container">
            <div class="member-item">
                    <div id="role">
                    <p>John Doe</p>
                    <p>johndoe@gmail.com</p>
                    </div>
                    <button id="editMember">Edit</button>
                <button id="removeMember">Remove</button>
                    <!-- drop down form -->
            </div> 
            <div class="member-item">
                    <div id="role">
                    <p>John Doe</p>
                    <p>johndoe@gmail.com</p>
                    </div>
                    <button id="editMember">Edit</button>
                <button id="removeMember">Remove</button>
                    <!-- drop down form -->
            </div> 
            <div class="member-item">
                    <div id="role">
                    <p>John Doe</p>
                    <p>johndoe@gmail.com</p>
                    </div>
                    <button id="editMember">Edit</button>
                <button id="removeMember">Remove</button>
                    <!-- drop down form -->
            </div> 
            
        </div>
       
    </div>
</template>

<script>


export default {
    name: "LoginForm",
    data() {

        return {

        }
    }
}
</script>

<style>
.member-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  
}

.member-item {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: 20px;
  text-align: left;
  margin: 20px;
  flex-basis: 30%;
  float:left;
}


#editMember, #removeMember {
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
