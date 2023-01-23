<script>
    export let label
    export let value
    export let placeholder
    export let id
    export let name
</script>

<div class="flex flex-col lg:flex-row md:justify-start my-4 w-full">
    <label class="w-1/5 mb-2" for={name}>{label}</label>
    <input spellcheck="true" autocomplete="off" name={name} id={id} type=text bind:value={value} placeholder={placeholder} />
</div>