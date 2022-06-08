<template>
  <div class="pb-25">
    <transition name="readytotalk" appear v-if=showOverlayForm>
      <OverlayForm @popupToggle="showOverlayForm = !showOverlayForm"/>
    </transition>
    <TheLinesBackground class="linesbg "/>
<!--    <div class="blog_header grid grid-rows-3 grid-cols-2">-->
<!--      <div >-->
<!--        <h1>-->
<!--          Less <span class="orange">energy</span>, better air-->
<!--        </h1>-->
<!--      </div>-->
<!--      <div class="row-span-3">image </div>-->
<!--      <div class="description">Smart ventilation that makes buildings care for people and your economy.</div>-->
<!--      <div>Improve your HVAC</div>-->

<!--    </div>-->

    <section class="pt-14 pb-23.25 px-5
          lg:pt-23.25 lg:pb-30.25 max-w-5xl m-auto">

      <h1 v-html="blog.htmlTitle"
          class="font-bold text-5xl leading-13.75 text-center py-11.5 "></h1>

      <div class="lg:pt-36 pb-5">
        <img :src="blog.featuredImage" class="w-100 m-auto">
      </div>
      <div class="text-lg font-normal " v-html="blog.postBody">

      </div>
    </section>
  </div>
</template>


<script>


export default {
  data () {
    return {
      showOverlayForm:false
    }
  },

  computed: {

    blog({params}){
      return  this.$store.getters.getTheBlogg.results.find(o => o.name === this.$route.params.slug)

    }
  },
}

</script>

<style>

.blog_header{
  @apply bg-no-repeat pt-11 md:pt-25 max-w-screen-1.5xl w-full   content-center m-auto;
  background-image:url("~/assets/images/blue-blur-2.webp"),
  url("~/assets/images/home-header.webp");
  background-position:right 90% , left 0% ;

}
.blog_header h1{
  @apply text-8xl leading-25 pb-11.5;
}
.blog_header .description{
  @apply text-4xl font-bold
}
.blog_header span.orange{
  @apply text-srorange;
}
.linesbg{
  @apply absolute left-0 right-0 m-auto overflow-hidden;
  z-index: -1;
}
.case{
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.05);
}

.cases {
  background-image: url("~/assets/images/blue-blur-2.webp");
  @apply bg-no-repeat ;
  background-position: left 0%}
</style>
