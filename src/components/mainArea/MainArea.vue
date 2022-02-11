<template>
  <div id="mainArea" class="quickFade delayFive">
    <Title />

    <Experience />

    <KeySkills />

    <Education />

    <Courses />

    <PersonalProjects />

    <PersonalLinks />

    <Languages />

    <Interests />
  </div>
</template>
<script setup lang="ts">
import Title from './sections/Title.vue';
import Experience from './sections/Experience.vue';
import KeySkills from './sections/KeySkills.vue';
import Education from './sections/Education.vue';
import Courses from './sections/Courses.vue';
import PersonalProjects from './sections/PersonalProjects.vue';
import PersonalLinks from './sections/PersonalLinks.vue';
import Languages from './sections/Languages.vue';
import Interests from './sections/Interests.vue';

</script>