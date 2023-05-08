<script setup>
import { useOrganizationStore } from "../stores/organization";
import { ref, render } from "vue";
import { storeToRefs } from "pinia";

const root = ref();
const attachment_grid = ref();

const { setModalEnabled } = useOrganizationStore();
const store = useOrganizationStore();
const { modalOpen } = storeToRefs(store);

function closeModal() {
    setModalEnabled(false);
}

setInterval(() => {
    try {
        const viewer = new Viewer(attachment_grid.value, {
            button: false,
            title: false,
            toolbar: false,
            navbar: 4,
            zoomRatio: 0.2,
        });
    } catch (error) {}
}, 500);
</script>

<template>
    <Transition>
        <main ref="root" v-if="modalOpen">
            <button class="close" @click="closeModal">X</button>
            <div class="attachment-grid" ref="attachment_grid">
                <img v-for="image in store.images" :src="`/images/${store.icon}/${image}.webp`" />
            </div>
            <h1 class="name">{{ store.name }}</h1>
            <p class="description">{{ store.description }}</p>
            <a :href="`${store.link}`" target="_blank" >
                <button v-tooltip="'Google карты'" class="link">
                    <i class="fa-solid fa-map-location-dot"></i>
                </button>
            </a>
        </main>
    </Transition>
</template>

<style scoped>
main {
    position: absolute;
    width: calc(100% - 20rem);
    height: calc(100% - 10rem);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(0.5rem);
    z-index: 3;
    box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
    overflow: auto;
    padding: 1rem;
}

main::-webkit-scrollbar {
    width: 10px;
}

main::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 1rem rgba(0, 0, 0, 0.8);
    border-radius: 1rem;
}

@media screen and (max-width: 800px) {
    main {
        width: calc(100% - 5rem);
        height: calc(100% - 5rem);
    }
    .attachment-grid > img {
        border-radius: 0.5rem;
        cursor: pointer;
        max-width: 90%;
        height: auto;
        object-fit: cover;
    }
}

.close {
    position: fixed;
    top: 1rem;
    right: 0.5em;
    width: 1.5rem;
    aspect-ratio: 1;
    border-radius: 1rem;
    background-color: rgb(255, 100, 100);
    border: none;
    cursor: pointer;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}

.link {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    transition: all 0.3s;
}

.link:hover {
    box-shadow: 0 0 1rem rgba(255, 255, 255, 0.4);
}

.thumbnail {
    width: 8rem;
    aspect-ratio: 1.2;
    object-fit: cover;
    border-radius: 1rem;
}

.attachment-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
}

.attachment-grid > img {
    border-radius: 0.5rem;
    cursor: pointer;
    height: 20rem;
    object-fit: cover;
}

.v-enter-active,
.v-leave-active {
    transition: all 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    filter: blur(2rem);
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
}
</style>
