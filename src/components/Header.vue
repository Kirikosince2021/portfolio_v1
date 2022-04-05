<style lang="scss">
@import './src/assets/styles/variables.scss';
@import '../assets/styles/header.scss';
</style>

<template>
  <header class="header">
    <nav>
      <ul class="header__nav">
        <a href="#"><li class="button button1"><span>TOP</span></li></a>
        <a href="#profile"><li class="button button2"><span>PROFILE</span></li></a>
        <a href="#archives"><li class="button button3"><span>ARCHIVES</span></li></a>
        <a href="#works"><li class="button button4"><span>WORKS</span></li></a>
        <a href="#misc"><li class="button button5"><span>MISC</span></li></a>
      </ul>
      <button class="language-btn" type="button" @click="changeLang()">
        <span>Language:{{ lang }}</span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    lang() {
      return this.$i18n.locale
    }
  },
  methods: {
    changeLang() {
      console.log('change Lang')
      if(this.$i18n.locale === 'ja') this.$i18n.locale = 'en'
      else if(this.$i18n.locale === 'en') this.$i18n.locale = 'ch'
      else if(this.$i18n.locale === 'ch') this.$i18n.locale = 'ja'
    }
  }
}
</script>