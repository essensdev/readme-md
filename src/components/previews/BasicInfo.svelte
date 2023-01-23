<script>
  import { basicInfo } from "../../stores";

  $: name = $basicInfo[0].value;
  $: subtitle = $basicInfo[1].value;
  $: desc = $basicInfo[2].value;
  $: location = $basicInfo[3].value;
  $: email = $basicInfo[4].value;
  $: website = $basicInfo[5].value;
  $: currently = $basicInfo[6].value;
  $: recent = $basicInfo[7].value;
</script>

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
  <div class="my-5">
    {#if location.length > 0}
    <p>⚐ {location}</p>
    {/if}
  </div>

  <div class="my-5">
    {#if website.length > 0}
    <p><a href={website} target="_blank" rel="noreferrer noopener">↗︎ Website</a></p>
    {/if}
    {#if email.length > 0}
    <p><a href={`mailto:${email}`} target="_blank" rel="noreferrer noopener">↗︎ Email</a></p>
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
