import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './base.css'

const pinia = createPinia()

setTimeout(() => {
    const watermark = document.querySelector(".mapboxgl-ctrl-bottom-right")

    watermark?.remove()
}, 100);

createApp(App)
    .use(pinia)
    .mount('#app')