<template>
    <v-col>
    <div class="background-image" >
     <homeStartPage/>
    </div>
    <div class="cards1">
    <v-item-group class="mt-15" selected-class="bg-primary">
        <v-container>
          <v-row>
            <v-col
              v-for="n in 4"
              :key="n"
            >
              <v-item v-slot="{ isSelected, selectedClass, toggle }">
                <homePageCard/>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </div>
    <div class="cards2">
        <Services/>
    </div>
</v-col>
</template>
  
  <script>
  import homeStartPage from "./HomePage/HomeStartPage.vue";
  import homePageCard from "./HomePage/HomePageCards.vue"
  import Services from "./HomePage/Services.vue"
  export default {
    name: "HomePage",
    components:{
        homeStartPage,
        homePageCard,
        Services
    },
    data: () => ({
      step: 1,
      hover: false,
    }),

  
  computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Find the Parking Spot in Seconds'
          case 2: return 'Make Money By Renting out Your Spot'
          default: return 'Account created'
        }
      },
    },
}
  </script>
  
  <style scoped>
  .background-image {
    /* Set the background image using the relative path to your image in the assets folder */
    background-image: url("../assets/images/carPark.jpg");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
  }
  
  .cards1 {
    /* Set the desired height here, for example: */
    height: 300px; /* Adjust the height as needed */
  }
  .cards2 {
    /* Set the desired height here, for example: */
    height: 300px; /* Adjust the height as needed */
  }
  </style>
  