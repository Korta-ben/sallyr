<template>
  <div>
    <transition name="readytotalk" appear v-if=showOverlayForm>
      <OverlayForm @popupToggle="showOverlayForm = !showOverlayForm"/>
    </transition>
    <UniversalCard v-for="card in cards" :key="card.index" :card="card"></UniversalCard>
    <TheCCList />
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
    cards() { return  this.$store.getters.getTheIndoorFarming.acf.universal_text_box },

  },
  mounted() {
    // var contactButton = this.$refs.indoor_maximize
    var contactMaxi = document.getElementById("indoor_maximize")
      contactMaxi.addEventListener('click', this.showContact);
    //
    var keepMeUpdated = document.getElementById("indoor_farming_hero")
    keepMeUpdated.addEventListener('click', this.showContact);
    //

  },

  methods:{
    showContact(stuff){

      this.showOverlayForm = true

    }
  }
}
</script>

<style>


/*indoor farming page*/
/*
1. indoor_farming_hero
*/
.indoor_farming_hero{
  background-image:url("~/assets/images/indoor-hero-bg.webp") ;
  @apply max-w-screen-1.5xl m-auto bg-no-repeat;
}
.indoor_farming_hero>div{
  background-image:url("~/assets/images/indoor-hero-blur-bg.webp"),url("~/assets/images/indoor-hero-small-blur-bg.webp");
  background-position: 0% 0%, right;
  @apply bg-no-repeat flex flex-col lg:grid  px-5 lg:px-10 xg:px-20 grid-cols-1 lg:grid-cols-5
  xl:max-w-screen-1.5lg m-auto ;
}
.indoor_farming_hero>div h2{
  @apply font-bold text-6.5xl leading-11 pt-10 pb-5
  lg:col-span-3 lg:text-22.5 lg:leading-25 lg:pt-24;
}

.indoor_farming_hero h2>span{
  @apply text-srgreen;
}
.indoor_farming_hero>div h3{
  @apply font-bold text-lg leading-6 pb-9.5 lg:col-span-2
  lg:pt-64 lg:text-xl lg:leading-7
}
.indoor_farming_hero>div .main-button-wrapper{
  @apply col-span-5 lg:col-span-2 lg:col-end-6 lg:ml-auto lg:pb-12
}
.indoor_farming_hero>div .main-button {
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base leading-4 block m-auto text-srblue mb-14
  hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out w-60
}
.indoor_farming_hero>div .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
}
.indoor_farming_hero>div .main-button:hover:after{
  @apply pl-4 transition duration-500 ease-in-out;
  content: url("~/assets/images/white-right.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}
.indoor_farming_hero>div .sub-button-wrapper{
  @apply col-span-5 lg:col-span-2 lg:col-end-6 lg:ml-auto lg:-mt-7.5
}
.indoor_farming_hero>div  .sub-button {
  @apply font-bold cursor-default flex flex-col justify-center text-base leading-4 text-srgreen m-auto block mb-11.5;
}
.indoor_farming_hero>div .sub-button:after {
  @apply  place-self-center pt-3 animate-bounce cursor-default;
  content: url("~/assets/images/green-down.png");
}
/*
2. indoor_farming_cc
*/
.indoor_farming_cc>div{
  @apply flex flex-col px-5 xl:max-w-screen-1.5lg m-auto ;
}
.indoor_farming_cc>div h2{
  @apply  pt-23.25 pb-6 font-bold text-srblue text-3xl leading-8
  lg:max-w-139.25 lg:self-end lg:text-12.5 lg:leading-13.75 lg:pt-0 lg:-mt-29  lg:text-right;
}
.indoor_farming_cc>div h2:before{
  @apply absolute -ml-20 -mt-40;
  content:url("~/assets/images/indoor-hero-small-blur-bg.webp");


}
.indoor_farming_cc>div .body-text{
  @apply lg:max-w-2xs lg:w-full lg:self-end ;
}
.indoor_farming_cc #animation_wrapper2 svg{
  @apply m-auto
}
.indoor_farming_cc #animation_wrapper2 {
  @apply -mt-27.25 lg:max-w-2xl lg:-mt-91.5
}
.indoor_farming_cc .body-text p{
  @apply font-semibold text-sm leading-5;
}

/*
3. indoor_food
*/
.indoor_food{
  @apply -mt-7.5 lg:-mt-12 ;
  background: radial-gradient(50% 50% at 50% 50%, #75BD000D 0%, #94C8000D 100%);
}
.indoor_food>div{
  @apply px-5 flex flex-col pb-42.75 pt-30.25 xl:max-w-screen-1.5lg m-auto
  lg:px-10 xg:px-20 lg:pb-75;
}
.indoor_food>div h2{
  @apply flex flex-col font-bold text-6.5xl leading-11 pt-10 pb-5 text-srblue pb-9
  lg:max-w-3.1xl lg:text-7xl
  xg:text-22.5 xg:leading-25
  ;
}
.indoor_food>div h2:before{
  @apply self-center pb-1;
  content:url("~/assets/images/green-plant.png");
}
.indoor_food>div h3{
  @apply text-srblue  font-bold text-lg leading-6 pb-5
  lg:max-w-screen-sm lg:text-xl lg:leading-7 lg:self-end lg:-mt-25
}
.indoor_food>div .body-text{
  @apply  lg:max-w-screen-sm lg:self-end
}
.indoor_food>div p{
  @apply font-semibold text-sm leading-5;
}

/*
4. indoor_maximize
 */
.indoor_maximize>div{
  @apply flex flex-col px-5 -mt-27.25 xl:max-w-screen-1.5lg m-auto
  lg:-mt-75 lg:flex-row lg:flex-wrap lg:justify-center;
}
.indoor_maximize>div .animate-main-wrapper{
  @apply w-full;
}
.indoor_maximize>div h2{
  @apply text-center font-bold text-3xl leading-8 pt-28 pb-4 m-auto
  pt-1 lg:text-12.5 lg:leading-13.75 lg:w-full lg:px-4 lg:pb-10;
}
.indoor_maximize>div h3{
  @apply font-bold text-lg leading-6 pb-6
  lg:max-w-xs lg:pr-3.5 lg:text-xl lg:leading-7;
}
.indoor_maximize>div h3>span{
  @apply block pb-5;
}
.indoor_maximize .body-text{
  @apply pb-12 lg:max-w-xs lg:pl-3.5 lg:pt-25;
}
.indoor_maximize .main-button-wrapper{
  @apply lg:m-auto lg:w-full
}
.indoor_maximize>div .main-button {
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base leading-4 block m-auto text-srblue mb-14
  lg:mb-32  hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out w-56;
  /*max-width: 214px;*/
}


/*the list*/
.thelist{
@apply px-5 md:max-w-3.1xl w-full m-auto
}

.thelist>div{
  @apply flex flex-col px-5 bg-no-repeat rounded-tl-3xl
  md:flex-row md:flex-wrap md:justify-around;
  background-image: linear-gradient(180deg, #F1F2F8 50%, #ffffff00 60%);

}
.thelist>div .logo-image{
  @apply md:w-full
}
.thelist>div .logo-image img{
  @apply m-auto pb-9 pt-9
}
.thelist h2{
  @apply text-3xl leading-8 text-center font-bold  text-srblue pb-14
  md:w-full
}
.thelist ul>li{
  @apply pb-8  flex
}
.thelist ul>li:before{
  @apply pr-8;
  content: url("~/assets/images/list-dash.png");

}
.thelist ul>li:first-child{
  @apply text-center leading-6 text-lg font-bold text-srblue pb-8 list-none md:h-25
}
.thelist ul>li:first-child:before{
  content:''
}
.thelist ul{
  @apply pb-20 lg:pb-44
  md:w-5/12 gap-x-8;
}

/*transation*/
.readytotalk-enter-active, .readytotalk-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.readytotalk-enter, .readytotalk-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50%);
  opacity: 0;
}

</style>
