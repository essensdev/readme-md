<script>
  import BasicInfo from "./inputs/BasicInfo.svelte";
  import Socials from "./inputs/Socials.svelte";
  import Skills from "./inputs/Skills.svelte";

  const components = [
    { id: 1, name: "Basic Info", component: BasicInfo },
    { id: 2, name: "Skills", component: Skills },
    { id: 3, name: "Contacts", component: Socials },
  ];

  let active = components[0].id;
  let component = components[0];

  const loadComponent = (obj) => {
    component = obj;
    active = obj.id;
  };

</script>

<div class="inputs-container">
  <form class="flex flex-col mb-20 lg:mb-0">
    <div class="flex justify-between items-center">
      {#each components as component}
        <button
          class={active === component.id ? "w-full border-b rounded-none border-a8 text-white" : "w-full border-b rounded-none text-a4 border-a4"}
          on:click={(e) => {
            e.preventDefault();
            loadComponent(component);
          }}>{component.name}</button
        >
      {/each}
    </div>
  </form>
  <div class="w-full h-full py-5">
    <svelte:component this={component.component} />
  </div>
</div>
