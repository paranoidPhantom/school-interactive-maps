import { createApp } from 'vue'
import { createPinia } from 'pinia'
import FloatingVue from 'floating-vue'
import App from './App.vue'
import './base.css'
import 'floating-vue/dist/style.css'

const pinia = createPinia()

setTimeout(() => {
    const watermark = document.querySelector(".mapboxgl-ctrl-bottom-right")

    watermark?.remove()
}, 100);

const app = createApp(App)

app.use(FloatingVue);
app.use(pinia)
app.mount('#app')