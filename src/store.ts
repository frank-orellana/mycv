import { reactive } from 'vue'
import { CV } from './data/model/cv'

export const store = reactive({
  cv: null as CV | null,
  currentLang: 'en',
  changeLang: (lang: string, e?: Event) => undefined as void
})
