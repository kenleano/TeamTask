<template>
    <div>
      <!-- <NavigationBarMember /> -->
      <NavigationBar/>
      <h1>Projects</h1>
      <MemberProjectCard/>
    <MemberTaskPage :projectId="selectedProjectId" />
    </div>
    <div class="splash-page">
      <img src="../../assets/splashBG.png">
    </div>
  </template>
  
  <script>
  // import NavigationBarMember from "./NavigationBarMember.vue";
  import MemberProjectCard from "./MemberProjectCard.vue";
  import NavigationBar from "@/components/NavigationBar.vue";
  
  export default {
    components: {
      // NavigationBarMember,
      MemberProjectCard,
      NavigationBar
    },
      data() {
    return {
      selectedProjectId: null,
    };
  }
  };
  </script>
  <style></style>
  