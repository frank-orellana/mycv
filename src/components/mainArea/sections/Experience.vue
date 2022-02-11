<template>
  <section>
    <div class="sectionTitle">
      <h1>{{ store.i18n.workExperience }}</h1>
    </div>

    <div class="sectionContent">
      <article v-for="exp in store.cv?.experience">
        <h2>{{ exp.position }} {{ store.i18n.at }} {{ exp.company }}</h2>
        <p class="subDetails">{{ exp.country }}, {{ exp.start }} - {{ exp.end }}</p>
        <p v-html="exp.description"></p>
      </article>
    </div>
    <div class="clear"></div>
  </section>
</template>

<script setup lang="ts">
import { store } from '../../../store';

</script>