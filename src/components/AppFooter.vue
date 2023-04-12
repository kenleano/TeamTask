<template>
    <footer class="footer">
      <div class="container">
        <span class="text-muted">&copy; Project Management System{{ message }}</span>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AppFooter',
    props: {
      message: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style>
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
  }
  </style>