<script>
export let title
</script>
<div class="my-6">
    <h4 class="text-base text-a1 dark:text-a8">{title}</h4>
    <div class="grid grid-cols-3 md:grid-cols-5 gap-2 text-[0.8rem] mt-3">
     <slot />
    </div>
  </div>