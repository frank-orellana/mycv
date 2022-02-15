<template>
  <section>
    <article>
      <div class="sectionTitle">
        <h1>{{ msg.profile }}</h1>
      </div>

      <div class="sectionContent">
        <p v-html="store.cv?.profile"></p>
      </div>
    </article>
    <div class="clear"></div>
  </section>
</template>
<script setup lang="ts">
import { store } from '../../../store';
import { i18n } from '../../../i18n';
const msg = i18n.msg


</script>