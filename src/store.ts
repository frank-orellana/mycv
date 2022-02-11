import { reactive } from 'vue'
import { CV } from './data/model/cv'

export const store = reactive({
  cv: null as CV | null,
  i18n: {} as any,
  currentLang: 'en',
  changeLang: (lang: string, e?: Event) => undefined as void
})
