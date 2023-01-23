<script>
  import {
    basicInfo,
    socialLinks,
    coreSkills,
    frontendSkills,
    backendSkills,
  } from "../../stores";

  $: name = $basicInfo[0].value;
  $: subtitle = $basicInfo[1].value;
  $: desc = $basicInfo[2].value;
  $: location = $basicInfo[3].value;
  $: currently = $basicInfo[4].value;
  $: recent = $basicInfo[5].value;

  const copyText = (event) => {
    event.preventDefault();
    const content = document.getElementById("markdown-output").textContent;
    navigator.clipboard.writeText(content);
  };
</script>

<div
  class="flex w-full justify-end lg:bg-a8 lg:dark:bg-a1 p-4 lg:p-5 lg:border-b border-a7 dark:border-a4"
>
  <button id="btn-copy" on:click={copyText}>Copy</button>
</div>
<div
  class={name.length > 0 ||
  subtitle.length > 0 ||
  desc.length > 0 ||
  location.length > 0 ||
  currently.length > 0 ||
  recent.length > 0
    ? "h-full overflow-auto"
    : "hidden"}
>
  <div id="markdown-output" class="w-full font-mono text-a5 text-[0.7rem] p-5">
    <p class="md-section">
      {`${name && "# " + name}
${subtitle && "### " + subtitle}

${desc && desc}

`}
    </p>

    <p class="md-section">
      {#each $socialLinks as link (link.key)}
        {#if link.value.length > 0}
          <span>
            {`<a aligh="left" href=${link.url}${link.value} target="_blank" rel="noreferrer noopener"><img src=${link.img} alt=${link.alt} width="22" height="22" /></a>`}
          </span>
        {/if}
      {/each}
    </p>

    <p class="md-section">{`


${desc && "---"}

${location && "⚐ " + location}

${currently && "ϟ Currently " + currently}

${recent && "ϟ Recently " + recent}

`}
    </p>

    <p class="md-section">
      {#each $coreSkills as skill (skill.key)}
        {#if skill.value == true}
          <span>
            {`<a href=${skill.url}${skill.value} target="_blank" rel="noreferrer noopener"><img src="${skill.img}" alt="${skill.alt}" width="25" height="25" /></a>`}
          </span>
        {/if}
      {/each}
    </p>

    <p class="md-section">
      {#each $frontendSkills as skill (skill.key)}
        {#if skill.value == true}
          <span>
            {`<a href=${skill.url}${skill.value} target="_blank" rel="noreferrer noopener"><img src="${skill.img}" alt="${skill.alt}" width="25" height="25" /></a>`}
          </span>
        {/if}
      {/each}
    </p>

    <p class="md-section">
      {#each $backendSkills as skill (skill.key)}
        {#if skill.value == true}
          <span>
            {`<a href=${skill.url}${skill.value} target="_blank" rel="noreferrer noopener"><img src="${skill.img}" alt="${skill.alt}" width="25" height="25" /></a>`}
          </span>
        {/if}
      {/each}
    </p>
  </div>
</div>
