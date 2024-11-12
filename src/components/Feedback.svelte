<figure class="mx-auto text-center">
    <QuoteSolid class="mx-auto mb-3 w-12 h-12 text-cat-peach" />
    <Blockquote
        alignment="center"
        class="text-cat-text text-lg text-justify font-thin"
        >{content}</Blockquote>
    <figcaption
        class="flex justify-center items-center mt-6 space-x-3 rtl:space-x-reverse">
        <img class="w-20 h-20 rounded-full" src={jfPhoto} alt="jfProfile" />
        <div
            class="flex items-center divide-x-2 print:divide-x-[1px] rtl:divide-x-reverse divide-cat-overlay0">
            <cite class="pe-3 flex space-x-2 font-medium text-cat-text text-lg">
                {authorName}
                <span>
                    <a href={linkedin} target="_blank">
                        <Icon
                            icon="mdi:linkedin"
                            width="24"
                            height="24"
                            class="ml-2 shrink-0 text-cat-blue feedback-icon" />
                    </a>
                </span>
            </cite>
            <cite class="ps-3 text-base font-light text-cat-overlay0"
                >{title} • {company}
            </cite>
        </div>
    </figcaption>
</figure>

<script>
    export let authorName
    export let linkedin
    export let company
    export let title
    export let content

    import jfPhoto from "@assets/jf.jpg"
    import Icon from "@iconify/svelte"
    import { Blockquote } from "flowbite-svelte"
    import { QuoteSolid } from "flowbite-svelte-icons"
</script>
