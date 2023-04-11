<!-- vue components must contain two words "StudentLogin.vue"-->

<template>
    <div>
        <h1>Tasks</h1>
        <div class="task-container">
            <div class="task-item">
            
                
                    <TaskContent />
               
                <button id="editTask"><router-link to="comments">Edit </router-link></button>
                <button id="removeTask">Remove</button>
            </div>
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

</style>
