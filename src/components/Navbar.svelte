<header class="sticky top-0 z-20 print:hidden">
    <Navbar class="bg-transparent skeleton">
        <div
            id="debug"
            class="text-sm text-cat-red flex flex-row space-x-2 skeleton ml-10">
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
        <div class="flex flex-row space-x-4 mr-10">
            <button
                id="skeleton-button"
                on:click={handleSkeletonMode}
                class="w-7 h-7">
                <ColumnSolid
                    class="w-7 h-7 {skeletonButtonIsClicked
                        ? 'text-cat-red'
                        : 'text-cat-surface2 hover:text-cat-flamingo'}" />
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
            <div>
                <button
                    id="pdf-button"
                    on:click={handlePdfDownload}
                    class="w-7 h-7">
                    <FilePdfSolid
                        class="w-7 h-7 text-cat-surface2 hover:text-cat-flamingo" />
                </button>
                <Tooltip
                    triggeredBy="#pdf-button"
                    placement="bottom"
                    class="bg-cat-transparent text-xs text-cat-rosewater border-2 border-cat-rosewater p-2"
                    arrow={false}>
                    Télécharger ce CV au format PDF
                </Tooltip>
            </div>
            <div>Bouton 3</div>
        </div>
    </Navbar>
</header>

<script lang="ts">
    import { downloadCorrectPdf } from "@lib/utils/pdf"
    import { toggleSkeleton } from "@lib/utils/skeleton"
    import { ThemeMode } from "@lib/enums"
    import { A, Badge, Navbar, Tooltip } from "flowbite-svelte"
    import {
        ClockSolid,
        CheckCircleSolid,
        ColumnSolid,
        FilePdfSolid,
    } from "flowbite-svelte-icons"

    export let lastUpdateDate
    export let coverageDataPercentage

    let skeletonButtonIsClicked: boolean =
        import.meta.env.VITE_SKELETON_MODE_ACTIVATED === "true"

    function handleSkeletonMode() {
        skeletonButtonIsClicked = !skeletonButtonIsClicked
        toggleSkeleton()
    }

    function handlePdfDownload() {
        downloadCorrectPdf(ThemeMode.DARK)
    }
</script>
