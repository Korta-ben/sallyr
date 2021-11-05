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
    cards() { return  this.$store.getters.getThePricing.acf.universal_text_box }
  }
}
</script>

<style>

/*1 pricing_hero */
.pricing_hero>div{
  @apply flex flex-col items-center px-5
}
.pricing_hero>div .header-image{
  @apply  w-40 -mt-4
}
.pricing_hero>div h2{
  @apply order-first text-6.5xl leading-11 font-bold text-center z-10
}
.pricing_hero>div .sub-button-wrapper{
  @apply self-end pt-12.75
}
.pricing_hero>div .sub-button-wrapper button{
  @apply text-base font-bold text-srskyblue flex flex-col items-center
}
.pricing_hero>div .sub-button-wrapper .sub-button:after {
  @apply  place-self-center pr-6 animate-bounce;
  content: url("~/assets/images/lb-down.png");
}
</style>
