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
    cards() { return  this.$store.getters.getTheIndoorFarming.acf.universal_text_box }
  }
}
</script>

<style>


/*indoor farming page*/
/*
1. indoor_farming_hero
*/
.indoor_farming_hero>div{
  @apply flex flex-col px-5;
}
.indoor_farming_hero>div h2{
  @apply font-bold text-6.5xl leading-11 pt-10 pb-5;
}
.indoor_farming_hero h2>span{
  @apply text-srgreen;
}
.indoor_farming_hero>div h3{
  @apply font-bold text-lg leading-4.5 pb-9.5
}
.indoor_farming_hero>div .main-button {
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base leading-4 block m-auto text-srblue mb-14
}
.indoor_farming_hero>div .main-button:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
}
.indoor_farming_hero>div  .sub-button {
  @apply font-bold flex flex-col justify-center text-base leading-4 text-srgreen m-auto block mb-11.5;
}
.indoor_farming_hero>div .sub-button:after {
  @apply  place-self-center pt-3 animate-bounce;
  content: url("~/assets/images/green-down.png");
}
/*
2. indoor_farming_cc
*/
.indoor_farming_cc>div{
  @apply flex flex-col px-5 ;
}
.indoor_farming_cc>div h2{
  @apply  pt-23.25 pb-6 font-bold text-srblue text-3xl leading-8;
}
.indoor_farming_cc .body-text p{
  @apply font-semibold text-sm leading-5;
}

/*
3. indoor_food
*/
.indoor_food{
  @apply -mt-7.5;
  background: radial-gradient(50% 50% at 50% 50%, #75BD000D 0%, #94C8000D 100%);
}
.indoor_food>div{
  @apply px-5 flex flex-col pb-42.75 pt-30.25;
}
.indoor_food>div h2{
  @apply flex flex-col font-bold text-6.5xl leading-11 pt-10 pb-5 text-srblue pb-9;
}
.indoor_food>div h2:before{
  @apply self-center pb-16;
  content:url("~/assets/images/green-plant.png");
}
.indoor_food>div h3{
  @apply text-srblue  font-bold text-lg leading-6 pb-5
}
.indoor_food>div p{
  @apply font-semibold text-sm leading-5;
}

/*
4. indoor_maximize
 */
.indoor_maximize>div{
  @apply flex flex-col px-5 -mt-27.25
}
.indoor_maximize>div h2{
  @apply text-center font-bold text-3xl leading-8 pt-28 pb-4;
}
.indoor_maximize>div h3{
  @apply font-bold text-lg leading-6 pb-6;
}
.indoor_maximize>div h3>span{
  @apply block pb-5;
}
.indoor_maximize .body-text{
  @apply pb-12
}
.indoor_maximize>div .main-button {
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base leading-4 block m-auto text-srblue mb-14
}
</style>
