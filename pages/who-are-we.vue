<template>
  <div>
    <h2 class="text-center font-bold text-3xl leading-8 pb-9.5">
      Who are we?
    </h2>
    <section class=" px-5 grid grid-cols-2 gap-x-4 teams">
      <TeamsBox v-for="team in teams" :key="team.index" :member="team"></TeamsBox>
    </section>
    <UniversalCard class="team-wwu" v-for="card in cards" :key="card.index" :card="card"></UniversalCard>
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
