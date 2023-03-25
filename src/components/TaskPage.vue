<template>
  <div>
    <NavigationBar />
    <TaskCard />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import TaskCard from "@/components/TaskCard.vue";

export default {
  components: {
    NavigationBar,
    TaskCard,
  },
};
</script>
<style></style>
