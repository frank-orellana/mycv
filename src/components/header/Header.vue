<template>
  <div class="mainDetails">
    <div id="headshot" class="quickFade">
      <img
        src="../../assets/headshot.png"
        alt="Frank Orellana"
        v-if="!store.currentLang.startsWith('en')"
      />
    </div>

    <div id="name">
      <h1 class="quickFade delayTwo">Franklin Orellana <i class="fa-brands fa-meta"></i></h1>
      <h2 class="quickFade delayThree">Sr. Software Developer</h2>
      <h2 class="quickFade delayThree">Status: Currently <span style="color: white; font-weight: bold;">NOT</span> open to new opportunities</h2>
    </div>

    <ContactDetails />
    <div class="clear"></div>
  </div>
</template>

<script setup lang="ts">
import ContactDetails from './ContactDetails.vue';
import { store } from '../../store';


</script>