<template>
  <div class="flex flex-col flex-wrap">
    <transition name="readytotalk" appear v-if=showOverlayForm>
      <OverlayForm class="-mt-24" @popupToggle="showOverlayForm = !showOverlayForm"/>
    </transition>
    <UniversalCard v-for="card in cards" :key="card.index" :card="card"></UniversalCard>
<!--    <TheReadyToTalkSlideIn  @popupToggle="showOverlayForm = !showOverlayForm"/>-->
  </div>
</template>

<script>


export default {
  head() {
    if(this.page) {
      const metaArray = [];
      this.page.yoast_meta.map(ele => {
        metaArray.push({
          hid: ele.name ? ele.name : ele.property,
          name: ele.name ? ele.name : ele.property,
          content: ele.content,
        });
      });
      return {
        title: this.page.yoast_title,
        meta: metaArray,
      }
    }
  },

  components:{
    // TheLinesBackground
    // lottie
  },
  data () {
    return {
      showOverlayForm:false,

    }
  },
  computed: {
    cards() { return  this.$store.getters.getTheIntegritetspolicy.acf.universal_text_box },
    page() { return  this.$store.getters.getTheIntegritetspolicy }
  }
}
</script>
<style>
/*home page components home-header.webp ~/assets/images/blue-blur-1.webp*/

.integritetspolicy{
  @apply max-w-screen-1.5xl m-auto bg-no-repeat pb-23.25;

}


.integritetspolicy>div{
  @apply   px-5 pt-23.25 max-w-6xl;

}

.integritetspolicy h2{
  @apply text-center font-bold text-3xl leading-8 pt-28 pb-4 m-auto
  pt-1 lg:text-12.5 lg:leading-13.75 lg:w-full lg:px-4 lg:pb-10;

}






</style>
