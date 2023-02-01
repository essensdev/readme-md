<script>
  import { socialLinks } from "../../stores";
  import Note from "./Note.svelte";
  import SocialInput from "./SocialInput.svelte";
</script>

<div class="mb-10 md:mb-0">
 <Note />
  {#each $socialLinks as link (link.key)}
    <SocialInput
      alt={link.name}
      img={link.img}
      name={link.name}
      label={link.url}
      id={link.name}
      bind:value={link.value}
      placeholder={link.placeholder ? link.placeholder : "account"}
    />
  {/each}
</div>
