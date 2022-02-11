<template>
  <section v-if="store.cv?.education != null && store.cv?.education.length > 0">
      <div class="sectionTitle">
        <h1>{{ store.i18n.education }}</h1>
      </div>

      <div class="sectionContent">
        <article v-for="ed in store.cv?.education">
          <h2>{{ ed.institution }}</h2>
          <p class="subDetails">{{ ed.degree }}</p>
          <p class="subDetails">{{ ed.duration }}</p>
          <p>{{ ed.description }}</p>
        </article>
      </div>
      <div class="clear"></div>
    </section>
</template>

<script setup lang="ts">
import { store } from '../../../store';

</script>