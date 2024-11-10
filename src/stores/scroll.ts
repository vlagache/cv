import { writable } from "svelte/store"

export const scrollY = writable(0)

const updateScroll = () => {
    scrollY.set(window.scrollY)
}

window.addEventListener("scroll", updateScroll)
