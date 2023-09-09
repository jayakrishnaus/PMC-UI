<template>
  <v-container fluid>
    <v-row class="mt-5 mx-2">
      <v-col cols="12" sm="6"> <!-- Use full width on mobile and half on small screens -->
        <!-- Search input -->
        <v-row>
          <v-col cols="10">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search"
              class="rounded-input"
              @focus="onInputFocus"
              @blur="onInputBlur"
            />
          </v-col>
          <v-col cols="2">
            <v-icon>mdi-plus</v-icon>
          </v-col>
        </v-row>
        <br />
        <v-row class="mx-2">
          <h4>Spots Found:</h4> {{ rentalData.length }}
        </v-row>
        <v-divider class="mt-4"></v-divider>
        <!-- Scrollable container for filtered RentCards components -->
        <div class="scrollable-container mt-2">
          <!-- Use a v-for loop to iterate over filteredRentals and create RentCards components -->
          <div v-for="(rental, index) in filteredRentals" :key="index">
            <RentCards
              :locationName="rental.locationName"
              :distance="rental.distance"
              :rating="rental.rating"
              :address="rental.address"
              :price="rental.price"
              :status="rental.status"
            />
            <br />
          </div>
        </div>
      </v-col>
      <v-col cols="12" sm="6"> <!-- Use full width on mobile and half on small screens -->
        <Map :searchPlace="searchQuery" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Map from './Map.vue'
import RentCards from './RentCards.vue';

export default {
  components:{Map,RentCards},
  data() {
    return {
      searchQuery: '',
       rentalData : [
  {
    locationName: "Sample Location 1",
    distance: 3,
    rating: 4.5,
    address: "123 Main St, City 1",
    price: 25.99,
    status: "Open"
  },
  {
    locationName: "Sample Location 2",
    distance: 4,
    rating: 4.0,
    address: "456 Elm St, City 2",
    price: 29.99,
    status: "Closed"
  },
  {
    locationName: "Sample Location 2",
    distance: 4,
    rating: 4.0,
    address: "456 Elm St, City 2",
    price: 29.99,
    status: "Closed"
  },
  {
    locationName: "Sample Location 2",
    distance: 4,
    rating: 4.0,
    address: "456 Elm St, City 2",
    price: 29.99,
    status: "Closed"
  },
  {
    locationName: "Sample Location 2",
    distance: 4,
    rating: 4.0,
    address: "456 Elm St, City 2",
    price: 29.99,
    status: "Closed"
  },
  {
    locationName: "Sample Location 2",
    distance: 4,
    rating: 4.0,
    address: "456 Elm St, City 2",
    price: 29.99,
    status: "Closed"
  },
  {
    locationName: "Sample Location 2",
    distance: 4,
    rating: 4.0,
    address: "456 Elm St, City 2",
    price: 29.99,
    status: "Closed"
  },
  // Add more entries as needed
]
    };
  },
  computed: {
    filteredRentals() {
      // Filter rentals based on searchQuery
      const lowerCaseQuery = this.searchQuery.toLowerCase();
      return this.rentalData.filter((rental) =>
        rental.locationName.toLowerCase().includes(lowerCaseQuery)
      );
    },
  },
  methods: {
    onInputFocus() {
      // Handle input focus if needed
    },
    onInputBlur() {
      // Handle input blur if needed
    },
  },
};
</script>



<style scoped>
/* Your styles here */
.scrollable-container {
  max-height: 550px; /* Adjust the max-height as needed */
  min-height: 550px;
  overflow-y: scroll;
 
  padding: 10px;
}
.scrollable-container::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/* Make the scrollbar blue */
.scrollable-container::-webkit-scrollbar-thumb {
  background-color: rgb(152, 152, 199);
  border-radius: 3px;
}

/* Optionally, change the scrollbar track color (background) */
.scrollable-container::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

input.rounded-input {
  width: 100%; /* Adjust the width as needed */
  height: 40px; /* Adjust the height as needed */
  border-radius: 20px; /* Adjust the border-radius for rounded corners */
  border: 1px solid #ccc; /* Add a border for a clean look */
  padding: 10px; /* Add padding as needed */
  transition: border-color 0.3s, box-shadow 0.3s; /* Add smooth transitions */
  color:rgb(162, 171, 247);
  border-color: rgb(124, 128, 250)
}
input.rounded-input:focus {
  border-color: #007bff; /* Change border color on focus */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Add box shadow on focus */
}

/* Apply styles when the mouse hovers over the input */
input.rounded-input:hover {
  border-color: #007bff; /* Change border color on hover */
}

input.rounded-input:focus {
  border-color: blue; /* Change border color on focus */
  box-shadow: 0px 2px 4px rgba(0, 0, 255, 0.3); /* Show blue shadow on focus */
}


</style>
