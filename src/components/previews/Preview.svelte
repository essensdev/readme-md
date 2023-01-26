<script>
  import {
    basicInfo,
    socialLinks,
    coreSkills,
    frontendSkills,
    backendSkills,
  } from '../../stores';

  $: name = $basicInfo[0].value;
  $: subtitle = $basicInfo[1].value;
  $: desc = $basicInfo[2].value;
  $: location = $basicInfo[3].value;
  $: currently = $basicInfo[4].value;
  $: recent = $basicInfo[5].value;
</script>

<div class="h-full text-a2 dark:text-a7 p-8">
  <div>
    {#if name.length > 0}
      <h1 class="text-4xl">{name}</h1>
    {/if}
    {#if subtitle.length > 0}
      <p class="my-5 text-xl">{subtitle}</p>
    {/if}
    {#if desc.length > 0}
      <p class="mb-5 text-sm">⤷ {desc}</p>
    {/if}

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
    <div class="my-5">
      {#if location.length > 0}
        <p>⚐ {location}</p>
      {/if}
    </div>

    <div class="my-5">
      {#if currently.length > 0}
        <p>ϟ Currently {currently}</p>
      {/if}
      {#if recent.length > 0}
        <p>ϟ Recently {recent}</p>
      {/if}
    </div>
  </div>

  <!-- SKILLS -->
  <div class="flex justify-start items-center gap-2 my-2 flex-wrap">
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
