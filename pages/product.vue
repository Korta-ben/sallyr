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
    cards() { return  this.$store.getters.getTheProduct.acf.universal_text_box }
  }
}
</script>
<style>
/*the product page*/
/*1. product header*/
.product_header {
  @apply bg-no-repeat xl:max-w-screen-1.5lg m-auto;
  background-image: url("~/assets/images/blue-blur-2.webp");
  background-position: right 50%;
}
.product_header>div {
  @apply flex flex-col pt-12 text-center px-5 m-auto
  lg:max-w-2.5xl lg:text-12.5 lg:leading-13.75;
}

.product_header .main_animation_conteiner{
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
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base leading-4 block m-auto text-srblue mb-14;
}
.product_header .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
}

/*
2. product_optimize_top
*/
.product_optimize_top{
  @apply xl:max-w-screen-1.5lg m-auto;
}
.product_optimize_top>div{
  @apply px-5 m-auto
  lg:max-w-screen-1.5lg lg:pl-30.25;
}
.product_optimize_top h2{
  @apply font-bold leading-11 text-5xl  sm:text-6.5xl text-srblue pb-7
  lg:text-22.5  lg:leading-25 lg:max-w-4xl

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
@apply md:w-1/2 md:mr-0 pl-5 relative  xl:max-w-screen-1.5lg m-auto lg:m-auto
   lg:w-full
}
.product_optimize_bottom>div{
  @apply flex flex-col mt-15 lg:max-w-3.5xl ml-auto;
  background: radial-gradient(50% 50% at 50% 50%, #918EFF4D 0%, #AEB9F44D 100%);
  border-top-left-radius: 20px;
}
.product_optimize_bottom>div .header-image{
  @apply order-last w-49.25 self-end mt-9 pt-2 -mb-21.75
  lg:order-none lg:w-91.5 lg:-mt-16;
}
.product_optimize_bottom>div h2{
  @apply order-first font-bold text-3xl leading-8 text-right pr-5 pl-12 pb-27.25 -mt-4
  lg:order-none lg:max-w-139.25 lg:text-12.5 lg:leading-13.75 lg:-ml-65 ;
}
.product_optimize_bottom>div .body-text{
  @apply pl-5 -mt-24 pb-27.25 pt-8;

}
.product_optimize_bottom>div .body-text p{
  @apply px-5   font-semibold leading-3 leading-5
  lg:max-w-102;

}
/*
5. product_scaleable
*/
.product_scaleable {
  @apply bg-srlightestblue -mt-9.5;
  /*margin-top: -96px;*/
}
.product_scaleable div{
  @apply flex flex-col pt-43.5 pb-16  px-5 m-auto

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
.product_low_maintenance {
  background: radial-gradient(50% 50% at 50% 50%, #918EFF33 0%, #AEB9F433 100%);
  backdrop-filter: blur(126px);

}
.product_low_maintenance>div{
  @apply flex flex-col px-5 pt-6 xl:max-w-screen-1.5lg m-auto;
}
.product_low_maintenance div h2{
  @apply pt-0.5 text-center font-bold  text-3xl leading-8 pb-4

}
.product_low_maintenance .body-text p{
  @apply text-center font-semibold leading-5 pt-px pb-9 m-auto md:max-w-sm
}
.product_low_maintenance div .main-button{
  @apply py-6 pl-6 pr-4 border-2 flex  border-srblue font-bold  text-base leading-4  m-auto text-srblue mb-17.5;
}
.product_low_maintenance>div .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
}
.product_low_maintenance>div .sub-button-wrapper{
  @apply lg:self-end
}
.product_low_maintenance>div .sub-button{
  @apply font-bold text-srorange text-base text-center leading-4 flex flex-col m-auto pb-1.5;
}
.product_low_maintenance>div  .sub-button:after {
  @apply  place-self-center pt-3 animate-bounce;
  content: url("~/assets/images/orange-down-arrow.png");
}

/*
7. product feature
*/
.product_feature{
  @apply xl:max-w-screen-1.5lg m-auto ;
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

.product_feature>div h2{
  @apply  text-center font-bold text-srblue text-lg leading-4.5 pb-3 m-auto
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
  lg:ml-0;
}

/*product feature first*/
.product_feature.first>div h2{
  @apply lg:-ml-36
}
.product_feature.first>div .header-image{
  @apply lg:max-w-2xs lg:w-full
}
.product_feature.first .body-text{
  @apply lg:-mt-29 md:m-auto lg:mr-0
}

/*product feature second*/
.product_feature.second>div .header-image{
  @apply lg:max-w-xs lg:w-full
}
.product_feature.second>div h2{
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
.product_feature.third>div h2{
  @apply lg:text-left lg:mt-0
}
.product_feature.third .body-text{
  @apply lg:max-w-lg lg:w-full lg:-mt-25 md:m-auto lg:mr-0
}
</style>
