

<template>
	<Header />

	<MainArea />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Header from "./header/Header.vue"
import _I18N from '../utils/i18n';
import { cv_es, cv_en, cv_fs_es } from '../data/cv';
import { cv_fs_arg, cv_fs_arg_en } from '../data/cv_arg';
import { store } from '../store'
import MainArea from "./mainArea/MainArea.vue";

_I18N.add('es', {
	keySkills: 'Key Skills',
	workExperience: 'Experiencia Laboral',
	education: 'Educación',
	profile: 'Perfil Profesional',
	at: 'en',
	personalProjects: 'Proyectos personales',
	personalLinks: 'Links Personales',
	languages: 'Idiomas',
	interests: 'Intereses',
	courses: 'Cursos/Otra educación'
});
_I18N.add('en', {
	keySkills: 'Key Skills',
	workExperience: 'Work Experience',
	education: 'Education',
	profile: 'Professional Profile',
	at: 'at',
	personalProjects: 'Personal Projects',
	personalLinks: 'Personal Links',
	languages: 'Languages',
	interests: 'Interests',
	courses: 'Courses/Other Education'
});

const I18N = _I18N;



function selectCV() {
	if(typeof window === 'undefined'){
		store.cv = cv_en
		return
	}
	const urlParams = new URLSearchParams(window.location.search);
	const cv_name = urlParams.get('cv') || 'base';
	console.log('name:', cv_name)

	if (I18N.currentLang.indexOf('es') == 0) {
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

store.i18n = I18N.msg

function changeLang(lang: string, e?: Event) {
	if (e) e.preventDefault()
	I18N.selectLang(lang)
	store.currentLang = lang
	store.i18n = I18N.msg
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

		//return { testMethod, cv, i18n, I18N, changeLang, selectCV }
</script>

<style>
</style>