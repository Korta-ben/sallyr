<template>
    <div>
      <lottie
        :width="1988"
        :height="554"
        :options="lottieOptions" />
    </div>
</template>

<script>
import lottie from "vue-lottie/src/lottie.vue"
import * as animationData  from "~/assets/lottie/lines.json"
export default {
  components:{
    lottie
  },
  data(){
      return {
        loading: false,
        anim: null, // for saving the reference to the animation
        lottieOptions: { animationData: animationData.default },
      }
  },
  method: {
    // handleAnimation (anim) {
    //   this.anim = anim;
    // }
    handleAnimation: function(anim) {
      this.anim = anim;
    },
  }

}
</script>

<style >


</style>
