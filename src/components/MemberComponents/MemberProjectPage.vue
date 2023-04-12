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
    <AppFooter/>
  </template>
  
  <script>
  // import NavigationBarMember from "./NavigationBarMember.vue";
  import MemberProjectCard from "./MemberProjectCard.vue";
  import NavigationBar from "@/components/NavigationBar.vue";
  import AppFooter from '../AppFooter.vue';

  
  export default {
    components: {
      // NavigationBarMember,
      MemberProjectCard,
      NavigationBar,
      AppFooter, 
    },
      data() {
    return {
      selectedProjectId: null,
    };
  }
  };
  </script>
  <style></style>
  