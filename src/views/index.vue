<template>
  <div class="index-view">
    <Firstview/>
    <About/>
    <Archives/>
    <Works/>
    <Misc/>

    <div class="last-message" data-aos="fade-up">
      <span>2022</span>
      <span>Thanks for your visit !</span>
    </div>
  </div>
</template>

<script>
import Firstview from '../components/FirstView.vue'
import About from '../components/Profile.vue'
import Archives from '../components/Archives.vue'
import Works from '../components/Works.vue'
import Misc from '../components/Misc.vue'

export default {
  components: { Firstview, About, Archives, Works, Misc }
}
</script>

<style>
.index-view {
  overflow: hidden;
}
</style>