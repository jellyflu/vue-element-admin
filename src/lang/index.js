import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import elementEsLocale from 'element-ui/lib/locale/lang/es'// element-ui lang
import elementJaLocale from 'element-ui/lib/locale/lang/ja'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'
import esLocale from './es'
import jaLocale from './ja'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  es: {
    ...esLocale,
    ...elementEsLocale
  },
  ja: {
    ...jaLocale,
    ...elementJaLocale
  }
}
export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  //从浏览器获取语言
  const language = (navigator.language || navigator.browserLanguage).toLowerCase();
  //console.log('浏览器language为:'+language);//zh-cn
  const locales = Object.keys(messages);
 // console.log('locales为：'+locales); //en,zh,es,ja
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      //console.log('1111');
      //console.log('1111:'+locale);//cn
      return locale
    }
  }
  return 'en';
}
const i18n = new VueI18n({
  // set locale
  // options: en | zh | es | ja
  locale: getLanguage(),
  //locale: 'zh',
  messages
})

export default i18n
