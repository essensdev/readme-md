<script>
  import BasicInfo from "./inputs/BasicInfo.svelte";
  import Socials from "./inputs/Socials.svelte";
  import Skills from "./inputs/Skills.svelte";
  import Preview from "./previews/Preview.svelte";
  import Markdown from "./previews/Markdown.svelte";
  import InputsSection from "./InputsSection.svelte";


  const componentsPreview = [
    { name: "Preview", component: Preview },
    { name: "Markdown", component: Markdown },
  ];


  let preview = componentsPreview[0];
  const loadComponent = (obj) => (preview = obj);

</script>

<div class="lg:grid grid-cols-2 w-full my-20 gap-14">
  <InputsSection />

  <div class="preview-container">
    <div class="component-toggle-top">
      {#each componentsPreview as component}
        <button
          on:click={() => loadComponent(component)}
          class={`w-fit ${
            component.name == "Preview" ? "btn-secondary" : "btn-primary"
          }`}>{component.name}</button
        >
      {/each}
    </div>
    <div class="overflow-y-auto w-full h-full rounded-md">
      <svelte:component this={selected.component} />
    </div>
    <div class="component-toggle-bottom">
      {#each componentsPreview as component}
        <button
          on:click={() => loadComponent(component)}
          class={`w-fit ${
            component.name == "Preview" ? "btn-secondary" : "btn-primary"
          }`}>{component.name}</button
        >
      {/each}
    </div>
  </div>
</div>
