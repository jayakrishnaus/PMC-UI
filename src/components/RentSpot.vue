<template>
    <v-row>
        <v-col cols="6">
            <div >  <v-img
                src="../assets/images/add-image.png"
                height="400px"
                
              /></div>
              <v-sheet
              class="mx-auto mt-5"
             
             
            >
              <v-slide-group
                v-model="model"
                class="pa-4"
                selected-class="bg-success"
                show-arrows
              >
                <v-slide-group-item
                  v-for="n in 6"
                  :key="n"
                  v-slot="{ isSelected, toggle, selectedClass }"
                >
                  <v-card
                    color="grey-lighten-1"
                    :class="['ma-4', selectedClass]"
                    height="100"
                    width="100"
                    @click="toggle"
                  >
                    <div class="d-flex fill-height align-center justify-center">
                      <v-scale-transition>
                        <v-img
                        src="../assets/logo.png"
                        height="225px"
                        cover
                      />
                      </v-scale-transition>
                    </div>
                  </v-card>
                </v-slide-group-item>
              </v-slide-group>
            </v-sheet>
        </v-col>
        <v-col cols="6">
            <v-form class="mt-5">
                <v-col><div class="form-label">Name</div><v-text-field hide-details label="Name"></v-text-field></v-col>
                <v-col><div class="form-label">Mobile Number</div><v-text-field hide-details label="Phone Number"></v-text-field></v-col>
                <v-col><div class="form-label">Email</div><v-text-field hide-details label="Email"></v-text-field></v-col>
                <v-col><div class="form-label">Message</div><v-textarea hide-details label="Message"></v-textarea></v-col>
                <v-btn variant="tonal" color="blue">Send</v-btn>
            </v-form>
        </v-col>
    </v-row>
</template>
<script>

</script>
<style scoped>
.scrollable-container {
    overflow-x: auto;
    white-space: nowrap;
    padding: 10px; /* Add some padding for spacing */
  }
  
  /* Add margin between images */
  .scrollable-container .v-image {
    margin-right: 10px;
  }
  .form-label{
    color: blue
  }
</style>