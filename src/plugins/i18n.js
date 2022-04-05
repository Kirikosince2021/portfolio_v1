import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
export const i18n = new VueI18n({
  locale: 'ja',
  messages: {
    // 翻訳用のjson
    ja : require('../lang/ja.json'),
    en : require('../lang/en.json'),
    ch : require('../lang/ch.json')
  }
})