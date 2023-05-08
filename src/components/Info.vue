<script setup>
import { useOrganizationStore } from "../stores/organization";
import { storeToRefs } from "pinia";

const store = useOrganizationStore();
const { modalOpen } = storeToRefs(store);
</script>

<template>
    <Transition>
        <div class="container" v-if="!modalOpen">
            <p v-tooltip="'Сайт создан в рамках итогового проекта по информатике'">
                <img src="/info/information-button.png">
            </p>
            <a href="https://github.com/paranoidPhantom/school-interactive-maps" target="_blank" v-tooltip="'Github'">
                <i class="fa-brands fa-github"></i>
            </a>
            <p class="pipe"></p>
            <p>Использованные технологии -</p>
            <a href="https://www.maptiler.com" target="_blank" v-tooltip="'MapTiler'">
                <img src="/info/maptiler.png">
            </a>
            <a href="https://www.typescriptlang.org" target="_blank" v-tooltip="'TypeScript'">
                <img src="/info/ts.png" alt="">
            </a>
            <a href="https://vitejs.dev" target="_blank" v-tooltip="'Vite.js'">
                <img src="/info/vite.png">
            </a>
            <a href="https://vuejs.org" target="_blank" v-tooltip="'Vue.js'">
                <i class="fa-brands fa-vuejs"></i>
            </a>
        </div>
    </Transition>
</template>

<style scoped>
.container {
    position: fixed;
    height: 3rem;
    left: 0;
    bottom: 0;
    border-top-right-radius: 1rem;
    backdrop-filter: blur(0.5rem);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem 1rem;
    gap: 1rem;
}

a, p {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.7);
}

i {
    font-size: 2rem;
    transition: all 0.3s ease;
    cursor: pointer;
}

img {
    height: 2rem;
    transition: all 0.3s ease;
    cursor: pointer;
    opacity: 0.7;
}

i:hover, img:hover {
    color: rgba(0, 0, 0, 1);
    opacity: 1;
}

.pipe {
    border: rgba(0, 0, 0, 0.2) 0.3px solid;
    height: 2rem;
    border-radius: 1rem;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(200%);
}
</style>
