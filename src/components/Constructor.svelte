<script>
  import BasicInfo from "./inputs/BasicInfo.svelte";
  import Socials from "./inputs/Socials.svelte";
  import Skills from "./inputs/Skills.svelte";
  import Preview from "./previews/Preview.svelte";
  import Markdown from "./previews/Markdown.svelte";

  const components = [
    { name: "Preview", component: Preview },
    { name: "Markdown", component: Markdown },
  ];

  let selected = components[0];

  const loadComponent = (obj) => (selected = obj);
</script>

<div class="lg:grid grid-cols-2 w-full my-20 gap-14">
  <form class="flex flex-col mb-20 lg:mb-0">
    <BasicInfo />
    <Socials />
    <Skills />
  </form>
  <div class="preview-container">
    <div class="component-toggle-top">
      {#each components as component}
        <button
          on:click={() => loadComponent(component)}
          class={`w-fit ${
            component.name == "Preview" ? "btn-secondary" : "btn-primary"
          }`}>{component.name}</button
        >
      {/each}
    </div>
    <div class="overflow-hidden w-full h-full rounded-md">
      <svelte:component this={selected.component} />
    </div>
    <div class="component-toggle-bottom">
      {#each components as component}
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
