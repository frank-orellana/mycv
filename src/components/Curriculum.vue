

<template>
	<Header />

	<MainArea />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { cv_es, cv_en, cv_fs_es } from '../data/cv';
import { cv_fs_arg, cv_fs_arg_en } from '../data/cv_arg';
import { store } from '../store'
import { i18n } from "../i18n";
import Header from "./header/Header.vue"
import MainArea from "./mainArea/MainArea.vue";

function selectCV() {
	if (typeof window === 'undefined') {
		store.cv = cv_en
		return
	}
	const urlParams = new URLSearchParams(window.location.search);
	const cv_name = urlParams.get('cv') || 'base';
	console.log('name:', cv_name)

	if (i18n.currentLang.indexOf('es') == 0) {
		switch (cv_name) {
			case 'fs': store.cv = cv_fs_es; break;
			case 'fs_arg': store.cv = cv_fs_arg; break;
			default: store.cv = cv_es;
		}
	} else {
		switch (cv_name) {
			//case 'fs': cv.value = cv_fs_en; break;
			case 'fs_arg': store.cv = cv_fs_arg_en; break;
			default: store.cv = cv_en;
		}
	}

}

selectCV();

function changeLang(lang: string, e?: Event) {
	if (e) e.preventDefault()
	i18n.selectLang(lang)
	store.currentLang = lang
	selectCV()
}

store.changeLang = changeLang

onMounted(() => {
	const urlParams = new URLSearchParams(window.location.search);
	const lang = urlParams.get('lang');
	console.log('lang:', lang);

	if (lang != null)
		changeLang(lang);
})
</script>

<style>
</style>