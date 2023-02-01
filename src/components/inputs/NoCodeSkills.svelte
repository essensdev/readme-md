<script>
    import { noCodeSkills } from "../../stores";
</script>
<div class="my-5">
    <h4 class="skills-section-title">No-Code/Low-Code Skills</h4>
    <div class="skills-grid">
      {#each $noCodeSkills as skill (skill.key)}
        <button
          on:click={(event) => {
            event.preventDefault();
            skill.value = !skill.value;
          }}
          class={skill.value == true ? "skill-active" : "skill-normal"}
          >{skill.alt}</button
        >
      {/each}
    </div>
  </div>