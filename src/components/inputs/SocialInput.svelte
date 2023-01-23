<script>
  export let label;
  export let value;
  export let placeholder;
  export let id;
  export let name;
  export let alt;
  export let img;
</script>

<div class="flex justify-evenly items-center my-3 border border-a4 rounded-md">
  <div
    class="flex justify-start items-center bg-a8 dark:bg-a2/50 py-1 rounded-l-md px-2"
  >
    <img width="17" {alt} src={img} />
    <label class="hidden md:block px-2" for={name}>{label}</label>
  </div>
  <input
    autocomplete="off"
    class="border-l rounded-none"
    {name}
    {id}
    type="text" bind:value={value} placeholder={placeholder}
  />
</div>
