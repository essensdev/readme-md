<script>
  import BasicInfo from "./inputs/BasicInfo.svelte";
  import Socials from "./inputs/Socials.svelte";
  import Skills from "./inputs/Skills.svelte";

</script>

<div class="lg:grid grod-cols-2 w-full my-20 md:my-36 gap-20">
  <form class="flex flex-col mb-20 lg:mb-0">
    <BasicInfo />
    <Socials />
    <Skills />
  </form>
</div>
