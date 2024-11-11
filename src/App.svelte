<Navbar
    lastUpdateDate={lastUpdateDate}
    coverageDataPercentage={coverageDataPercentage} />
<main>
    <div
        id="cv"
        class="container mx-auto w-full flex flex-row skeleton print:m-0 print:max-w-none">
        <div id="left_part" class="w-3/4 mx-10 mt-20 skeleton print:mr-15">
            <div id="me" class="inline-flex flex-col space-y-5 mb-20 skeleton">
                <Heading
                    tag="h1"
                    color="text-cat-text"
                    customSize="text-5xl font-extrabold">
                    {data.me.name}
                </Heading>
                <Heading
                    tag="h2"
                    color="text-cat-peach"
                    customSize="font-semibold text-4xl jetbrains_font tracking-widest">
                    {data.me.title}
                </Heading>
            </div>
            <div
                id="what_i_want"
                class="text-lg text-justify leading-loose skeleton">
                {@html data.me.what_i_want}
            </div>
        </div>
        <div
            id="right_part"
            class="w-1/4 mt-14 mx-10 grid gap-y-14 skeleton print:ml-15">
            <div id="photo" class="skeleton">
                <svg
                    id="arrow_photo"
                    class="stroke-cat-peach skeleton"
                    viewBox="0 0 184 95"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M183.03 2.01119C168.564 -0.191972 158.82 0.972181 146.475 8.87399C135.326 16.0098 126.026 28.6533 117.677 38.7772C107.34 51.3116 83.6932 70.1236 66.9974 58.9503C54.0337 50.2745 54.5518 30.622 70.8595 26.4444C77.1464 24.8339 84.1201 30.4333 84.6253 36.8274C85.1709 43.7335 78.9487 50.8187 74.3239 55.1633C61.9034 66.8314 44.5447 58.9198 30.1812 64.0831C16.7618 68.9071 10.8958 79.567 5.96193 92.2466C5.53931 93.3327 3.51497 88.9073 2.9078 87.8589C0.681952 84.0156 0.901432 86.1664 2.58439 89.0723C3.66676 90.9412 4.98358 95.485 6.89001 92.9632C8.26543 91.1439 11.9885 88.7563 14.0297 87.5742"
                        stroke-width="2"
                        stroke-linecap="round"></path>
                </svg>
                <img
                    id="me_photo"
                    src={$themeMode === ThemeMode.DARK
                        ? photoDarkTheme
                        : photoLightTheme}
                    alt="Me in light mode"
                    class="w-48 h-48 rounded-full print:w-44 print:h-44" />
            </div>
            <div id="informations" class="leading-loose text-xl skeleton">
                <p id="email" class="flex items-center space-x-2">
                    <Icon
                        icon="ic:outline-email"
                        width="24"
                        height="24"
                        class="information-icon" />
                    <span>{data.informations.email}</span>
                </p>
                <p id="phone" class="flex items-center space-x-2">
                    <Icon
                        icon="lucide:phone"
                        width="24"
                        height="24"
                        class="information-icon" />
                    <span>{data.informations.phone}</span>
                </p>
                <p id="location" class="flex items-center space-x-2">
                    <Icon
                        icon="lucide:map-pin"
                        width="24"
                        height="24"
                        class="information-icon" />
                    <span>{data.informations.location}</span>
                </p>
            </div>
            <div id="skills" class="space-y-2 text-xl leading-loose">
                <p class="section-title">COMPETENCES</p>
                {#each data.informations.skills as skill}
                    <SkillWithIcon
                        icon={skill.icon}
                        label={skill.label}
                        className={skill.class_name} />
                {/each}
            </div>
        </div>
    </div>
</main>

<div class="min-h-[1300px] placeholder"></div>

{#if buttonScrollToTopisVisible}
    <button
        onclick={scrollToTop}
        class="p-2 fixed bottom-20 right-10 bg-cat-lavender text-cat-crust rounded-full">
        <Icon icon="flowbite:angle-top-solid" width="30" height="30" />
    </button>
{/if}

<Footer />

<script lang="ts">
    import photoDarkTheme from "@assets/me_dark.png"
    import photoLightTheme from "@assets/me_light.png"
    import Footer from "@components/Footer.svelte"
    import Navbar from "@components/Navbar.svelte"
    import SkillWithIcon from "@components/SkillWithIcon.svelte"
    import Icon from "@iconify/svelte"
    import { ThemeMode } from "@lib/enums"
    import { getCoveragePercentage } from "@lib/utils/coverage"
    import { getLastUpdateDate } from "@lib/utils/lastUpdateDate"
    import { applyRandomBorderColor } from "@lib/utils/skeleton"
    import { scrollY } from "@stores/scroll"
    import { themeMode } from "@stores/themeMode"
    import { Heading } from "flowbite-svelte"
    import { onMount } from "svelte"
    import { get } from "svelte/store"

    import { cvContent } from "@stores/cvContent"

    let lastUpdateDate: string | null = $state(null)
    let coverageDataPercentage: any = $state(null)
    let buttonScrollToTopisVisible: boolean = $state(false)

    let data = get(cvContent).main_content

    $effect(() => {
        buttonScrollToTopisVisible = $scrollY > window.innerHeight
    })

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    onMount(async () => {
        coverageDataPercentage = getCoveragePercentage()
        lastUpdateDate = getLastUpdateDate()
        applyRandomBorderColor()
    })
</script>

<style>
</style>
