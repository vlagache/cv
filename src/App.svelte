<main>
    <div class="bg-cat-flamingo">
        je tente de faire mon cv avec svelte/vite sur githubpage
    </div>
    <div>GITHUB ACTION MARCHE?</div>
    <div class="text-3xl">CA ecrit en Poppins ce truc ?</div>
    <Badge border>Default</Badge>
    <Card href="/cards">
        <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
        </p>
    </Card>

    <button on:click={downloadPDF}>Télécharger la page en PDF</button>

    {#if commitDate}
        <p>Dernier commit sur le repo : {commitDate}</p>
    {:else}
        <p>Chargement...</p>
    {/if}

    {#if coverageData}
        <p>Lines coverage: {coverageData.total.lines.pct}%</p>
    {:else}
        <p>Chargement de la couverture...</p>
    {/if}

    <svg
        class="stroke-cat-peach"
        width="175"
        height="119"
        viewBox="0 0 175 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M37.8377 2.65698C28.0712 4.07471 8.05838 3.92133 3.38152 15.9472C1.02841 21.9979 10.1666 27.3991 14.2106 29.5656C21.3658 33.3987 30.1085 37.0335 36.1969 42.4456C42.7046 48.2303 35.0863 51.6036 30.1261 54.9974C13.1161 66.6359 16.3827 75.3889 34.8843 82.0701C65.4449 93.1059 99.6672 93.75 131.443 99.2981C142.597 101.245 153.805 101.676 164.833 104.22C168.696 105.112 170.387 103.656 166.966 100.857C164.522 98.8573 147.099 86.0787 156.711 93.5554C160.778 96.7186 169.144 98.493 172.216 102.334C174.229 104.85 152.263 111.77 148.589 116.362"
            stroke-width="5"
            stroke-linecap="round"></path>
    </svg>
</main>

<script lang="ts">
    import { Badge, Card } from "flowbite-svelte"
    import { downloadPDF } from "@lib/utils/pdf"
    import { getLastCommitDate } from "@lib/utils/github"
    import { getCoverageData } from "@lib/utils/coverage"
    import { onMount } from "svelte"
    let commitDate: string | null = null
    let coverageData: any = null

    onMount(async () => {
        coverageData = await getCoverageData()
        commitDate = await getLastCommitDate()
    })
</script>

<style>
</style>
