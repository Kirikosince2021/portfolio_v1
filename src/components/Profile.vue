<style lang="scss">
@import '../assets/styles/variables.scss';
@import '../assets/styles/profile.scss';
</style>

<template>
  <div class="profile" id="profile" data-aos="zoom-out">
    <h1>PROFILE</h1>
    <small class="small-desc">{{ $t('制作者のプロフィール') }}</small>
    <div class="under_line"/>
    <p v-if="lang === 'JP'">
      {{ $t('早稲田大学卒業、病気で療養中に2021年から始めたプログラミングで色々制作中。') }}<br>
      {{ $t('基本的にWeb開発中心です。主にVue.jsなどを使用したフロントサイドに加え、firebaseやLaravelを使用したサーバーサイドの使用経験あり。') }}<br>
      {{ $t('時々サイト用のイラスト素材なども自作しています。') }}<br>
      {{ $t('これまでに制作した作品も掲載していますので、よかったら見ていってください。') }}<br>
      {{ $t('英語による対応可。')}}
    </p>

    <h2>SKILLS</h2>
    <small class="small-desc">{{ $t('使用経験のある技術') }}</small>
    <p>{{ $t('言語: 日本語(母国語)/英語(TOEIC900前後)') }}</p>
      <div class="skills_list">
        <ul class="skills_1">
          <li>HTML</li>
        </ul>
        <ul class="skills_2">
          <li>CSS</li>
          <li>SASS</li>
        </ul>
        <ul class="skills_3">
          <li>JavaScript</li>
          <li>Vue</li>
          <li>jQuery</li>
        </ul>
        <ul class="skills_4">
          <li>PHP</li>
          <li>Laravel</li>
        </ul>
        <ul class="skills_5">
          <li>GitHub</li>
          <li>Firebase</li>
          <li>Photoshop</li>
          <li>MySQL</li>
          <li>Figma</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    lang() {
      return this.$store.getters.lang
    }
  }
}
</script>