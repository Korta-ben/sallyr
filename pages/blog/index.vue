<template>
  <div>
    <transition name="readytotalk" appear v-if=showOverlayForm>
      <OverlayForm class="-mt-24" @popupToggle="showOverlayForm = !showOverlayForm"/>
    </transition>
    <TheLinesBackground class="linesbg"/>
    <section class="news px-5 pb-25">
      <h2 class="font-bold text-5xl leading-13.75 text-center pt-25 pb-16">What’s new at
        <span class="whitespace-nowrap">Sally R?</span></h2>
      <div class="story-wrapper grid grid-cols-1 gap-6 lg:grid-cols-2  xl:max-w-screen-1.5lg m-auto">
        <!--        story start-->
        <div v-for="blog in blogs" :key="blog.id"
             class="story flex flex-col bg-srwhite rounded-tl-2xl
 md:flex-row md:flex-row-reverse justify-between">

          <div
            :style="{ 'background-image': 'url(' + blog.featuredImage +')' }"
            class="rounded-tl-2xl h-40 bg-no-repeat bg-cover bg-center	w-full
         md:h-72   md:rounded-none md:w-45.5 lg:w-1/3">

          </div>
          <div class="p-11.5 lg:w-2/3 flex flex-col justify-around">
            <h3 class="font-bold  text-xl leading-6 text-srblue pb-9" v-html="blog.name">
            </h3>

            <div class="read-mores font-bold text-base leading-4 text-srblue">
              <NuxtLink :to="{ name: 'blog-slug', params: {slug:blog.name}}" class="sub-button">
                Read More
              </NuxtLink>
            </div>
          </div>
        </div>
        <!--        story ends-->
      </div>
    </section>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data () {
    return {
      showOverlayForm:false
    }
  },

  computed: {

    // teams() {  return this.$store.getters.getTheTeam.acf.member.filter(o => o.name == "Fredrik Tunberg") },
    // cards() { return  this.$store.getters.getTheTeam.acf.universal_text_box }
    blogs() { return this.$store.getters.getTheBlogg.results }
  },

  // async asyncData ({ $axios }) {
  //   const stories = await
  //     $axios.$get(`https://api.hubapi.com/cms/v3/blogs/posts?hapikey=${process.env.HAPI}`)
  //   return { stories }
  //
  // },
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

.linesbg{
  @apply absolute left-0 right-0 m-auto overflow-hidden;
  z-index: -1;
}
.news {
  background-image: url("~/assets/images/blue-blur-2.webp");
  @apply bg-no-repeat ;
  background-position: left 0%;
}
.team-wwu>div{
  @apply px-5 pt-4
}
.team-wwu h3{
  @apply text-center font-bold text-lg leading-6 pb-8.5
}
.team-wwu>div .main-button {
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base
  leading-4 block m-auto text-srblue mb-36 cursor-pointer;
  width: fit-content;
}
.story{
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.05);
}
.read-mores a{
  @apply flex
}
.read-mores a:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
}
</style>
