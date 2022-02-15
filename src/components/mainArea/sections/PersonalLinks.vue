<template>
  <section>
      <div class="sectionTitle">
        <h1>{{ msg.personalLinks }}</h1>
      </div>

      <div class="sectionContent">
        <ul class="keySkills noBullet personal-links">
          <li v-for="lnk in store.cv?.links">
            <i :class="lnk.icon" aria-hidden="true"></i>&nbsp;
            <a :href="lnk.url">
              <span>{{ lnk.name ? lnk.name : lnk.url.replace(/https?:\/\//, '') }}</span>
              <span
                class="printOnly"
              >{{ lnk.name ? ': ' + lnk.url.replace(/https?:\/\//, '') : '' }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="clear"></div>
    </section>
</template>

<script setup lang="ts">
import { store } from '../../../store';
import { msg } from '../../../i18n';

</script>