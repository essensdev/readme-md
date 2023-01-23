<script>
    export let label
    export let value
    export let placeholder
    export let id
    export let name
</script>

<div class="grid grid-cols-2 md:flex md:justify-start my-3 w-full">
    <label class="w-1/5" for={name}>{label}</label>
    <input spellcheck="true" autocomplete="off" class="w-full border" name={name} id={id} type=text bind:value={value} placeholder={placeholder} />
</div>