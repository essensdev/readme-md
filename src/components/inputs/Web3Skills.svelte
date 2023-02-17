<script>
  import { web3Skills } from "../../stores";
  import SkillsSection from "./SkillsSection.svelte";
</script>

<SkillsSection title="Web3 Skills" subtitle="Languages, frameworks and libraries for the blockchain and web3 developers">
  {#each $web3Skills as skill (skill.key)}
    <button
      on:click={() => {
        skill.value = !skill.value;
      }}
      class={skill.value == true
        ? "px-2 py-1.5 bg-a4 text-white dark:text-black"
        : "px-2 py-1.5 bg-a8 text-a1 dark:bg-a1 dark:text-a6 hover:bg-a7 dark:hover:bg-a2"}
      >{skill.alt}</button
    >
  {/each}
</SkillsSection>
