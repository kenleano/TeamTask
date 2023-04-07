<template>
    <div>
      <NavigationBarMember />
      <h1>Projects</h1>
      <MemberProjectCard/>
    <MemberTaskPage :projectId="selectedProjectId" />
    </div>
  </template>
  
  <script>
  import NavigationBarMember from "./NavigationBarMember.vue";
  import MemberProjectCard from "./MemberProjectCard.vue";
  
  export default {
    components: {
      NavigationBarMember,
      MemberProjectCard,
    },
      data() {
    return {
      selectedProjectId: null,
    };
  }
  };
  </script>
  <style></style>
  