<script>
  import { basicInfo } from "../../stores";
  import Input from "./Input.svelte";
</script>

<div class="mb-10">
  <h3 class="mb-5">Basic Information</h3>
  {#each $basicInfo as el (el.key)}
    {#if el.name == "desc"}
      <div class="flex flex-col lg:flex-row md:justify-start my-4 w-full">
        <label class="w-1/5" for="desc">Description:</label>
        <textarea
          spellcheck="true"
          name="desc"
          id="desc"
          rows="6"
          class="w-full border"
          maxlength="300"
          bind:value={el.value}
          placeholder={el.placeholder}
        />
      </div>
    {:else if el.name == "subtitle"}
    <div class="flex flex-col lg:flex-row md:justify-start my-4 w-full">
      <label class="w-1/5" for="desc">Description:</label>
      <textarea
        spellcheck="true"
        name="desc"
        id="desc"
        rows="2"
        class="w-full border"
        maxlength="150"
        bind:value={el.value}
        placeholder={el.placeholder}
      />
    </div>
  {:else}
      <Input
        name={el.name}
        label={el.label}
        id={el.name}
        bind:value={el.value}
        placeholder={el.placeholder}
      />
    {/if}
  {/each}
</div>
