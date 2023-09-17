<template>
    
    <v-card class="location-card " >
      <v-card-title>
        <div class="d-flex justify-space-between align-center mt-2">
          <div class="mt-2 mx-2">
            {{ locationName }}
          </div>
          <div class="pr-2">
            {{ distance }} km
          </div>
        </div>
      </v-card-title>
      
      <v-card-text>
        <v-row>
          <v-col cols="3">
            <div >
              <v-icon color="green">mdi-star</v-icon>
              <span class="rating">{{ rating }}/5</span>
            </div>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="6">
            <div>
              <v-icon color="green">mdi-map-marker-outline</v-icon>
              {{ address }}
            </div>
          </v-col>
        </v-row>
      </v-card-text>
      
      <v-card-actions>
        <div class="price mb-2 mx-2">
          Price: ${{ price }}
        </div>
        <div class="status mb-2 mx-2">
          Status: {{ status }}
        </div>
      </v-card-actions>
    </v-card>

  </template>
  
  <script>
  export default {
    props: {
      locationName: String,
      distance: Number,
      rating: Number,
      address: String,
      price: Number,
      status: String,
    },
  };
  </script>
  
  <style scoped>

  .location-card {
    max-height: 200px; /* Adjust the width as per your requirements */
    /* Add any other custom styles you need for your card */
  }
 
  </style>
  