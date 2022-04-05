<style lang="scss">
@import '../assets/styles/variables.scss';
@import '../assets/styles/archives.scss';
</style>

<template>
  <div class="archives" id="archives" data-aos="zoom-out">
    <h1>ARCHIVES</h1>
    <small class="small-desc">{{ $t('個人制作物') }}</small>
    <div class="under_line"/>

    <div class="archives__previews">
      <ul>
        <li v-for="(siteDatum, index) in siteData" :key="siteDatum.siteName" @click="changeFocus(index)">
          <div class="image-board">
            <img :src="siteDatum.imagePath"/>
            <div class="mask">
              <div class="site-name">{{ siteDatum.siteName }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="archives__focus">
      <div class="text">
        <h2 class="site-name">{{ siteData[focused].siteName }}</h2>
        <small class="used">{{ siteData[focused].used }}</small>
        <p class="site-desc">{{ $t(siteData[focused].siteDesc) }}</p>
        <small class="code"><a :href="siteData[focused].gitUrl" target="_blank">
          <span class="icon-github"></span>
          <span>{{ $t(siteData[focused].code) }}</span>
        </a></small>
      </div>
      <div class="site-link">
          <a :href="siteData[focused].url" target="_blank">VISIT THE SITE</a>
        <div class="stick-arrow"></div>
      </div>
      <div class="bg">
        <div class="shadow"/>
        <!--<img :src="siteData[focused].imagePath2">!-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focused: 0,
      openBonus: false,
      siteData: [
        {
          siteName: 'StardewValley Mods 日本語',
          imagePath: require('@/assets/images/previews/' + 'sdv-mods.png'),
          imagePath2: require('@/assets/images/previews/' + 'sdv-mods.png'),
          siteDesc: '多数の利用者を想定して作成した最初のウェブサイトです。ユーザー投稿型の掲示板をベースにしたサイトで、細かい検索が可能。日本語での海外ゲーム拡張プログラム(MOD)の情報共有と紹介を目的に作成しました。入力されたURLから情報をスクレイピングすることでユーザーの入力の手間を減らしたり、URLを検出して自動でリンクが貼られるようにするなど、さまざまな工夫を可能な限り盛り込みました。現在継続開発中&運営準備中。',
          used: 'HTML5/CSS(SASS)/PHP(Laravel8)/Javascript(jQuery)/MySQL v8/Xserver',
          code: '広告収益が発生する可能性のあるサイトのため、コードの一般公開はしておりません。採用などでご覧になりたい場合は別途お問い合わせください。',
          gitUrl: '#',
          url: 'https://sdv-mods-ja.com'
        },
        {
          siteName: 'Textidy',
          imagePath: require('@/assets/images/previews/' + 'textidy.png'),
          imagePath2: require('@/assets/images/previews/' + 'textidy.png'),
          siteDesc: 'Javascript用翻訳ライブラリI18n用アプリケーション。JSON内での括弧表記(")の正規表現への置換が大変だったため、文字列中に含まれる(")を正規表現に自動置換し、JSON形式で出力する簡単なWebアプリケーションとして、Reactの勉強を兼ねて作成しました。',
          used: 'HTML5/CSS(SASS)/Javascript(React v17)/Firebase(Web9)',
          code: 'GitHub上で公開中',
          gitUrl: 'https://github.com/Kirikosince2021/Textidy',
          url: 'https://textidy-acdc1.web.app/'
        },
        {
          siteName: 'My Kakeibo',
          imagePath: require('@/assets/images/previews/' + 'kakeibo.png'),
          imagePath2: require('@/assets/images/previews/' + 'kakeibo.png'),
          siteDesc: '個人用途で作成した支出管理のみの非常にシンプルな家系簿アプリケーション。ユーザーがつけた支出履歴から過去の使用額の計算やグラフ表示を行います。コードの整理やスタイルなど改善の余地多め。(レスポンシブ未対応)',
          used: 'HTML5/CSS(SASS)/Javascript(Vue2(Nuxt2))/Firebase(Web9)',
          code: 'GitHub上で公開中',
          gitUrl: 'https://github.com/Kirikosince2021/My-kakeibo',
          url: 'https://my-kakeibo-ec490.web.app/login'
        }
      ]
    }
  },
  methods: {
    changeFocus(index) {
      this.focused = index
    },
    toggleBonus() {
      if(this.openBonus) this.openBonus = false
      else this.openBonus = true
    }
  }
}
</script>