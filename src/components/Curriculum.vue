

<template>
<div class="mainDetails">

		<div id="headshot" class="quickFade">
			<img src="../assets/headshot.png" alt="Frank Orellana" v-if="!I18N.currentLang.startsWith('en')" />
		</div>
		
		<div id="name">
			<h1 class="quickFade delayTwo">Franklin Orellana</h1>
			<h2 class="quickFade delayThree" @click="testMethod">Sr. Software Developer</h2>
		</div>
		
		<div id="contactDetails" class="quickFade delayFour">
			<ul>
				<li><i class="fas fa-envelope" aria-hidden="true"></i>: <a href="mailto:frank.orellana@pm.me" target="_blank">frank.orellana@pm.me</a></li>
				<li><i class="fab fa-linkedin-in" aria-hidden="true"></i>: <a href="https://bit.ly/linkedin-frank" target="_blank">bit.ly/linkedin-frank</a></li>
				<li><i class="fas fa-globe" aria-hidden="true"></i>: <a href="https://www.tritium.cl" target="_blank">www.tritium.cl</a></li>
				<li><i class="fa fa-whatsapp" aria-hidden="true"></i>: <a href="https://wa.link/y9fi9c" target="_blank">{{cv.phone}}</a></li>
				<li v-if="!I18N.currentLang.startsWith('en')"><i class="fas fa-phone"></i>: <a href="tel:0056228979708">+56228979708</a></li>
				<li v-else><i class="fas fa-map-marker-alt"></i>: <a href="https://bit.ly/3Bch9ws" target="_blank">Boston, MA</a></li>
			</ul>

			<div class="langIcons">
				<a @click="changeLang('es', $event)" href="#">
					<img src="../assets/flags/24px-Spain_flag_icon.svg.png" alt="Spanish/Español" title="Español/Spanish">
				</a>
				&nbsp;
				<a @click="changeLang('en', $event)" href="#">
					<img src="../assets/flags/24px-United-states_flag_icon_round.svg.png" alt="English/Inglés" title="English/Inglés">
				</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<i class="fas fa-print" onclick="window.print()"></i>
			</div>

		</div>
		<div class="clear"></div>
	</div>
	
	<div id="mainArea" class="quickFade delayFive">
		<section>
			<article>
				<div class="sectionTitle">
					<h1>{{i18n.profile}}</h1>
				</div>
				
				<div class="sectionContent">
					<p v-html="cv.profile" ></p>
				</div>
			</article>
			<div class="clear"></div>
		</section>
		
		
		<section>
			<div class="sectionTitle">
				<h1>{{i18n.workExperience}}</h1>
			</div>
			
			<div class="sectionContent">
				<article v-for="exp in cv.experience">
					<h2>{{exp.position}} {{i18n.at}} {{exp.company}}</h2>
					<p class="subDetails">{{exp.country}}, {{exp.start}} - {{exp.end}}</p>
					<p v-html="exp.description"></p>
				</article>
			</div>
			<div class="clear"></div>
		</section>
		
		
		<section class="no-break">
			<div class="sectionTitle">
				<h1>{{i18n.keySkills}}</h1>
			</div>
			
			<div class="sectionContent">
				<article>
					<ul class="keySkills">
						<li v-for="skill in cv.skills">{{skill}}</li>
					</ul>
			</article>
			</div>
			<div class="clear"></div>
		</section>
		
		<section v-if="cv.education != null && cv.education.length > 0">
			<div class="sectionTitle">
				<h1>{{i18n.education}}</h1>
			</div>
			
			<div class="sectionContent">
				<article v-for="ed in cv.education">
					<h2>{{ed.institution}}</h2>
					<p class="subDetails">{{ed.degree}}</p>
					<p class="subDetails">{{ed.duration}}</p>
					<p>{{ed.description}}</p>
				</article>
			</div>
			<div class="clear"></div>
		</section>

		<section v-if="cv.education != null && cv.education.length > 0">
			<div class="sectionTitle">
				<h1>{{i18n.courses}}</h1>
			</div>
			
			<div class="sectionContent">
				<article v-for="ed in cv.courses">
					<h2>{{ed.institution}}</h2>
					<p class="subDetails">{{ed.degree}}</p>
					<p class="subDetails">{{ed.duration}}</p>
					<p v-html='ed.description'></p>
					<p v-if='ed.link'>
						<i :class="ed.link.icon" aria-hidden="true"></i>&nbsp;
						<a :href="ed.link.url" class="screenOnly">link</a>
						<span class="printOnly">{{ed.link.url}}</span>
					</p>
				</article>
			</div>
			<div class="clear"></div>
		</section>
		
		<section v-if="cv.personalProjects != null && cv.personalProjects.length > 0" style="page-break-inside: avoid;">
			<div class="sectionTitle">
				<h1>{{i18n.personalProjects}}</h1>
			</div>
			
			<div class="sectionContent">
				<article v-for="p in cv.personalProjects">
					<h2>{{p.name}}</h2>
					<p v-html="p.description" style="margin-bottom:0;"></p>
					<p v-if="p.repo || p.web">
						<span v-if="p.repo"><i :class="p.repo.icon" aria-hidden="true"></i>&nbsp;
							<a :href="p.repo.url" target="_blank" >
								<span>{{p.repo.name?p.repo.name:p.repo.url.replace(/https?:\/\//,'')}}</span><span class="printOnly">{{p.repo.name?': '+p.repo.url.replace(/https?:\/\//,''):''}}</span>
							</a>
						</span>&nbsp;&nbsp;&nbsp;&nbsp;
						<span v-if="p.web"><i :class="p.web.icon" aria-hidden="true"></i>&nbsp;
							<a :href="p.web.url" target="_blank" >
							<span>{{p.web.name?p.web.name:p.web.url.replace(/https?:\/\//,'')}}</span><span class="printOnly">{{p.web.name?': '+ p.web.url.replace(/https?:\/\//,'')  :''}}</span>
							</a>
						</span>
					</p>
				</article>
			</div>
			<div class="clear"></div>
		</section>
		
		<section>
			<div class="sectionTitle">
				<h1>{{i18n.personalLinks}}</h1>
			</div>
			
			<div class="sectionContent">
				<ul class="keySkills noBullet personal-links" >
					<li v-for="lnk in cv.links"><i :class="lnk.icon" aria-hidden="true"></i>&nbsp;
						<a :href="lnk.url">
							<span>{{lnk.name?lnk.name:lnk.url.replace(/https?:\/\//,'')}}</span>
							<span class="printOnly">{{lnk.name?': '+lnk.url.replace(/https?:\/\//,''):''}}</span>
						</a>
					</li>
				</ul>
			</div>
			<div class="clear"></div>
		</section>

		<section v-if="cv.languages && cv.languages.length > 0">
			<div class="sectionTitle">
				<h1>{{i18n.languages}}</h1>
			</div>
			
			<div class="sectionContent">
				<article>
					<ul class="keySkills noBullet">
						<li v-for="lang in cv.languages" class="no-wrap">{{lang.name}}&nbsp;({{lang.level}})</li>
					</ul>
			</article>
			</div>
			<div class="clear"></div>
		</section>

		<section v-if="cv.interests && cv.interests.length > 0">
			<div class="sectionTitle">
				<h1>{{i18n.interests}}</h1>
			</div>
			
			<div class="sectionContent">
				<article>
					<ul class="keySkills">
						<li v-for="int in cv.interests">{{int.name}}</li>
					</ul>
			</article>
			</div>
			<div class="clear"></div>
		</section>

	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import _I18N from '../utils/i18n';
import {CV} from '../data/model/cv'
import { cv_es, cv_en, cv_fs_es } from '../data/cv';
import { cv_fs_arg, cv_fs_arg_en } from '../data/cv_arg';

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
let cv = ref<CV>({} as CV);

function selectCV() {
	const urlParams = new URLSearchParams(window.location.search);
	const cv_name = urlParams.get('cv') || 'base';
	console.log('name:', cv_name)

	if (I18N.currentLang.indexOf('es') == 0) {
		switch (cv_name) {
			case 'fs': cv.value = cv_fs_es; break;
			case 'fs_arg': cv.value = cv_fs_arg; break;
			default: cv.value = cv_es;
		}
	} else {
		switch (cv_name) {
			//case 'fs': cv.value = cv_fs_en; break;
			case 'fs_arg': cv.value = cv_fs_arg_en; break;
			default: cv.value = cv_en;
		}
	}
}

selectCV();

let i18n = ref(I18N.msg);
function testMethod() {
	console.log('test method run')
	I18N.selectLang('en');
	i18n.value = I18N.msg;
	cv.value = cv_en;
}

function changeLang(lang: string, e?: Event) {
	if (e) e.preventDefault();
	I18N.selectLang(lang);
	i18n.value = I18N.msg;
	selectCV();
}

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