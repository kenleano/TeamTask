<template>
    <div>
      <NavigationBar />
      <h1>Members</h1>
      <MemberCard />
    </div>
  </template>
  
  <script>
  import NavigationBar from "@/components/NavigationBar.vue";
  import MemberCard from "@/components/MemberCard.vue";
  
  export default {
    components: {
      NavigationBar,
      MemberCard,
    },
  };
  </script>
  <style></style>
  