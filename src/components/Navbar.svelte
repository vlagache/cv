<header class="sticky top-0 z-20 print:hidden">
    <Navbar class="bg-transparent skeleton">
        <div
            id="debug"
            class="text-sm text-cat-red flex flex-row space-x-2 skeleton ml-10">
            {#if lastUpdateDate}
                <div>
                    <Badge
                        border
                        class="bg-cat-transparent text-cat-lavender text-sm font-semibold border-cat-lavender p-1">
                        <Icon class="w-4 h-4 me-1.5" icon="lucide:clock" />
                        Dernière mise à jour : {lastUpdateDate}
                    </Badge>
                </div>
            {/if}
            {#if coverageDataPercentage}
                <div>
                    <Badge
                        border
                        class="bg-cat-transparent text-cat-lavender text-sm font-semibold border-cat-lavender p-1">
                        <Icon
                            class="w-4 h-4 me-1.5"
                            icon="lucide:circle-check" />
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
        <div class="flex flex-row space-x-4 mr-10">
            <div>
                <button
                    id="theme-button"
                    on:click={toggleThemeMode}
                    class="w-7 h-7">
                    {#if $themeMode === ThemeMode.DARK}
                        <Icon
                            class="text-cat-sapphire"
                            icon="lucide:moon"
                            width="30"
                            height="30" />
                    {:else}
                        <Icon
                            class="text-cat-yellow"
                            icon="lucide:sun"
                            width="30"
                            height="30" />
                    {/if}
                </button>
            </div>

            <div>
                <button
                    id="pdf-button"
                    on:click={handlePdfDownload}
                    class="w-7 h-7">
                    <Icon
                        icon="flowbite:file-pdf-solid"
                        class="text-cat-surface2 hover:text-cat-flamingo"
                        width="30"
                        height="30" />
                </button>
                <Tooltip
                    triggeredBy="#pdf-button"
                    placement="bottom"
                    class="bg-cat-transparent text-xs text-cat-rosewater border-2 border-cat-rosewater p-2"
                    arrow={false}>
                    Télécharger ce CV au format PDF
                </Tooltip>
            </div>
            <div>
                <button
                    id="skeleton-button"
                    on:click={handleSkeletonMode}
                    class="w-7 h-7">
                    <Icon
                        class="w-7 h-7 {skeletonButtonIsClicked
                            ? 'text-cat-red'
                            : 'text-cat-surface2 hover:text-cat-flamingo'}"
                        icon="ic:twotone-border-clear"
                        width="30"
                        height="30" />
                </button>
                {#if !skeletonButtonIsClicked}
                    <Tooltip
                        triggeredBy="#skeleton-button"
                        placement="bottom"
                        class="bg-cat-transparent text-xs text-cat-rosewater border-2 border-cat-rosewater p-2"
                        arrow={false}>
                        Active les bordures
                    </Tooltip>
                {/if}
            </div>
        </div>
    </Navbar>
</header>

<script lang="ts">
    import Icon from "@iconify/svelte"
    import { ThemeMode } from "@lib/enums"
    import { downloadCorrectPdf } from "@lib/utils/pdf"
    import { toggleSkeleton } from "@lib/utils/skeleton"
    import { scrollY } from "@stores/scroll"
    import { themeMode } from "@stores/themeMode"
    import { A, Badge, Navbar, Tooltip } from "flowbite-svelte"
    import { onMount } from "svelte"

    export let lastUpdateDate
    export let coverageDataPercentage

    let skeletonButtonIsClicked: boolean =
        import.meta.env.VITE_SKELETON_MODE_ACTIVATED === "true"

    function handleSkeletonMode() {
        skeletonButtonIsClicked = !skeletonButtonIsClicked
        toggleSkeleton()
    }

    function handlePdfDownload() {
        downloadCorrectPdf($themeMode)
    }

    function toggleThemeMode() {
        $themeMode === ThemeMode.DARK
            ? themeMode.set(ThemeMode.LIGHT)
            : themeMode.set(ThemeMode.DARK)
    }

    $: {
        const header = document.querySelector("header")
        if (header) {
            if ($scrollY > 40) {
                header.classList.add(
                    "backdrop-blur-xl",
                    "border-b-2",
                    "border-cat-lavender",
                    "duration-100",
                    "ease-linear"
                )
                header.classList.remove("bg-transparent")
            } else {
                header.classList.remove(
                    "backdrop-blur-xl",
                    "border-b-2",
                    "border-cat-lavender"
                )
                header.classList.add("bg-transparent")
            }
        }
    }

    onMount(() => {})
</script>
