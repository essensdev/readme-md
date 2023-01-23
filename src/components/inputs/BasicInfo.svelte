<script>
import { basicInfo } from "../../stores";
import Input from "./Input.svelte";
</script>

 <div class="mb-10">
    <h3 class="mb-5">Basic Information</h3>
    {#each $basicInfo as el (el.key)}
      {#if el.name == "desc"}
        <div
          class="grid grid-cols-2 md:flex md:justify-start my-3 w-full"
        />
        <label class="w-1/5" for="desc">Description</label>
        <textarea
          spellcheck="true"
          name="desc"
          id="desc"
          rows="5"
          class="w-full border"
          bind:value={el.value}
          placeholder={el.placeholder}
        />
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