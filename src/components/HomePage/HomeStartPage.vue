<template>
      <div class="content">
        <v-row >
            <v-col cols="6" class="find-park mt-15"> <v-card
                class="mx-auto rounded-xl"
                max-width="500"
                height="400px"
              >
              <v-row class="mb-3">
                <v-col class="mt-2"><v-icon @click="step=1">mdi-map-marker-outline</v-icon> <div>Find Parking Spot</div></v-col>
                <v-col class="mt-2"><v-icon @click="step=2">mdi-map-marker-outline</v-icon><div>Rent a Spot</div>
                   
        </v-col></v-row> 
        <v-divider></v-divider>
                <v-card-title class="text-h6 mt-5 font-weight-regular justify-space-between">
                  <span>{{ currentTitle }}</span>
                 
                </v-card-title>
            
                <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-card-text>
                      <v-text-field
                        label="Search here..."
                        placeholder="new york"
                      ></v-text-field>
                      <span class="text-caption text-grey-darken-1">
                        Search the name of the Location
                      </span>
                    </v-card-text>
                  
                  </v-window-item>
            
                  <v-window-item :value="2">
                    <v-card-text>
                      
                      <span class="text-caption text-grey-darken-1">
                        Start earning money by listing your spot in our platform.
                      </span>
                    </v-card-text>
                    
                  </v-window-item>
                </v-window>
            
                <v-divider></v-divider>
            
                <v-card-actions>
                  <v-btn
                    v-if="step == 1"
                    variant="tonal"
                   color="blue"
                  >
                    Search Now
                  </v-btn>
          <v-spacer></v-spacer>
                  <v-btn
                    v-if="step ==2"
                    color="blue"
                    variant="tonal"
                   
                  >
                    Get Started
                  </v-btn>
                </v-card-actions>
              </v-card></v-col>
          
        </v-row>
      </div>

</template>
  
  <script>
  export default {
    name: "HomePage",
    data: () => ({
      step: 1,
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

  .content {
    /* Style your content here */
    text-align: center;
    padding: 20px;
  }
  .find-park {
    max-height: 200px; /* Adjust the width as per your requirements */
    /* Add any other custom styles you need for your card */
  }
  .rent-spot {
    max-height: 200px; /* Adjust the width as per your requirements */
    /* Add any other custom styles you need for your card */
  }
  </style>
  