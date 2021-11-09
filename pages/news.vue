<template>
  <div>
    <section class="news px-5 pb-25">
      <h2 class="font-bold text-5xl leading-13.75 text-center pt-25 pb-16">What’s new at Sally R?</h2>
      <div class="story-wrapper grid grid-cols-1 gap-6 lg:grid-cols-2  xl:max-w-screen-1.5lg m-auto">
<!--        story start-->
        <div v-for="story in stories.items" :key="story.id"
          class="story flex flex-col bg-srwhite rounded-tl-2xl
 md:flex-row md:flex-row-reverse">
          <div
            :style="{ 'background-image': 'url(' + story.image +')' }"
               class="rounded-tl-2xl h-40 bg-no-repeat bg-cover bg-center	w-full
         md:h-auto   md:rounded-none md:w-45.5 lg:w-1/3">

          </div>
          <div class="p-11.5 lg:w-2/3">
            <h3 class="font-bold  text-xl leading-6 text-srblue pb-9" v-html="story.header">
            </h3>

            <div class="font-bold text-base leading-4 text-srblue">
              <a :href="story.url" >Read more -> </a>
            </div>
          </div>
        </div>
<!--        story ends-->
      </div>
    </section>

    <section class=" px-5 grid grid-cols-1 gap-x-4 " >
      <TeamsBox v-for="team in teams" :key="team.index" :member="team"></TeamsBox>
    </section>

    <UniversalCard class="team-wwu md:max-w-md w-full m-auto" v-for="card in cards" :key="card.index" :card="card"></UniversalCard>
  </div>
</template>

<script>
import axios from "axios";
export default {


  computed: {

    teams() {  return this.$store.getters.getTheTeam.acf.member.filter(o => o.name == "Fredrik Tunberg") },
    cards() { return  this.$store.getters.getTheTeam.acf.universal_text_box }
  },

  async asyncData ({ $axios }) {
    const stories = await
      $axios.$get('https://www.mynewsdesk.com/services/pressroom/list/--HmCIN8bnlquG6Zp82xiw?format=json')
    return { stories }

  },
}

</script>

<style >
.news {
  background-image: url("~/assets/images/hero-bg.webp");
  @apply bg-no-repeat bg-top
}
.team-wwu>div{
  @apply px-5 pt-23.25
}
.team-wwu h3{
  @apply text-center font-bold text-lg leading-6 pb-8.5
}
.team-wwu>div .main-button {
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base leading-4 block m-auto text-srblue mb-36
}
.story{
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.05);
}.story{
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.05);
}
</style>
