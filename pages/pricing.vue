<template>
  <div>
    <UniversalCard v-for="card in cards" :key="card.index" :card="card"></UniversalCard>
    <ThePriceComponents />
  </div>
</template>

<script>
import ThePriceComponents from "~/components/blocks/ThePriceComponents";
export default {
  components: {ThePriceComponents},
  data () {
    return {
    }
  },

  computed: {
    cards() { return  this.$store.getters.getThePricing.acf.universal_text_box }
  }
}
</script>

<style>

/*1 pricing_hero */
.pricing_hero>div{
  @apply flex flex-col items-center px-5
  lg:pt-25
}
/*.pricing_hero>div:before{*/
/*  content: ' ';*/
/*  width: 453px;*/
/*  height: 454px;*/
/*  left: 50%;*/
/*  top: 50%;*/
/*  margin-top: -300px;*/
/*  margin-left: -300px;*/
/*  background: radial-gradient(50% 50% at 50% 50%, #918EFF 0%, #AEB9F4 100%);*/
/*  position: absolute;*/
/*  opacity: 0.3;*/
/*  filter: blur(126px);*/
/*  z-index: 0;*/
/*}*/
.pricing_hero>div .header-image{
  @apply  w-40 -mt-4
  md:w-80 lg:-mt-6
}
.pricing_hero>div h2{
  @apply order-first text-6.5xl leading-11 font-bold text-center z-10
  lg:w-full lg:max-w-3xl lg:px-36

}
.pricing_hero>div .sub-button-wrapper{
  @apply self-end pt-12.75
  lg:self-center lg:pl-67.5
}
.pricing_hero>div .sub-button-wrapper button{
  @apply text-base font-bold text-srskyblue flex flex-col items-center
}
.pricing_hero>div .sub-button-wrapper .sub-button:after {
  @apply  place-self-center pr-6 animate-bounce;
  content: url("~/assets/images/lb-down.png");
}


.price-component{
  background-image: linear-gradient(180deg, #ffffff00 5%, #F1F2F8 5%, #F1F2F8 80%, #ffffff00 80% );

}
.price-component>div{
  @apply px-5 m-auto
  lg:max-w-screen-1.5lg lg:grid lg:grid-cols-2;
}
.price-component>div h2{
  @apply text-3xl text-srblue
}
.price-component>div .highlighted{
  @apply text-srblue  text-lg leading-6
}
.price-component>div p{
  @apply pb-3
}
.price-component>div .price-cards{
  @apply flex flex-col gap-y-5
}
.price-component>div .card{
@apply bg-srwhite px-9.5 py-12 rounded-tl-xl;
  background: #FFFFFF;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.05);
}
.price-component>div .card h3{
  @apply pb-5
}
.price-component>div .card .cost{
  @apply  pt-10 text-xl font-bold  text-srblue
}
</style>
