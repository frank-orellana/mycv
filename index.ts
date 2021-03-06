import * as vue from './js/vue.js';
import _I18N from './js/i18n.js';
import { cv_es, cv_en, cv_fs_es, cv_fs_en } from './js/cv.js';

_I18N.add('es', {
	keySkills: 'Key Skills',
	workExperience: 'Experiencia Laboral',
	education: 'Educación',
	profile: 'Perfil Profesional',
	at: 'en',
	personalProjects: 'Proyectos personales',
	personalLinks: 'Links Personales',
	languages: 'Idiomas',
	interests: 'Intereses'
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
	interests: 'Interests'
});

vue.createApp({
	setup(props: []) {
		const I18N = _I18N;
		let cv = vue.ref({});

		function selectCV(){
			const urlParams = new URLSearchParams(window.location.search);
			const cv_name = urlParams.get('cv') || 'base';
			console.log('name:',cv_name)
			if(I18N.currentLang.indexOf('es') == 0){
				switch(cv_name){
					case 'fs': cv.value = cv_fs_es; break;
					default: cv.value = cv_es;
				}
			}else{
				switch(cv_name){
					case 'fs': cv.value = cv_fs_en; break;
					default: cv.value = cv_en;
				}
			}
		}

		selectCV();

		let i18n = vue.ref(I18N.msg);
		function testMethod() {
			console.log('test method run')
			I18N.selectLang('en');
			i18n.value = I18N.msg;
			cv.value = cv_en;
		}

		function changeLang(lang:string, e?:Event){
			if(e) e.preventDefault();
			I18N.selectLang(lang);
			i18n.value = I18N.msg;
			selectCV();
		}

		return { testMethod, cv, i18n, changeLang, selectCV }
	}
}).mount('#cv')