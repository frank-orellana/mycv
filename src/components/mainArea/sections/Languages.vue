<template>
  <section v-if="store.cv?.languages && store.cv?.languages.length > 0">
    <div class="sectionTitle">
      <h1>{{ store.i18n.languages }}</h1>
    </div>

    <div class="sectionContent">
      <article>
        <ul class="keySkills noBullet">
          <li
            v-for="lang in store.cv?.languages"
            class="no-wrap"
          >{{ lang.name }}&nbsp;({{ lang.level }})</li>
        </ul>
      </article>
    </div>
    <div class="clear"></div>
  </section>
</template>

<script setup lang="ts">
import { store } from '../../../store';

</script>