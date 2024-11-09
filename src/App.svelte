<header class="sticky top-0 z-20">
    <Navbar class="bg-transparent">
        <div
            id="debug"
            class="text-sm text-cat-red border-2 border-cat-pink flex flex-row space-x-2">
            {#if lastUpdateDate}
                <div>
                    <Badge
                        border
                        class="bg-cat-transparent text-cat-sapphire text-sm font-semibold border-cat-sapphire">
                        <ClockSolid class="w-2.5 h-2.5 me-1.5" />
                        Dernière mise à jour : {lastUpdateDate}
                    </Badge>
                </div>
            {/if}
            {#if coverageDataPercentage}
                <div>
                    <Badge
                        border
                        class="bg-cat-transparent text-cat-sapphire text-sm font-semibold border-cat-sapphire">
                        <CheckCircleSolid class="w-2.5 h-2.5 me-1.5" />
                        <A
                            href="https://github.com/vlagache/cv/tree/master/tests"
                            target="_blank"
                            class="underline hover:text-cat-flamingo"
                            >Couverture de tests : {coverageDataPercentage}%
                        </A>.
                    </Badge>
                </div>
            {/if}
        </div>
        <div class="flex flex-row space-x-2">
            <div>Bouton 1</div>
            <div>Bouton 2</div>
            <div>Bouton 3</div>
        </div>
    </Navbar>
</header>

<main>
    <div
        id="cv"
        class="container mx-auto flex flex-row border-2 border-cat-peach">
        <div
            id="left_part"
            class="border-2 border-cat-rosewater w-2/3 mx-10 mt-20">
            <div
                id="me"
                class="border-2 border-cat-blue inline-flex flex-col space-y-5 mb-20">
                <Heading
                    tag="h1"
                    color="text-cat-text"
                    customSize="text-5xl font-extrabold">
                    {name}
                </Heading>
                <Heading
                    tag="h2"
                    color="text-cat-peach"
                    customSize="font-semibold text-4xl jetbrains_font tracking-widest">
                    {job}
                </Heading>
            </div>
            <div
                id="what_i_want"
                class="border-2 border-cat-mauve text-justify leading-loose">
                Développeur passionné par l'innovation technologique, avec <Mark
                    class="bg-cat-mauve/80 text-cat-base font-semibold"
                    >plus de quatre ans d'expérience en développement
                    d'applications web avec Python</Mark> et <Mark
                    class="bg-cat-mauve/80 text-cat-base font-semibold"
                    >deux ans en développement frontend avec Angular.</Mark> Je suis
                à la recherche d'un <Mark
                    class="bg-cat-mauve/80 text-cat-base font-semibold"
                    >poste de développeur backend Python,</Mark> tout en étant ouvert
                à l'apprentissage d'autres langages ou d'autres domaines du développement
                informatique (logiciel, embarqué, cloud, DevOps). Je dispose également
                d'une <Mark class="bg-cat-mauve/80 text-cat-base font-semibold"
                    >formation en Intelligence Artificielle (IA) et Machine
                    Learning (ML),</Mark> ce qui me permet de comprendre les grands
                principes et les problématiques clés de ces domaines.
                <Mark class="bg-cat-mauve/80 text-cat-base font-semibold"
                    >Intéressé par le MLOps,</Mark> je suis ouvert aux opportunités
                dans ce secteur. J'aime approfondir mes expériences personnelles,
                notamment à travers l'écriture d'articles, comme <Mark
                    class="bg-cat-mauve/80 hover:bg-cat-flamingo text-cat-base font-semibold">
                    <A
                        href="https://medium.com/@vlagache/ma-d%C3%A9couverte-de-neovim-c1c10e90ad6b"
                        target="_blank"
                        class="underline"
                        >ma série sur la découverte de Neovim
                    </A>.
                </Mark>.
            </div>
        </div>
        <div
            id="right_part"
            class="border-2 border-cat-rosewater w-1/3 mt-14 mx-10">
            <div id="photo" class="border-2 border-cat-peach">
                <svg
                    class="stroke-cat-peach arrow_photo"
                    viewBox="0 0 184 95"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M183.03 2.01119C168.564 -0.191972 158.82 0.972181 146.475 8.87399C135.326 16.0098 126.026 28.6533 117.677 38.7772C107.34 51.3116 83.6932 70.1236 66.9974 58.9503C54.0337 50.2745 54.5518 30.622 70.8595 26.4444C77.1464 24.8339 84.1201 30.4333 84.6253 36.8274C85.1709 43.7335 78.9487 50.8187 74.3239 55.1633C61.9034 66.8314 44.5447 58.9198 30.1812 64.0831C16.7618 68.9071 10.8958 79.567 5.96193 92.2466C5.53931 93.3327 3.51497 88.9073 2.9078 87.8589C0.681952 84.0156 0.901432 86.1664 2.58439 89.0723C3.66676 90.9412 4.98358 95.485 6.89001 92.9632C8.26543 91.1439 11.9885 88.7563 14.0297 87.5742"
                        stroke-width="2"
                        stroke-linecap="round"></path>
                </svg>
                <img
                    src={photoDarkTheme}
                    alt="Me in light mode"
                    class="w-48 h-48 rounded-full" />
            </div>
            <div
                id="informations"
                class="border-2 border-cat-pink mt-10 leading-loose text-lg">
                <p class="email">v1.lagache@gmail.com</p>
                <p class="phone">06.86.56.07.77</p>
                <p class="location">Bordeaux</p>
            </div>
        </div>
    </div>
</main>

<div class="min-h-[1000px] placeholder"></div>

<footer class="border-t-2 border-cat-mauve mt-24">
    <Footer class="container mx-auto">
        <div class="py-2 bg-transparent flex flex-row justify-between">
            <div class="skills-icons flex items-center">
                <span class="mr-5">Créé avec</span>
                <img
                    src="https://skillicons.dev/icons?i=svelte,tailwind,githubactions"
                    alt="Skills Icons" />
            </div>

            <div>Article ici blabla</div>
        </div>
    </Footer>
</footer>

<script lang="ts">
    // import { downloadPDF } from "@lib/utils/pdf"
    import { getLastUpdateDate } from "@lib/utils/lastUpdateDate"
    import { getCoveragePercentage } from "@lib/utils/coverage"
    import { onMount } from "svelte"
    import { Heading, Mark, A, Badge, Navbar, Footer } from "flowbite-svelte"
    import { ClockSolid, CheckCircleSolid } from "flowbite-svelte-icons"
    import photoDarkTheme from "@assets/me_dark.png"

    let lastUpdateDate: string | null = null
    let coverageDataPercentage: any = null

    let name: string = "Vincent Lagache"
    let job: string = "Développeur"

    onMount(async () => {
        coverageDataPercentage = getCoveragePercentage()
        lastUpdateDate = getLastUpdateDate()
    })
</script>

<style>
</style>
