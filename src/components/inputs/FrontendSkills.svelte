<script>
  import { frontendSkills } from "../../stores";
</script>

<div class="my-10">
  <h4 class="skills-section-title">Front-End Skills</h4>
  <div class="skills-grid">
    {#each $frontendSkills as skill (skill.key)}
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
