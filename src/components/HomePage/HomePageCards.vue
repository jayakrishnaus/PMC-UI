<template>
    <div class="rounded-card" @mouseenter="hover = true" @mouseleave="hover = false">
    <v-card-title class="text-h6">
        Card Title
    </v-card-title>
    <v-card-text>
        This is the subtext of the card. You can add more content here.
    </v-card-text>
    <v-divider></v-divider>
    <div v-if="hover" class="overlay"></div>
  </div>
        

</template>
  
  <script>
  export default {
    name: "HomePageCard",

    data: () => ({
      hover: false,
    })}
  </script>
  
  <style scoped>
  .rounded-card {
    border-radius: 10px;
    transition: background-color 0.3s;
    position: relative;
    /* Add border-image properties */

    border-style: dashed;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(202, 236, 12, 0.7); /* Yellow with transparency */
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .rounded-card:hover {
    background-color: transparent;
  }
  
  .rounded-card:hover .overlay {
    opacity: 1;
  }
  </style>
  