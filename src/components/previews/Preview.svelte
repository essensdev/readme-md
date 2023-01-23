<script>
  import BasicInfo from "./BasicInfo.svelte";
  import {
    socialLinks,
    coreSkills,
    frontendSkills,
    backendSkills,
  } from "../../stores";
</script>

<div class="h-full text-a2 dark:text-a7 p-8">
  <BasicInfo />

  <!-- SOCIAL LINKS -->
  <div class="flex justify-start items-center gap-2 my-5">
    {#each $socialLinks as link (link.key)}
      {#if link.value.length > 0}
        <a
          href={`${link.url}${link.value}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img class="w-6 mx-1" alt={link.name} src={link.img} /></a
        >
      {/if}
    {/each}
  </div>

  <!-- SKILLS -->
  <div class="flex justify-start items-center gap-2 my-2">
    {#each $coreSkills as skill (skill.key)}
      {#if skill.value == true}
        <img class="w-6 mx-1" alt={skill.alt} src={skill.img} />
      {/if}
    {/each}

    {#each $frontendSkills as skill (skill.key)}
      {#if skill.value == true}
        <img class="w-6 mx-1" alt={skill.alt} src={skill.img} />
      {/if}
    {/each}

    {#each $backendSkills as skill (skill.key)}
    {#if skill.value == true}
      <img class="w-6 mx-1" alt={skill.alt} src={skill.img} />
    {/if}
  {/each}
  </div>
</div>
