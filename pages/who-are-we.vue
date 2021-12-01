<template>
  <div>
    <transition name="readytotalk" appear v-if=showOverlayForm>
      <OverlayForm @popupToggle="showOverlayForm = !showOverlayForm"/>
    </transition>
    <TheLinesBackground />
    <section class=" px-5 teams xl:max-w-screen-1.5lg m-auto">
      <h2 class="text-center font-bold text-3xl leading-8 pb-9.5
    md:pt-25 md:pb-16 md:text-12.5 md:leading-13.75">
        Who are we?
      </h2>
      <div class="grid grid-cols-2 gap-x-4 gap-y-10
        sm:grid-cols-3 lg:grid-cols-4 max-w-5xl m-auto ">
        <TeamsBox v-for="team in teams" :key="team.index" :member="team"></TeamsBox>
      </div>

    </section>
<!--    <UniversalCard class="team-wwu md:max-w-md w-full m-auto" v-for="card in cards" :key="card.index"-->
<!--                   :card="card"></UniversalCard>-->
    <section class="team-wwu md:max-w-md w-full m-auto  " >
      <div >
        <h3  v-html="cards[0].sub_heading"></h3>
        <div class="main-button-wrapper" >
          <a class="main-button nuxt-link-exact-active current-page"
          @click="showOverlayForm = !showOverlayForm" v-html="cards[0].button_text">
        </a>
        </div>
        <!----> <!---->
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
    teams() {  return this.$store.getters.getTheTeam.acf.member },
    cards() { return  this.$store.getters.getTheTeam.acf.universal_text_box }
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


.teams>div div:last-child{
  @apply lg:col-span-4;
}
.team-wwu>div{
  @apply px-5 pt-23.25
}
.teams h3{
  @apply text-center font-bold text-xl leading-6 md:text-xl
}
.team-wwu>div .main-button {
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base leading-4 block m-auto text-srblue mb-36
  hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out mt-11;
  width: fit-content;
}

.team-wwu>div h3{
  @apply text-center
}


</style>
