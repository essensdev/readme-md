<script>
  import autoAnimate from "@formkit/auto-animate";
  import BackendSkills from "./BackendSkills.svelte";
  import CoreSkills from "./CoreSkills.svelte";
  import FrontendSkills from "./FrontendSkills.svelte";

  $: visible = false;
</script>

<div
  use:autoAnimate
  class="mb-10 md:mb-0 border-t border-a4 rounded-none py-2 peer-last:border-y"
>
  <button
    on:click={(event) => {
      event.preventDefault();
      visible = !visible;
    }}
    class="w-full flex justify-between"
    ><h3 class="text-a1 dark:text-a8">
      <span class="mr-3">{visible ? "↓" : "→"}</span>Skills
    </h3></button
  >
  {#if visible}
    <div class="my-5">
      <p class="text-a4 dark:text-a3 text-[0.8rem]">
        *If you would like me to add other social platforms, please reach out on <a
          class="link"
          href="/"
          target="_blank"
          rel="noreferrer noopener">Twitter</a
        >
      </p>
      <CoreSkills />
      <FrontendSkills />
      <BackendSkills />
    </div>
  {/if}
</div>
