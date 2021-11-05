<template>
  <div>
    <section class="news px-5 pb-25">
      <h2 class="font-bold text-5xl leading-13.75 text-center py-11.5">What’s new at Sally R?</h2>
      <div class="story-wrapper grid grid-cols-1 gap-6 lg:grid-cols-2  xl:max-w-screen-1.5lg m-auto">
        <Stories />
        <Stories />
        <Stories />
        <Stories />
      </div>
    </section>

    <section class=" px-5 grid grid-cols-1 gap-x-4 " >
      <TeamsBox v-for="team in teams" :key="team.index" :member="team"></TeamsBox>
    </section>

    <UniversalCard class="team-wwu md:max-w-md w-full m-auto" v-for="card in cards" :key="card.index" :card="card"></UniversalCard>
  </div>
</template>

<script>

export default {

  data () {
    return {
    }
  },
  computed: {
    news() { return  "news goes here"},
    teams() {  return this.$store.getters.getTheTeam.acf.member.filter(o => o.name == "Fredrik Tunberg") },
    cards() { return  this.$store.getters.getTheTeam.acf.universal_text_box }
  }
}

</script>

<style >
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
