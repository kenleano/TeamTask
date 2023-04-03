<!-- vue components must contain two words "StudentLogin.vue"-->

<template>
    <div>
        <div class="project-container">
            <div class="project-item">
                <router-link to="tasks">
                    <div class="card">
                        <button>Add Project</button>
                    </div>
                </router-link>             
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "AddProject",
    data() {

        return {

        }
    }
}
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
    word-wrap: break-word
}

.project-item a {
    text-decoration: none;
    color: #5051F9;
}

.project-item p {
    text-decoration: none;
    color: #686871;
}


#editProject {
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
</style>
