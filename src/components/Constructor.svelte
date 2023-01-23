<script>
  import autoAnimate from "@formkit/auto-animate";
  import Input from "./Input.svelte";
  import SocialInput from "./SocialInput.svelte";
  import {
    basicInfo,
    socialLinks,
    frontendSkills,
    backendSkills,
    coreSkills,
  } from "../stores";

  $: linksVisible = false;
  $: skillsVisible = false;
</script>

<div class="lg:grid grod-cols-2 w-full my-20 md:my-36 gap-20">
  <!-- BASIC INFORMATION -->
  <form class="flex flex-col mb-20 lg:mb-0">
    <div class="mb-10">
      <h3 class="mb-5">Basic Information</h3>
      {#each $basicInfo as el (el.key)}
        {#if el.name == "desc"}
          <div
            class="sm:grid sm:grid-cols-2 md:flex md:justify-start my-3 w-full"
          />
          <label class="w-1/5" for="desc">Description</label>
          <textarea
            spellcheck="true"
            name="desc"
            id="desc"
            rows="5"
            class="w-full border"
            bind:value={el.value}
            placeholder={el.placeholder}
          />
        {:else}
          <Input
            name={el.name}
            label={el.label}
            id={el.name}
            bind:value={el.value}
            placeholder={el.placeholder}
          />
        {/if}
      {/each}
    </div>

    <!-- SOCIAL MEDIA LINKS -->
    <div
      use:autoAnimate
      class="mb-10 md:mb-0 border-t border-a4 rounded-none py-2 peer-last:border-y"
    >
      <button
        on:click={(event) => {
          event.preventDefault();
          linksVisible = !linksVisible;
        }}
        class="w-full flex justify-between"
        ><h3 class="text-a1 dark:text-a8">
          <span class="mr-3">{linksVisible ? "↓" : "→"}</span>Social Media Links
        </h3></button
      >
      {#if linksVisible}
        <div class="my-5">
          <p class="text-a4 dark:text-a3 text-[0.8rem]">
            *If you would like me to add other social platforms, please reach
            out on <a
              class="link"
              href="/"
              target="_blank"
              rel="noreferrer noopener">Twitter</a
            >
          </p>
          {#each $socialLinks as link (link.key)}
            <SocialInput
              alt={link.name}
              img={link.img}
              name={link.name}
              label={link.url}
              id={link.name}
              bind:value={link.value}
              placeholder="account"
            />
          {/each}
        </div>
      {/if}
    </div>

    <!-- SKILLS -->
    <div
      use:autoAnimate
      class="mb-10 md:mb-0 border-t border-a4 rounded-none py-2 peer-last:border-y"
    >
      <button
        on:click={(event) => {
          event.preventDefault();
          skillsVisible = !skillsVisible;
        }}
        class="w-full flex justify-between"
        ><h3 class="text-a1 dark:text-a8">
          <span class="mr-3">{skillsVisible ? "↓" : "→"}</span>Skills
        </h3></button
      >
      {#if skillsVisible}
        <div class="my-5">
          <p class="text-a4 dark:text-a3 text-[0.8rem]">
            *If you would like me to add other social platforms, please reach
            out on <a
              class="link"
              href="/"
              target="_blank"
              rel="noreferrer noopener">Twitter</a
            >
          </p>
          <div class="my-10">
            <h4 class="skills-section-title">Core Skills</h4>
            <div class="skills-grid">
              {#each $coreSkills as skill (skill.key)}
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


          <div class="my-10">
            <h4 class="skills-section-title">Back-End Skills</h4>
            <div class="skills-grid">
              {#each $backendSkills as skill (skill.key)}
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
        </div>
      {/if}
    </div>
  </form>
</div>
