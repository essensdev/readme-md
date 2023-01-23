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
  $: email = $basicInfo[4].value;
  $: website = $basicInfo[5].value;
  $: currently = $basicInfo[6].value;
  $: recent = $basicInfo[7].value;

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
  email.length > 0 ||
  website.length > 0 ||
  currently.length > 0 ||
  recent.length > 0
    ? "h-full overflow-auto p-5"
    : "hidden"}
>
  <div id="markdown-output" class="w-full font-mono text-a5 text-[0.7rem]">
    <p class="md-section">
{`${name.length > 0 && "# " + name}

${subtitle.length > 0 && "#### " + subtitle}

${desc.length > 0 && "⤷ " + desc}

${desc.length > 0 && "---"}
        
`}
    </p>

    <p class="md-section">
{`${location.length > 0 && "⚐ " + location}

${website.length > 0 && "[Website ↗︎](" + website + ")"}

${email.length > 0 && "[Email ↗︎](mailto:" + email + ")"}

`}
    </p>

    <p class="md-section">
{`${currently.length > 0 && "ϟ Currently " + currently}

${recent.length > 0 && "ϟ Recently" + recent}

        `}
    </p>
    <p class="md-output">
      <span>{`<p aligh="left">`}</span>
        {#each $socialLinks as link (link.key) }
            <span>
                {`<a href=${link.url}${link.value} target="_blank" rel="noreferrer noopener"><img src=${link.img} alt=${link.alt} width="25" height="25" /></a>`} 
            </span>
        {/each}
      <span>{`</p>`}</span>
    </p>

    <p class="md-output">
        <span>{`<p aligh="left">`}</span>
          {#each $coreSkills as skill (skill.key) }
              <span>
                  {`<a href=${skill.url}${skill.value} target="_blank" rel="noreferrer noopener"><img src=${skill.img} alt=${skill.alt} width="25" height="25" /></a>`} 
              </span>
          {/each}
        <span>{`</p>`}</span>
      </p>


      <p class="md-output">
        <span>{`<p aligh="left">`}</span>
          {#each $frontendSkills as skill (skill.key) }
              <span>
                  {`<a href=${skill.url}${skill.value} target="_blank" rel="noreferrer noopener"><img src=${skill.img} alt=${skill.alt} width="25" height="25" /></a>`} 
              </span>
          {/each}
        <span>{`</p>`}</span>
      </p>

      <p class="md-output">
        <span>{`<p aligh="left">`}</span>
          {#each $backendSkills as skill (skill.key) }
              <span>
                  {`<a href=${skill.url}${skill.value} target="_blank" rel="noreferrer noopener"><img src=${skill.img} alt=${skill.alt} width="25" height="25" /></a>`} 
              </span>
          {/each}
        <span>{`</p>`}</span>
      </p>
  </div>
</div>
