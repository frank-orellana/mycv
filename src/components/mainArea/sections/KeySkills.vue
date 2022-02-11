<template>
  <section class="no-break">
    <div class="sectionTitle">
      <h1>{{ store.i18n.keySkills }}</h1>
    </div>

    <div class="sectionContent">
      <article>
        <ul class="keySkills">
          <li v-for="skill in store.cv?.skills">{{ skill }}</li>
        </ul>
      </article>
    </div>
    <div class="clear"></div>
  </section>
</template>

<script setup lang="ts">
import { store } from '../../../store';

</script>