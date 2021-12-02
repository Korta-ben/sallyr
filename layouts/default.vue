<template>
  <div id="app">
    <TopNav />
    <transition  name="readytotalk" appear v-if=showOverlayForm>
      <OverlayForm class="" @popupToggle="showOverlayForm = !showOverlayForm"/>
    </transition>
    <Nuxt class="pt-24 "/>

    <Footer @popupToggle="showOverlayForm = !showOverlayForm"/>
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
    window.markerConfig = {
      destination: '6184fc4540d999035e51316f',
      source: 'snippet'
    };


    !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);

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
