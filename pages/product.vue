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
  @apply bg-no-repeat;
  background-image: url("~/assets/images/blue-blur-2.webp");
  background-position: right 50%;
}
.product_header .header-image{
  @apply order-last pb-20;
}
.product_header div {
  @apply flex flex-col pt-12 text-center px-5;
}
.product_header h2{
  @apply text-3xl leading-8 font-bold px-5 pb-9.5;
}
.product_header h2 span{
  @apply text-srorange;
}
.product_header h3{
  @apply font-bold text-lg leading-6 pb-12.75;
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
}
.product_optimize_top>div{
  @apply px-5;
}
.product_optimize_top h2{
  @apply font-bold leading-11  text-6.5xl text-srblue pb-7;
}

.product_optimize_top h3{
  @apply  pb-7 font-bold text-xl leading-6 text-srblue;
}
.product_optimize_top .body-text{
  @apply  pb-7 font-semibold leading-3 leading-5;
}

/*
4. product optimization bottom
*/
.product_optimize_bottom>div{
  @apply flex flex-col;
}
.product_optimize_bottom>div .header-image{
  @apply order-last w-49.25 self-end -mt-9;
}
.product_optimize_bottom>div h2{
  @apply order-first font-bold text-3xl leading-8 text-right pr-5 pl-12 pb-8.5;
}
.product_optimize_bottom>div .body-text{
  @apply pl-5;
  margin-top:-82px;
}
.product_optimize_bottom>div .body-text p{
  @apply px-5 pt-21.75  pb-11 font-semibold leading-3 leading-5;
  background: radial-gradient(50% 50% at 50% 50%, #918EFF4D 0%, #AEB9F44D 100%);
  border-top-left-radius: 20px;
}
/*
5. product_scaleable
*/
.product_scaleable {
  margin-top: -124px;
}
.product_scaleable div{
  @apply flex flex-col pt-43.5 pb-16 bg-srlightestblue px-5;
}
.product_scaleable h2{
  @apply font-bold text-6.5xl  leading-11 text-srblue text-center  pb-11.5;
}
.product_scaleable h3{
  @apply font-bold text-lg leading-6 text-center;
}

/*
6. product_low_maintenance
*/
.product_low_maintenance {
  background: radial-gradient(50% 50% at 50% 50%, #918EFF33 0%, #AEB9F433 100%);
  backdrop-filter: blur(126px);

}
.product_low_maintenance>div{
  @apply flex flex-col px-5 pt-6;
}
.product_low_maintenance div h2{
  @apply pt-0.5 text-center font-bold  text-3xl leading-8 pb-4
}
.product_low_maintenance .body-text p{
  @apply text-center font-semibold leading-5 pt-px pb-9
}
.product_low_maintenance div .main-button{
  @apply py-6 pl-6 pr-4 border-2 flex  border-srblue font-bold  text-base leading-4  m-auto text-srblue mb-17.5;
}
.product_low_maintenance>div .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
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
.product_feature>div{
  @apply flex flex-col px-5 pb-14;
}
.product_feature img{
  @apply px-14 ;
}
.product_feature>div h2{
  @apply  text-center font-bold text-srblue text-lg leading-4.5 pb-3;
}
.product_feature .body-text p{
  @apply text-center text-sm pb-14;
}

.product_feature:last-child>div .main-button{
  @apply py-6 pl-6 pr-4 border-2 flex  border-srblue font-bold  text-base leading-4  m-auto text-srblue mb-17.5;
}
.product_feature:last-child>div .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
}
</style>
