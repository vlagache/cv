<div class="text-lg space-y-8">
    <!-- TODO: I can cause the page change on the pdf here because I know
    this is where it cuts but if the content changes I'll have to change that. -->
    <div
        id="company-header"
        class="flex space-x-8 {company === 'onepoint'
            ? 'break-before-page'
            : ''}">
        <img src={getLogoPath(company)} alt="Company Logo" class="w-16 h-16" />
        <div id="company-details" class="space-y-2">
            <div id="company-name" class="font-semibold">
                {companyDisplayName}
            </div>
            <div id="employement-period" class="text-base text-cat-overlay1">
                {contract} • {period} • {location}
            </div>
        </div>
    </div>
    <div id="projects" class="space-y-10">
        {#each projects as project}
            <div id="project" class="space-y-6">
                {#if project.positions.length === 1}
                    <div id="position" class="space-y-2">
                        <div class="font-semibold">
                            {project.positions[0].title}
                        </div>
                        {#if projects.length > 1}
                            <div
                                class="text-base font-extralight text-cat-overlay1">
                                {#if project.positions[0].contractType}
                                    {project.positions[0].contractType} •
                                {/if}
                                {project.positions[0].period}
                            </div>
                        {/if}
                    </div>
                {:else}
                    <div id="positions">
                        {#each project.positions as position}
                            <div id="position" class="space-x-8">
                                <span class="font-semibold"
                                    >{position.title}</span>
                                <span
                                    class="text-base font-extralight text-cat-overlay1"
                                    >{position.period}</span>
                            </div>
                        {/each}
                    </div>
                {/if}

                <div id="project-description" class="leading-loose">
                    {project.description}
                </div>

                <div id="project-achievements" class="space-y-2">
                    {#each project.achievements as achievement}
                        <p id="achievement" class="flex items-start space-x-6">
                            <Icon
                                icon="lucide:check"
                                class="shrink-0 text-cat-green achievement-icon"
                                width="20"
                                height="20" />
                            <span
                                class="mt-[-0.4em] text-base test-justify leading-loose"
                                >{@html achievement.description}</span>
                        </p>
                    {/each}
                </div>

                <div id="project-skills" class="space-x-4">
                    {#each project.skills as skill}
                        <Badge border rounded class="badge-project-skill">
                            {skill}
                        </Badge>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</div>

<script lang="ts">
    import Icon from "@iconify/svelte"
    import { Badge } from "flowbite-svelte"
    import type { Project } from "src/types/types"

    import alegriaLogo from "@assets/alegria_logo.svg"
    import capgeminiLogo from "@assets/cap_logo.svg"
    import onepointLogo from "@assets/onepoint_logo.jpeg"

    export let company: string
    export let companyDisplayName: string
    export let contract: string
    export let period: string
    export let location: string
    export let projects: Project[]

    const logos = [
        { company: "capgemini", path: capgeminiLogo },
        { company: "alegria", path: alegriaLogo },
        { company: "onepoint", path: onepointLogo },
    ]

    function getLogoPath(company: string) {
        const logo = logos.find((logo) => logo.company === company)
        return logo ? logo.path : ""
    }
</script>
