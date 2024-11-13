<div class="text-lg space-y-8">
    <div id="formation-header" class="space-y-2">
        <div id="formation-title" class="font-semibold">
            {title}
        </div>
        <div id="formation-details" class="text-base text-cat-overlay1">
            <span class="text-cat-text">{school}</span> • {period} • {location}
        </div>
    </div>

    <div id="formation-content" class="space-y-6">
        <div id="formation-description" class="leading-loose">
            {@html description}
        </div>

        <div id="formation-achievement">
            <p class="flex items-start space-x-6">
                <Icon
                    icon="humbleicons:certificate"
                    class="shrink-0 text-cat-yellow achievement-icon"
                    width="20"
                    height="20" />

                <span class="mt-[-0.4em] text-base test-justify leading-loose">
                    {@html achievement}
                </span>
            </p>
        </div>

        <div id="project-skills" class="space-x-4 space-y-2">
            {#each skills as skill}
                <Badge border rounded class="badge-project-skill">
                    {skill}
                </Badge>
            {/each}
        </div>
    </div>
</div>

<script lang="ts">
    import Icon from "@iconify/svelte"
    import { Badge } from "flowbite-svelte"

    export let title
    export let school
    export let period
    export let location
    export let description
    export let achievement
    export let skills: string[]
</script>
