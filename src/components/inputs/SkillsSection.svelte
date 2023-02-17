<script>
  import autoAnimate from "@formkit/auto-animate";
  $: active = false;
  export let title;
  export let subtitle;
</script>

<div class="my-2 border-b border-a4/50 py-4">
  <button on:click={() => (active = !active)} class="w-full flex flex-col justify-center">
    <h4 class="text-base text-a1 dark:text-a8 ">{title}</h4>

    <p class="text-sm text-a4">{subtitle}</p>
  </button>
  <div use:autoAnimate class="mt-3">
    {#if active}
      <div class="grid grid-cols-3 md:grid-cols-5 gap-2 text-[0.8rem]">
        <slot />
      </div>
    {/if}
  </div>
</div>
