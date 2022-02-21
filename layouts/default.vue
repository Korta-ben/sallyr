<template>
  <div id="app">
    <TopNav />
    <transition  name="readytotalk" appear v-if=showOverlayForm>
      <OverlayForm class="" @popupToggle="showOverlayForm = !showOverlayForm"/>
    </transition>
    <Nuxt class="pt-24 "/>

    <Footer @popupToggle="showOverlayForm = !showOverlayForm"/>

    <CookieControl>
      <template v-slot:modal  v-slot:cookie="{config}">
        <h3>Modal title</h3>
        <p>Modal description</p>
        <span v-for="c in config" :key="c.id" v-text="c.cookies"/>
      </template>

    </CookieControl>
  </div>
</template>

<script>

export default {

  data () {
    return {
      showOverlayForm:false
    }
  },

  mounted(){
    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    // gtag('config', 'UA-75786022-1');
  }
}
</script>

<style >

/*transation*/
.readytotalk-enter-active, .readytotalk-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.readytotalk-enter, .readytotalk-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50%);
  opacity: 0;
}

</style>
