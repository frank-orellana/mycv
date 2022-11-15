<template>
  <section>
    <div class="sectionTitle">
      <h1>{{ msg.workExperience }}</h1>
    </div>

    <div class="sectionContent">
      <article v-for="exp in store.cv?.experience">
        <h2>
          {{ exp.position }} {{ msg.at }} {{ exp.company }}
          <i v-if="exp.icon" :class="exp.icon" aria-hidden="true"></i>
        </h2>
        <p class="subDetails">{{ exp.country }}, {{ exp.start }} - {{ exp.end }}</p>
        <p v-html="exp.description"></p>
      </article>
    </div>
    <div class="clear"></div>
  </section>
</template>

<script setup lang="ts">
import { store } from '../../../store';
import { msg } from '../../../i18n';

</script>