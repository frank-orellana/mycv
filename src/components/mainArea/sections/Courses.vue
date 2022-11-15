<template>
  <section v-if="store.cv?.courses != null && store.cv?.courses.length > 0">
      <div class="sectionTitle">
        <h1>{{ msg.courses }}</h1>
      </div>

      <div class="sectionContent">
        <article v-for="ed in store.cv?.courses">
          <h2>{{ ed.institution }}</h2>
          <p class="subDetails">{{ ed.degree }}</p>
          <p class="subDetails">{{ ed.duration }}</p>
          <p v-html="ed.description"></p>
          <p v-if="ed.link">
            <i :class="ed.link.icon" aria-hidden="true"></i>&nbsp;
            <a :href="ed.link.url" class="screenOnly">link</a>
            <span class="printOnly">{{ ed.link.url }}</span>
          </p>
        </article>
      </div>
      <div class="clear"></div>
    </section>
</template>

<script setup lang="ts">
import { store } from '../../../store';
import { msg } from '../../../i18n';

</script>