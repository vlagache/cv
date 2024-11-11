<p class="flex items-center space-x-6 skeleton">
    <Icon icon={icon} class="online-presence-icon" width="30" height="30" />
    <span
        ><a
            href={href}
            target="_blank"
            class="underline hover:text-cat-flamingo">{label}</a
        ></span>
</p>

<script>
    export let icon
    export let label
    export let href

    import Icon from "@iconify/svelte"
</script>
