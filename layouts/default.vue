<template>
  <div id="app" >
    <TopNav />
    <transition  name="readytotalk" appear v-if=showOverlayForm>
      <OverlayForm class="" @popupToggle="showOverlayForm = !showOverlayForm"/>
    </transition>
    <Nuxt class="pt-24 "/>

    <Footer @popupToggle="showOverlayForm = !showOverlayForm"/>

<!--    <CookieControl>-->
<!--      <template v-slot:bar>-->
<!--        <h3>Cookie</h3>-->
<!--        <p>We use our own cookies and third-party cookies so that we can show you this website-->
<!--          and better understand how you use it, with a view to improving the services we offer.-->
<!--          If you continue browsing, we consider that you have accepted the cookies. </p>-->
<!--        <NuxtLink class="text-srwhite underline"-->
<!--          to="/integritetspolicy">-->
<!--          Read here for more-->
<!--        </NuxtLink>-->
<!--      </template>-->

<!--      <template  v-slot:cookie="{config}">-->

<!--        <span v-for="c in config" :key="c.id" v-text="c.cookies"/>-->
<!--      </template>-->
<!--    </CookieControl>-->
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
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-75786022-1');
  },

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
