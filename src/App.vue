<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
  methods: {
    createTitle: function(routeInstance) {
      if(routeInstance.meta.title) {
        let setTitle = routeInstance.meta.title;
        document.title = setTitle;
      }
    }
  },
  mounted: function() {
    let routeInstance = this.$route;
    this.createTitle(routeInstance);
  }
}
</script>

<style lang="scss">
@import '../src/assets/styles/reset.css';
@import '../src/assets/styles/variables.scss';
@import '../src/assets/styles/global.scss';
</style>
