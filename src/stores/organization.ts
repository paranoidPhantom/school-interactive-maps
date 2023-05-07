import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useOrganizationStore = defineStore('organization', () => {
    const name = ref()
    const images = ref()
    const description = ref()
    const link = ref()
    const icon = ref()
    const modalOpen = ref(false)

    function setModalEnabled(enabled: boolean) {
        modalOpen.value = enabled
    }

    return { name, images, description, link, icon, modalOpen, setModalEnabled }
})