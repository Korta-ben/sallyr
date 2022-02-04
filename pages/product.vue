<template>
  <div class="flex flex-col flex-wrap">
    <transition name="readytotalk" appear v-if=showOverlayForm>
      <OverlayForm class="-mt-24" @popupToggle="showOverlayForm = !showOverlayForm"/>
    </transition>
    <TheLinesBackground class="linesbg"/>
    <UniversalCard v-for="card in cards" :key="card.index" :card="card"></UniversalCard>

    <section class="slider-kb m-auto w-full order-first xl:max-w-screen-1.5lg  bg-no-repeat  pb-25  pt-11.5">
      <h2 class="text-srorange  text-12.5  font-bold leading-13.75 text-center pb-10">How it works?</h2>
      <div class="grid md:grid-cols-3 md:gap-2 gap-3 justify-center">


        <div v-for="item in items" :key="item.id"
             class="flex flex-row px-5 max-w-2xl">
          <div class="slide flex flex-wrap justify-between py-14 px-8">
            <div class=" bg-contain bg-no-repeat bg-center flex w-full justify-center
                      "
            >
              <img class="w-full sm:h-36 sm:w-auto" :src="item.acf.image">
            </div>
            <div class="w-full   pb-4">
              <h3 v-html="item.title.rendered" ></h3>
              <div v-html="item.excerpt.rendered" ></div>
            </div>
          </div>

        </div>
      </div>

    </section>
  </div>
</template>

<script>
// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {

  data () {
    return {

        showOverlayForm:false,


    }
  },
  async asyncData ({ $axios }) {
    const items = await
      $axios.$get('https://api.sally-r.com/wp-json/wp/v2/slider?acf_format=standard')
    return { items }
  },
  computed: {
    cards() { return  this.$store.getters.getTheProduct.acf.universal_text_box }
  }
}
</script>
<style>
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

.product_feature.second  .lines-bg{
@apply absolute left-0 right-0 m-auto overflow-hidden;
  z-index: -1;
}
/*the product page*/
/*1. product header*/
.product_header {
  /*@apply bg-no-repeat max-w-screen-1.5xl  m-auto;*/
  @apply bg-no-repeat md:pt-25 max-w-screen-1.5xl w-full   content-center m-auto;
  background-image: url("~/assets/images/blue-blur-2.webp"), url("~/assets/images/blue-blur-2.webp");
  background-position: right 50%,
  left 0%;
  background-size: auto, 39% auto, auto;
}
.product_header>div {
  @apply flex flex-col pt-6 text-center px-5 m-auto max-w-screen-1.5lg
  lg:max-w-2.5xl lg:text-12.5 lg:leading-13.75;
}

.product_header .main_animation_container{
  @apply order-last pb-25;
}
.product_header h2{
  @apply text-3xl leading-8 font-bold px-5 pb-9.5
  lg:text-12.5 lg:leading-13.75 lg:px-25;
}
.product_header h2 span{
  @apply text-srorange;
}
.product_header h3{
  @apply font-bold text-lg leading-6 pb-12.75
  lg:text-xl;
}
.product_header .main-button {
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base leading-4 block m-auto text-srblue mb-14
  hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out items-center;
  width: fit-content;
}
.product_header .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
}

.product_header .main-button:hover:after{
  @apply pl-4 transition duration-500 ease-in-out;
  content: url("~/assets/images/white-right.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}

/*
2. product_optimize_top
*/
.product_optimize_top{
  /*background-image: url("~/assets/images/product-opt1-bg.webp");*/
  @apply xl:max-w-screen-1.5lg m-auto bg-no-repeat;
}

.product_optimize_top>div{
  @apply px-5 m-auto
  lg:max-w-screen-1.5lg;
}
.product_optimize_top h2{
  @apply font-bold leading-11 text-5xl  sm:text-6.5xl text-srblue pb-7
  lg:text-22.5  lg:leading-25 lg:max-w-4xl

}
.product_optimize_top h2:after{
  @apply hidden lg:inline-block  lg:absolute lg:pl-80 lg:-mt-9 lg:mx-auto;
  content:url("~/assets/images/waterfall.webp");
}

.product_optimize_top h3{
  @apply  pb-7 font-bold text-xl leading-6 text-srblue
  md:pl-12.75 md:max-w-2xs;
}
.product_optimize_top .body-text{
  @apply  pb-7 font-semibold leading-3 leading-5
  md:pl-12.75 md:max-w-2xs;
}

/*
4. product optimization bottom
*/
.product_optimize_bottom{
/*background-image: url("~/assets/images/product-opt2-lines-bg.webp");*/
/*  background-position: 68% 127%;*/
@apply md:mr-0 pl-5 relative  xl:max-w-screen-1.5lg m-auto lg:m-auto
   lg:w-full bg-no-repeat ;
}
/*.product_optimize_bottom:before{*/
/*  @apply absolute overflow-hidden;*/
/*  content:url("~/assets/images/product-opt2-lines-bg.webp");*/

/*}*/
.product_optimize_bottom{
  @apply max-w-screen-1.5xl
}
.product_optimize_bottom  .lines-bg {
  @apply absolute left-0 right-0 m-auto overflow-hidden;
  z-index: -1;
}

.product_optimize_bottom>div{
  @apply flex flex-col mt-15 lg:max-w-3.5xl ml-auto md:w-1/2 lg:w-full;
  background: radial-gradient(50% 50% at 50% 50%, #918EFF4D 0%, #AEB9F44D 100%);
  border-top-left-radius: 20px;
}
.product_optimize_bottom>div .header-image{
  @apply order-last w-49.25 self-end mt-9 pt-2 -mb-21.75
  lg:order-none lg:w-91.5 lg:-mt-16;
}
.product_optimize_bottom>div h2{
  @apply order-first font-bold text-3xl leading-8  pt-16 lg:pt-0  pr-5 md:pl-17.5  pl-6 lg:pl-27.25 pb-20
  md:text-left
  lg:order-none lg:max-w-120 lg:text-12.5 lg:leading-13.75  ;
}
.product_optimize_bottom>div .body-text{
  @apply pb-10 md:pl-10 lg:pl-24 -mt-24 lg:pb-27.25 pt-6;

}
.product_optimize_bottom>div .body-text p{
  @apply pr-6 pl-6 lg:pl-4 md:pl-8  font-semibold leading-3 leading-5
  lg:max-w-102;

}
/*
5. product_scaleable
*/
.product_scaleable {
  @apply bg-srlightestblue -mt-9.5 bg-no-repeat bg-center bg-contain;



}
.product_scaleable div{
  @apply flex flex-col pt-43.5 pb-32  px-5 m-auto

}
.product_scaleable h2{
  @apply font-bold text-6.5xl  leading-11 text-srblue text-center  pb-11.5 m-auto
  lg:max-w-3xl lg:text-22.5 lg:leading-25;
}
.product_scaleable h3{
  @apply font-bold text-lg leading-6 text-center m-auto
  md:max-w-120  lg:leading-7 lg:text-2xl;
}

/*
6. product_low_maintenance
*/
.product_low_maintenance{
@apply  m-auto w-full bg-no-repeat bg-center bg-top bg-contain;
background-image:url("~/assets/images/new-curve.svg");


}
.product_low_maintenance>div{
  @apply -mt-11.5   flex flex-col px-5 pt-6 xl:max-w-screen-1.5lg m-auto  1.5lg:w-full;
}
.product_low_maintenance>div h2{
  @apply pt-0.5 text-center font-bold  text-3xl leading-8 pb-4

}
/*.product_low_maintenance>div:before {*/
/*  @apply hidden  lg:block lg:absolute  z-0;*/
/*  content:url("~/assets/images/blue-blur-2.webp");*/
/*  margin-left: 17%;*/
/*  !*margin-right:20%;*!*/
/*  margin-top: -360px;*/
/*}*/
.product_low_maintenance .body-text p{
  @apply text-center font-semibold leading-5 pt-px pb-9 m-auto md:max-w-sm
}
.product_low_maintenance>div .main-button{
  @apply py-6 pl-6 pr-4 border-2 flex  border-srblue font-bold  text-base leading-4  m-auto text-srblue mb-17.5
  hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out z-0  max-w-sm text-center justify-center;
}
.product_low_maintenance>div .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
}


.product_low_maintenance>div .main-button:hover:after{
  @apply pl-4 transition duration-500 ease-in-out ;
  content: url("~/assets/images/white-right.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}

.product_low_maintenance>div .sub-button-wrapper{
  @apply lg:self-end
}
.product_low_maintenance>div .sub-button{
  @apply font-bold text-srorange text-base text-center leading-4 flex flex-col m-auto pb-1.5 cursor-default;
}
.product_low_maintenance>div  .sub-button:after {
  @apply  place-self-center pt-3 animate-bounce cursor-default;
  content: url("~/assets/images/orange-down-arrow.png");
}

/*
7. product feature
*/
.product_feature{
  @apply   m-auto ;
}
.product_feature>div{
  @apply flex flex-col px-5 pb-14
    lg:flex-row lg:flex-wrap lg:max-w-3.2xl lg:m-auto lg:justify-end
  ;
}
.product_feature .body-text p{
  @apply lg:mr-0;
}
.product_feature>div .header-image{
  @apply  w-64 self-center
  lg:max-w-102;
}

.product_feature>div h3{
  @apply py-4  text-center font-bold text-srblue text-lg leading-4.5 pb-3 m-auto
  lg:w-1/2 lg:text-3xl lg:leading-8;
}
.product_feature .body-text{
  @apply lg:w-full  lg:flex lg:flex-col md:max-w-120
}
.product_feature .body-text p{
  @apply text-center text-sm pb-14 m-auto
  lg:max-w-120 lg:mr-0;
}

.product_feature:last-child>div .main-button-wrapper{
  @apply lg:max-w-120 lg:pr-21.75 lg:w-full
}
.product_feature:last-child>div .main-button{
  @apply py-6 pl-6 pr-4 border-2 flex  border-srblue font-bold  text-base leading-4  m-auto text-srblue mb-17.5
  lg:ml-0  hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out;
}

/*product feature first*/

.product_feature.first>div{
  /*@apply max-w-screen-1.5lg*/
  @apply pt-40
}
.product_feature.first>div h2{
  /*@apply lg:-ml-36*/
  /*@apply lg:my-0 lg:-ml-36 text-srorange text-22.5 leading-25 lg:w-2/3 ;*/
  @apply text-srorange text-6.5xl  leading-11
  lg:text-22.5 lg:leading-25 order-first text-center;
}

.product_feature.first>div h3{
  @apply lg:-ml-36
}

.product_feature.first>div .header-image{
  @apply lg:max-w-2xs lg:w-full
}
.product_feature.first .body-text{
  @apply lg:-mt-29 md:m-auto
}

/*product feature second*/
.product_feature.second{
  /*background:url("~/assets/images/new-lines-resized.svg");*/
  /*background-position: 2% 38%;*/
  @apply  bg-no-repeat  w-full   ;
  /*max-width: 1920px;*/
}

.product_feature.second>div:before{
  content:url("~/assets/images/blue-blur-2.webp");
  @apply hidden  lg:block lg:absolute  z-10 -mt-40;

}
.product_feature.second>div{
  /*@apply max-w-screen-1.5lg;*/
}
.product_feature.second>div .header-image{
  @apply lg:max-w-xs lg:w-full
}
.product_feature.second>div h3{
  @apply lg:w-91.5
}

.product_feature.second>div{
  @apply lg:flex-row-reverse
}
.product_feature.second .body-text{
  @apply lg:max-w-lg lg:w-full lg:-mt-14 md:m-auto lg:ml-0
}
.product_feature.second .body-text p{
  /*@apply lg:ml-0;*/
  @apply lg:w-91.5 lg:m-auto
}

/* product feature third*/
.product_feature.third>div{
  /*@apply max-w-screen-1.5lg*/
}
.product_feature.third>div h3{
  @apply lg:text-center lg:mt-0
}
.product_feature.third .body-text{
  @apply lg:max-w-lg lg:w-full lg:-mt-20 md:m-auto lg:mr-0
}
.product_feature.third .main-button-wrapper{
  @apply w-full
}
.product_feature.third .main-button{
  @apply py-6 pl-6 pr-4 border-2 flex  border-srblue font-bold  text-base leading-4  m-auto text-srblue mb-17.5
  hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out z-10  max-w-sm text-center justify-center;
}
.product_feature.third  .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
}

.product_feature.third   .main-button:hover:after{
  @apply pl-4 transition duration-500 ease-in-out;
  content: url("~/assets/images/white-right.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}



.slide{

  background: #FFFFFF;
  /* Drop shadow */

  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.05);
  /*width:436px*/
}
.slide h3{
  @apply text-srblue  text-xl  leading-7 font-bold
}
.slide p{
  @apply leading-5 text-sm font-semibold ;
}
.slick-arrow.slick-prev:before{
  content: url("~/assets/images/left-arrow.svg");
  font-size: 0;
}
.slick-prev{
  order:2;
  font-size: 0;
  padding-right:23px
}
.slick-arrow.slick-next:before{
  content: url("~/assets/images/right-blue.svg");

}
.slick-next{
  order:2;
  font-size: 0;
  padding-left:23px
}
.slick-list{
  padding-bottom:56px !important;
}
.slick-slider{
  @apply   flex-wrap;
  display:flex !important;
  justify-content: center;
  }

</style>

