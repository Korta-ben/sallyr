<template>
  <div>
    <lottie
      :width="1988"
      :height="554"
      :options="lottieOptions" />
  </div>
</template>

<script>
import  lottie from "vue-lottie/src/lottie"
import * as animationData from "~/assets/lottie/greenlines.json"
export default {
  components:{
    lottie
  },
  data(){
    return {
      loading:false,
      anim:null,
      lottieOptions: { animationData: animationData.default },
    }
  },

  method: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
  }
}
</script>

<style scoped>

</style>
