<template>
    <div ref="map" class="map"></div>

</template>

<script>
import mapboxgl from 'mapbox-gl';
import mapCredentials from '@/helpers/mapCredentials.js';
export default {
  props:{
    searchPlace: {
      type:String,
  }
},
  data() {
    return {
      map: null,
      accessToken: mapCredentials.accessToken, // Replace with your Mapbox access token
    };
  },
  watch:{
searchPlace(query){
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${this.accessToken}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.features && data.features.length > 0) {
            const result = data.features[0];
            const coordinates = result.center;

            // Fly to the searched place
            this.map.flyTo({ center: coordinates, zoom: 14 });
          }
        })
        .catch((error) => {
          console.error(error);
        });
}
  },

  mounted() {
    // Initialize Mapbox map
    mapboxgl.accessToken = this.accessToken;
    this.map = new mapboxgl.Map({
      container: this.$refs.map,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [77.2090, 28.6139],
      zoom: 10,
    });

    // Add markers for Delhi and Mumbai
    this.addMarker([77.2090, 28.6139], 'Delhi');
    this.addMarker([72.8777, 19.0760], 'Mumbai');
  },
  methods: {
    addMarker(coordinates, title) {
      const markerElement = document.createElement('div');
      markerElement.className = 'marker';

      new mapboxgl.Marker(markerElement)
        .setLngLat(coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${title}</h3>`))
        .addTo(this.map);
    },


  },
};
</script>

<style scoped>
.map {
  height: 600px;

}

.marker {
  background-image: url('https://docs.mapbox.com/mapbox-gl-js/assets/pin-red.png');
  width: 30px;
  height: 45px;
  background-size: cover;
  cursor: pointer;
}
</style>
