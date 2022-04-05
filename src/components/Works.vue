<style lang="scss">
@import '../assets/styles/variables.scss';
@import '../assets/styles/works.scss';
</style>

<template>
  <div class="works" id="works" data-aos="zoom-out">
    <h1>WORKS</h1>
    <small class="small-desc">{{ $t('今までに関わったお仕事など') }}</small>
    <div class="under_line"></div>

    <div class="works__list">
      <ul>
        <li>
          <span class="name">サステナブルラボ TERRAST開発</span>
          <p class="desc">- {{ $t('Vue2 CLIを使用したフロントサイドのチーム開発業務担当') }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>