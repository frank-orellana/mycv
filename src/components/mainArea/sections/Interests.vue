<template>
  <section v-if="store.cv?.interests && store.cv?.interests.length > 0">
      <div class="sectionTitle">
        <h1>{{ msg.interests }}</h1>
      </div>

      <div class="sectionContent">
        <article>
          <ul class="keySkills">
            <li v-for="int in store.cv?.interests">{{ int.name }}</li>
          </ul>
        </article>
      </div>
      <div class="clear"></div>
    </section>
</template>

<script setup lang="ts">
import { store } from '../../../store';
import { msg } from '../../../i18n';

</script>