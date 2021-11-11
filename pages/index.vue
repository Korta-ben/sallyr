<template>
  <div>
    <UniversalCard v-for="card in cards" :key="card.index" :card="card"></UniversalCard>

  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  computed: {
    cards() { return  this.$store.getters.getHomePage.acf.universal_text_box }
  }
}
</script>
<style>

/*home page components*/
/*
  1.header
*/
.home_header{
  @apply bg-no-repeat md:pt-25 max-w-screen-1.5xl  content-center m-auto;
  background-image:url("~/assets/images/blue-blur-2.webp"),
  url("~/assets/images/blue-blur-1.webp"),
url("~/assets/images/hero-bg.webp");
  background-position:right 90% , left 0%, center top;

}
/*.home_header>div {*/
/*  @apply flex flex-col lg:flex-row px-5 lg:px-10 xg:px-28 lg:flex-wrap xg:justify-between lg:justify-around;*/
/*}*/
.home_header>div {
  @apply flex m-auto flex-col lg:grid  px-5 lg:px-10 xg:pr-28 grid-cols-1 lg:grid-cols-5 max-w-screen-1.5lg;
}
.home_header  h2{
  @apply font-bold pb-12 text-6.5xl leading-11 w-full  md:text-22.5 md:leading-25  xl:max-w-139.25
  lg:col-span-3;
}
.home_header  h2 span{
  @apply text-srorange;
}
.home_header  h3{
  @apply text-lg font-bold leading-6 pb-10 lg:max-w-102 lg:pt-15 lg:text-xl lg:col-span-2
}
.home_header .main-button-wrapper{
@apply col-span-5 lg:col-span-2 lg:col-end-6 lg:mr-auto lg:-mt-15
}
.home_header .sub-button-wrapper{
  @apply col-span-5 lg:col-span-2 lg:col-end-7  lg:-mt-7.5
}
.home_header  .main-button {
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base leading-4 block m-auto text-srblue mb-14
  hover:bg-srblue hover:text-srwhite
}
.home_header .main-button:hover:after{
  @apply pl-4;
  content: url("~/assets/images/white-right.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}
.home_header .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}

.home_header  .sub-button {
  @apply font-bold flex flex-col justify-center text-base leading-4 text-srskyblue m-auto block pb-44
}
.home_header  .sub-button:after {
  @apply  place-self-center pt-3 animate-bounce;
  content: url("~/assets/images/lb-down.png");
}
/*
  2.home_hvac_system
*/
.home_hvac_system{

  background: #F1F2F8;
  @apply flex flex-col;

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
.home_hvac_system .main_animation_conteiner{
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
  @apply hidden m-auto border-srblue font-bold py-6 px-7 border-2 text-base leading-4 block text-srblue
  md:flex md:mb-35.25 hover:bg-srblue hover:text-srwhite
}
.home_hvac_system  .main-button:hover:after{
  @apply pl-4 ;
  content: url("~/assets/images/white-right.svg");
}
.home_hvac_system  .main-button:after{
  @apply pl-4 ;
  content: url("~/assets/images/right-blue.svg");
}


/*
3. home_ready_to_talk
*/
.home_ready_to_talk{
 @apply lg:px-28 xl:max-w-screen-1.5lg m-auto
}
/*.home_ready_to_talk:before{*/
/*  @apply hidden mt-11 lg:ml-32*/
/*  lg:block lg:absolute 1.5xl:left-1/4;*/
/*  content:  url("~/assets/images/co2.svg");*/
/*}*/
.home_ready_to_talk>div:before{
  @apply self-end	pr-16 -mt-5  mr-0;
  content: url("~/assets/images/line-below-hvac-system.webp");
}
.home_ready_to_talk>div{
  @apply flex flex-col  px-5 text-srblue;
}
.home_ready_to_talk  h2{
  @apply font-bold pb-11  text-6.5xl leading-11
}
.home_ready_to_talk  h2:before{
  @apply absolute -mt-60 lg:hidden animate-bounce-slow1;
  content: url("~/assets/images/kwh.svg");
}
.home_ready_to_talk:before{
  @apply absolute  lg:hidden pl-25 -mt-6 animate-bounce-slow2;
  content: url("~/assets/images/rtt-h2-after.svg");
}
.home_ready_to_talk  h3{
  @apply text-base flex flex-col md:flex-row
}
.home_ready_to_talk span{
  @apply pb-7 md:pr-15
}
.home_ready_to_talk input{
  @apply p-3 border-2 border-srblue
}
.home_ready_to_talk label {
  @apply pl-3.5
}
.home_ready_to_talk .sub-button {
  @apply  flex justify-end text-srskyblue text-right font-bold  text-base md:ml-auto
}
.home_ready_to_talk .sub-button:before {
  @apply  place-self-center pr-6 animate-bounce;
  content: url("~/assets/images/lb-down.png");
}

/* 4. home_indoor_farming */
.home_indoor_farming{
  @apply bg-no-repeat bg-center pb-52 max-w-screen-1.5xl  m-auto;
  background-image: url("~/assets/images/indoor-farming-bg.webp"), url("~/assets/images/wave-home-greenwebp.webp");
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
  @apply px-16 font-bold flex text-base leading-4 py-6 px-7.5  border-2 border-srblack
  hover:bg-srblack hover:text-srwhite;
  font-family: 'Kumbh Sans', sans-serif;
}
.home_indoor_farming .main-button:hover:after{
  @apply pl-4;
  content: url("~/assets/images/white-right.svg");
}
.home_indoor_farming .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/black-right.svg");
}

/*
5. home_mission
*/
.home_mission{

  background: url("~/assets/images/arch.svg"),linear-gradient(180deg, rgba(0,0,0,0) 10%, rgba(22,76,214,1) 10%);


  @apply  1.5xl:bg-cover text-sm text-xl font-semibold text-srwhite pt-12 lg:pt-40 bg-no-repeat bg-top ;
}
.home_mission:before{


}
.home_mission>div{
  @apply flex flex-col pl-5 bg-srblue flex-wrap
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
  lg:ml-0 hover:text-srblue hover:bg-srwhite;
  font-family: 'Kumbh Sans', sans-serif;
}
.home_mission .main-button:hover:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
}
.home_mission .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/white-right.svg");
}
</style>
