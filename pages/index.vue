<template>
  <div class="flex flex-col flex-wrap">
    <transition name="readytotalk" appear v-if=showOverlayForm>
      <OverlayForm class="-mt-24" @popupToggle="showOverlayForm = !showOverlayForm"/>
    </transition>
    <TheLinesBackground class="linesbg"/>
    <UniversalCard v-for="card in cards" :key="card.index" :card="card"></UniversalCard>
    <TheReadyToTalkSlideIn  @popupToggle="showOverlayForm = !showOverlayForm"/>
  </div>
</template>

<script>

// import lottie from "lottie-web/build/player/lottie"
// import * as lines from "~/assets/lottie/lines.json"
// import TheLinesBackground from "~/components/animations/TheLinesBackground";
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
      showOverlayForm:false
    }
  },
  computed: {
    cards() { return  this.$store.getters.getHomePage.acf.universal_text_box }
  }
}
</script>
<style>
/*home page components home-header.webp ~/assets/images/blue-blur-1.webp*/


.linesbg{
  @apply absolute left-0 right-0 m-auto overflow-hidden;
  z-index: -1;
}
/*
  1.header
*/
.home_header{
  @apply bg-no-repeat pt-11 md:pt-25 max-w-screen-1.5xl w-full   content-center m-auto;
  background-image:url("~/assets/images/blue-blur-2.webp"),
  url("~/assets/images/home-header.webp");
  background-position:right 90% , left 0% ;

}


.home_header>div{
  @apply flex m-auto flex-col  px-5  pb-44
    lg:px-10 xg:pr-28  max-w-screen-1.5lg lg:pb-56
    lg:grid lg:grid-cols-5;
}

.home_header>div h2{
    @apply font-bold pb-12 text-6.5xl leading-11 w-full  md:text-22.5 md:leading-25  xl:max-w-139.25
    lg:row-span-3 lg:col-span-3
}

.home_header  h2 span{
  @apply text-srorange;
}

.home_header  h3{
  @apply text-lg font-bold leading-6 pb-10 lg:max-w-102 lg:pt-15 lg:text-xl
  lg:col-span-2;
}
.home_header .main-button-wrapper{
@apply  lg:mr-auto lg:col-span-2
}


.home_header  .main-button {
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base leading-4 block m-auto text-srblue mb-14
  hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out;
  width: fit-content;
}
.home_header .main-button:hover:after{
  @apply pl-4 transition duration-500 ease-in-out;
  content: url("~/assets/images/white-right.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}
.home_header .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}

.home_header .sub-button-wrapper{
  @apply  lg:-mt-7.5 lg:col-span-2 justify-self-end hidden
}
.home_header  .sub-button {
  @apply font-bold flex flex-col justify-center text-base leading-4 text-srskyblue m-auto block pb-44 text-center cursor-default
}
.home_header  .sub-button:after {
  @apply  place-self-center pt-3 animate-bounce cursor-default;
  content: url("~/assets/images/lb-down.png");
}
/*
  2.home_hvac_system
*/
.home_hvac_system{

  background: #F1F2F8;
  @apply flex flex-col w-full ;

}
.home_hvac_system>div{
  background: url("~/assets/images/blue-blur-2.webp");
  background-position: 104% 117%;
  @apply bg-no-repeat bg-right-bottom px-5 flex flex-col text-center w-full xl:max-w-screen-1.5lg  content-center m-auto;
}
.home_hvac_system>div .body-text:after{
  @apply hidden   duration-500 ease-in-out mt-56 animate-bounce-slow2
  lg:block lg:absolute lg:-ml-36;
content:  url("~/assets/images/temprature.svg");

}
.home_hvac_system>div .body-text p:nth-child(2){
  @apply py-4;
}
.home_hvac_system>div .main-button:before{
  @apply hidden  lg:-ml-80 lg:mt-12 animate-bounce-slow1
  lg:block lg:absolute;
  content:  url("~/assets/images/drops.svg");
}
.home_hvac_system>div .main-button-wrapper:after{
  @apply hidden  lg:ml-64 lg:mt-11.5 animate-bounce-slow3
  lg:block lg:absolute;
  content:  url("~/assets/images/co2.svg");
}
.home_hvac_system .main_animation_container{
  @apply -mt-24  pb-24
  lg:-mt-60  lg:pb-24 lg:ml-0 lg:pr-48;
}
.home_hvac_system  h2{
  @apply text-srblue text-3xl m-auto leading-8 px-5 pb-5
  md:max-w-120
}
.home_hvac_system>div .body-text:before{
  @apply absolute mt-33.75 ml-16
    md:mt-52 md:ml-56
  lg:block  lg:ml-111 lg:mt-0;
  content: url("~/assets/images/pie.svg");

}
.home_hvac_system  .body-text{
  @apply text-sm leading-5 pb-36  m-auto
  md:max-w-120 md:px-5 md:pb-10
}
.home_hvac_system  .main-button{
  @apply hidden m-auto border-srblue font-bold py-6 pl-7 border-2 text-base leading-4 block text-srblue
  md:flex md:mb-35.25 max-w-102  hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out
}
.home_hvac_system  .main-button:hover:after{
  @apply pl-4 transition duration-500 ease-in-out;
  content: url("~/assets/images/white-right.svg");
}
.home_hvac_system  .main-button:after{
  @apply pl-4 ;
  content: url("~/assets/images/right-blue.svg");
}



/* 4. home_indoor_farming */
.home_indoor_farming{
  @apply bg-no-repeat bg-center pt-20 pb-52 max-w-screen-1.5xl w-full   m-auto;
  background-image: url("~/assets/images/indoor-farming-bg.webp");
}
.home_indoor_farming>div{
  @apply  flex flex-col pt-12 items-center text-center m-auto max-w-screen-1.5lg ;
}
.home_indoor_farming .header-image {
  @apply  w-10 pb-17.5
}
.home_indoor_farming h2 {
  @apply px-14 font-bold text-3xl leading-8 pb-4
  md:text-12.5 md:leading-13.75 md:max-w-120
}
.home_indoor_farming h2:before{
  @apply block mx-auto pb-7;
  content: url("~/assets/images/green-plant.png");
}

/*@screen sm{*/
/*  .home_indoor_farming h2:before{*/
/*    @apply block mx-auto pb-7;*/
/*    content: url("~/assets/images/green-plant.png");*/
/*  }*/
/*}*/

.home_indoor_farming .body-text{
  @apply px-12.75 pb-9
  md:max-w-120 md:px-3.5
}
.home_indoor_farming .main-button{
  @apply px-16 font-bold flex text-base leading-4 py-6 px-7.5  border-2 border-srblack bg-srwhite lg:bg-opacity-0
  hover:bg-srblack hover:text-srwhite transition duration-500 ease-in-out;
  font-family: 'Kumbh Sans', sans-serif;
}
.home_indoor_farming .main-button:hover:after{
  @apply pl-4 ;
  content: url("~/assets/images/white-right.svg");
}
.home_indoor_farming .main-button:after{
  @apply pl-4 transition duration-500 ease-in-out;
  content: url("~/assets/images/black-right.svg");
}

/*
5. home_mission
*/
.home_mission{

  background: url("~/assets/images/arch.svg"),linear-gradient(180deg, rgba(0,0,0,0) 10%, rgba(22,76,214,1) 10%);


  @apply  w-full  1.5xl:bg-cover text-sm text-xl font-semibold text-srwhite pt-12 lg:pt-40 bg-no-repeat bg-top ;
}
.home_mission:before{


}
.home_mission>div{
  @apply flex flex-col px-5 lg:px-0 bg-srblue flex-wrap
    lg:flex-row lg:justify-between

}
.home_mission .header-image{
  @apply hidden
}
.home_mission h2{
  @apply pt-9 text-3xl font-bold leading-8 pb-4


}

@screen lg{
  /*.home_mission h2{*/
  /*  @apply w-1/2;*/
  /*}*/
  .home_mission .header-image{
    @apply block order-2 justify-self-end	;

  }
  /*.home_mission>div:before{*/
  /*  content: url("~/assets/images/astroanut.svg");*/
  /*  @apply absolute right-0 mt-10*/
  /*   }*/
  .home_mission>div {
    @apply m-auto grid xl:max-w-screen-1.5lg ;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .home_mission h2 {
    @apply xl:px-5;
    grid-area: 1 / 1 / 2 / 2; }
  .home_mission .body-text{
    @apply xl:px-5  -mt-29;
    grid-area: 2 / 1 / 3 / 2; }
  .home_mission .main-button-wrapper{@apply xl:px-5;
    grid-area: 3 / 1 / 4 / 2; }
  .home_mission .header-image{ grid-area: 1 / 2 / 4 / 3; }
  .home_mission>div:before{
    content: url("~/assets/images/astroanut.svg");

    @apply justify-self-end absolute mt-64 animate-bounce-astro;
    grid-area: 2 / 2 / 3 / 3;
    padding-left: 63%;

  }

}

.home_mission p{
  @apply pb-3
}

.home_mission .main-button{
  @apply  font-bold flex text-base leading-4 py-6 px-7.5 mt-11 border-2 border-srwhite w-65 m-auto
  lg:ml-0 hover:text-srblue hover:bg-srwhite transition duration-500 ease-in-out;
  font-family: 'Kumbh Sans', sans-serif;
}
.home_mission .main-button:hover:after{
  @apply pl-4 transition duration-500 ease-in-out;
  content: url("~/assets/images/right-blue.svg");
}
.home_mission .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/white-right.svg");
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
