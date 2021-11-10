<template>
  <div>

    <section class=" px-5 teams xl:max-w-screen-1.5lg m-auto">
      <h2 class="text-center font-bold text-3xl leading-8 pb-9.5
    md:pt-25 md:pb-16 md:text-12.5 md:leading-13.75">
        Who are we?
      </h2>
      <div class="grid grid-cols-2 gap-x-4
        sm:grid-cols-3 lg:grid-cols-4">
        <TeamsBox v-for="team in teams" :key="team.index" :member="team"></TeamsBox>
      </div>

    </section>
    <UniversalCard class="team-wwu md:max-w-md w-full m-auto" v-for="card in cards" :key="card.index"
                   :card="card"></UniversalCard>
  </div>
</template>

<script>

export default {

  data () {
    return {
    }
  },
  computed: {
    teams() {  return this.$store.getters.getTheTeam.acf.member },
    cards() { return  this.$store.getters.getTheTeam.acf.universal_text_box }
  }
}
</script>

<style >
.teams {
  background-image: url("~/assets/images/hero-bg.webp");
  @apply bg-no-repeat bg-top bg-fixed
}
.teams>div:last-child{
@apply lg:col-span-4;
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


</style>
