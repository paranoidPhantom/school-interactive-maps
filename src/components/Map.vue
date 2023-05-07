<template>
  <div class="map-wrap">
    <div class="map" ref="mapContainer"></div>
  </div>
</template>

<script setup>
import { Map, NavigationControl, Marker } from 'maplibre-gl';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import { useOrganizationStore } from '../stores/organization'
import { markers } from '../markers'
const store = useOrganizationStore()
const { setModalEnabled } = store

const mapContainer = shallowRef(null);
const map = shallowRef(null);

onMounted(() => {
  const apiKey = 'ilN5XKWTe1UEENaX0bSF';
  const initialState = {
    lng: 30.33373497560444,
    lat: 59.926662221959766,
    zoom: 13.4
  };

  map.value = markRaw(new Map({
    container: mapContainer.value,
    style: `https://api.maptiler.com/maps/basic/style.json?key=${apiKey}&lang=ru`,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  }));
  map.value.addControl(new NavigationControl(), 'top-right');
  markers.forEach(data => {
    const img = document.createElement("img")
    img.addEventListener("click", () => {
      store.name = data.name
      store.images = data.images
      store.description = data.description
      store.link = data.link
      store.icon = data.icon
      setModalEnabled(true)
    })
    img.classList.add("marker-img")
    img.setAttribute('src', `/icons/${data.icon}.webp`)
    new Marker(img)
      .setLngLat([data.lng, data.lat])
      .addTo(map.value);
  })
})
onUnmounted(() => {
  map.value?.remove();
})
</script>


<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
  height: calc(100vh);
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>