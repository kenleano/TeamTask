

<!-- vue components must contain two words "StudentLogin.vue"-->

<template>
    <div>
        <h1>Tasks</h1>
        <div class="task-container">
            <div class="task-item">
                <TaskContent />
            </div>

            <form id="taskForm">
                <input type="text" id="addTeamMember" placeholder="Add team member" />
                <br>
                <input type="text" id="addComment" placeholder="Add comment" />
            </form>
        </div>
    </div>
</template>

<script>

import TaskContent from "@/components/TaskContent.vue";

export default {
    components: {
        TaskContent,
    },
};
</script>

<style>
.task-container {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;

}

.task-item {
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    padding: 20px;
    text-align: left;
}

.task-item a {
    text-decoration: none;
    color: #5051F9;

}

.task-item p {
    color: #686871;

}

#editTask {
    background-color: #5051F9;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
}

#removeTask {
    background-color: #D34141;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>
