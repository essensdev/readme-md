<script>
  import { basicInfo } from "../../stores";

  $: name = $basicInfo[0].value;
  $: subtitle = $basicInfo[1].value;
  $: desc = $basicInfo[2].value;
  $: location = $basicInfo[3].value;
  $: currently = $basicInfo[4].value;
  $: recent = $basicInfo[5].value;
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
    {#if currently.length > 0}
        <p>ϟ Currently {currently}</p>
    {/if}
    {#if recent.length > 0}
        <p>ϟ Recently {recent}</p>
    {/if}
  </div>
</div>
