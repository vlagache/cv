<p class="flex items-center space-x-6">
    <Icon
        icon={icon}
        width="30"
        height="30"
        class={`skill-icon shrink-0 ${className}`} />
    <span>{label}</span>
</p>

<script>
    export let icon
    export let label
    export let className = ""

    import Icon from "@iconify/svelte"
</script>
