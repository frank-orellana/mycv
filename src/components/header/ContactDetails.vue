<template>
  <div id="contactDetails" class="quickFade delayFour">
    <ul>
      <li>
        <i class="fas fa-envelope" aria-hidden="true"></i>:
        <a href="mailto:franklin99@gmail.com" target="_blank">franklin99@gmail.com</a>
      </li>
      <li>
        <i class="fab fa-linkedin-in" aria-hidden="true"></i>:
        <a href="https://bit.ly/linkedin-frank" target="_blank" rel="noopener">bit.ly/linkedin-frank</a>
      </li>
      <li>
        <i class="fas fa-globe" aria-hidden="true"></i>:
        <a href="https://www.tritium.cl" target="_blank" rel="noopener">www.tritium.cl</a>
      </li>
      <li>
        <i class="fa fa-whatsapp" aria-hidden="true"></i>:
        <a :href="store.cv?.wsapLnk" target="_blank" rel="noopener">{{ store.cv?.phone }}</a>
      </li>
      <li v-if="i18n.currentLang?.startsWith('en')">
        <i class="fas fa-map-marker-alt" aria-hidden="true"></i>:
        <a href="https://bit.ly/3Bch9ws" target="_blank" rel="noopener">Boston, MA</a>
      </li>
    </ul>

    <div class="langIcons">
      <a @click="store.changeLang('es', $event)" href="#">
        <img
          src="../../assets/flags/24px-Spain_flag_icon.svg.png"
          alt="Spanish/Español"
          title="Español/Spanish"
        />
      </a>
      &nbsp;
      <a @click="store.changeLang('en', $event)" href="#">
        <img
          src="../../assets/flags/24px-United-states_flag_icon_round.svg.png"
          alt="English/Inglés"
          title="English/Inglés"
        />
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <i
        class="fas fa-print"
        onclick="window.print()"
        :title="msg.printMe"
        aria-hidden="true"
      ></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { store } from '../../store';
import { i18n, msg } from '../../i18n';

</script>