/*
Copyright 2019 Franklin Orellana
This file is part of DiffViewer.
DiffViewer is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
DiffViewer is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with DiffViewer.  If not, see <https://www.gnu.org/licenses/>. */
export default class i18n {
	static readonly defaultLangName = 'en';
	static langs: any = {};

	static msg: any = {};
	static currentLang: string;

	static get defaultLang (){
		return this.langs[this.defaultLangName]
	}

	static init(){
		this.selectLang();
	}

	static selectLang(plang?:string) {
		var lang: string = plang || window.navigator.languages[0];
		console.log(lang);
		if (i18n.langs[lang])
			i18n.msg = i18n.langs[lang];
		else if (i18n.langs[lang.substr(0, 2)])
			i18n.msg = i18n.langs[lang.substr(0, 2)];
		else
			i18n.msg = i18n.langs['en'];

		this.currentLang = lang;
	}

	static add(lang:string,obj:Object) {
		const langObj: string = i18n.langs[lang];
		if(!langObj){
			i18n.langs[lang] = {};
		}
		for(let x in obj)
			//@ts-ignore
			langObj[x] = obj[x];
	}

	static getMessage(messageId:string):string|undefined{
		if(!i18n.msg) return;
		let res: string = i18n.msg[messageId];

		if(!res) {
			let errMsg: string = `I18N: message "${messageId}" not found in language ${i18n.currentLang}`;
			if(i18n.currentLang != i18n.defaultLangName){
				res = i18n.defaultLang[messageId];
				errMsg += res?`, using default lang`:` nor in default lang`;
				console.warn(errMsg);
			}
		}
		
		return res;
	}
}

// Adding default english translations
i18n.langs[i18n.defaultLangName] = {}
i18n.add(i18n.defaultLangName, {
	close: 'Close',
	open: 'Open',
	goBack: 'Go back',
	name: 'Name',
	process: 'Process',
	add: 'Add',
	edit: 'Editar',
	modify: 'Modificar',
	new: 'New',
	update: 'Update',
	deleted: 'Deleted',
	save: 'Save',
	about: 'About',
	viewInGithub: 'View in Github',
	inventory: 'Inventory',
	products: 'Products',
	settings: 'Settings',
	reports: 'Reports',
	total: 'Total',
});

i18n.langs.es = {
	close: 'Cerrar',
	open: 'Abrir',
	goBack: 'Atrás',
	name: 'Nombre',
	process: 'Procesar',
	add: 'Agregar',
	edit: 'Editar',
	modify: 'Modificar',
	new: 'Nuevo',
	update: 'Actualizar',
	deleted: 'Eliminado',
	save: 'Guardar',
	about: 'Acerca de',
	viewInGithub: 'Ver en Github',
	inventory: 'Inventario',
	products: 'Productos',
	settings: 'Configuración',
	reports: 'Reportes',
}

i18n.init();