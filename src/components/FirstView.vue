<style lang="scss">
@import '../assets/styles/variables.scss';
@import '../assets/styles/firstview.scss';
</style>

<template>
  <div class="firstview" data-ous="zoom-out">
    <div class="firstview__image">
      <span data-aos="fade-up">Web Developper Portfolio Site</span>
      <img src="../assets/images/blue.png" id="top_img">
    </div>
    <div class="color_bar">
      <a href="#"><span data-aos="fade-down">◆</span></a>
      <a href="#profile"><span data-aos="fade-up">◆</span></a>
      <a href="#archives"><span data-aos="fade-down">◆</span></a>
      <a href="#works"><span data-aos="fade-up">◆</span></a>
      <a href="#misc"><span data-aos="fade-down">◆</span></a>
    </div>
  </div>
</template>

<script>
export default {
  /*
  methods: {
    changeTopImage(color) {
      const imgElem = document.getElementById('top_img')
      const url = require(`../assets/images/${ color }.png`)
      imgElem.setAttribute('src', url)
    }
  }
  */
}
</script>