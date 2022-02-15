<template>
  <section
      v-if="store.cv?.personalProjects != null && store.cv?.personalProjects.length > 0"
      style="page-break-inside: avoid;"
    >
      <div class="sectionTitle">
        <h1>{{ msg.personalProjects }}</h1>
      </div>

      <div class="sectionContent">
        <article v-for="p in store.cv?.personalProjects">
          <h2>{{ p.name }}</h2>
          <p v-html="p.description" style="margin-bottom:0;"></p>
          <p v-if="p.repo || p.web">
            <span v-if="p.repo">
              <i :class="p.repo.icon" aria-hidden="true"></i>&nbsp;
              <a :href="p.repo.url" target="_blank">
                <span>{{ p.repo.name ? p.repo.name : p.repo.url.replace(/https?:\/\//, '') }}</span>
                <span
                  class="printOnly"
                >{{ p.repo.name ? ': ' + p.repo.url.replace(/https?:\/\//, '') : '' }}</span>
              </a>
            </span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span v-if="p.web">
              <i :class="p.web.icon" aria-hidden="true"></i>&nbsp;
              <a :href="p.web.url" target="_blank">
                <span>{{ p.web.name ? p.web.name : p.web.url.replace(/https?:\/\//, '') }}</span>
                <span
                  class="printOnly"
                >{{ p.web.name ? ': ' + p.web.url.replace(/https?:\/\//, '') : '' }}</span>
              </a>
            </span>
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