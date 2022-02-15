import { reactive } from 'vue'
import { en } from "./en";
import { es } from "./es";
import { I18N } from '../utils/i18n';

const i18n = reactive(new I18N(en))
i18n.add('es', es)

export const msg = i18n.msg

i18n.getMessage('profile')

export { i18n }