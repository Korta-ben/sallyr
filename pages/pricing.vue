<template>
  <div>
    <transition name="readytotalk" appear v-if=showOverlayForm>
      <OverlayForm class="-mt-24" @popupToggle="showOverlayForm = !showOverlayForm"/>
    </transition>
    <TheLinesBackground class="linesbg"/>
    <UniversalCard v-for="card in cards" :key="card.index" :card="card"></UniversalCard>
    <ThePriceComponents />
    <TheConfigurator/>
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
    cards() { return  this.$store.getters.getThePricing.acf.universal_text_box }
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
/*1 pricing_hero */
.pricing_hero>div{
  @apply flex flex-col items-center px-5
  lg:pb-25
}
/*.pricing_hero>div:after{*/
/*  content: url("~/assets/images/pricing-line.svg");*/
/*  margin-top: 282px;*/
/*  @apply absolute hidden lg:block -ml-52;*/
/*}*/
.pricing_hero{
  @apply bg-no-repeat md:pt-25 max-w-screen-1.5xl w-full   content-center m-auto;
  background-image:url("~/assets/images/pricing-small-blur-header.png"),
  url("~/assets/images/price-page-big-blur.png");
  background-position:right 90% , left 60%;
  background-size: auto, 39% auto;


}

.pricing_hero>div .header-image{
  @apply  w-40 -mt-4
  md:w-80 lg:-mt-6
}
.pricing_hero>div h2{
  @apply order-first  font-bold  z-10 text-srblue text-6.5xl leading-11 text-center pt-16 pb-21.75
  lg:max-w-5xl lg:pr-36  lg:text-22.5 lg:leading-25 lg:text-left lg:py-0

}

.pricing_hero>div h3{
  @apply text-srblack font-bold text-3xl leading-8
  lg:text-12.5  lg:leading-13.75 lg:pl-50 lg:-mt-12
}
.pricing_hero>div > div.body-text{
  @apply px-5 w-full pt-4
  lg:max-w-2xl lg:pl-64;
}
.pricing_hero>div .sub-button-wrapper{
  @apply self-end pt-12.75
  lg:self-center lg:pl-67.5
}
.pricing_hero>div .sub-button-wrapper button{
  @apply text-base font-bold text-srskyblue flex flex-col items-center
}
.pricing_hero>div .sub-button-wrapper .sub-button:after {
  @apply  place-self-center pr-6 animate-bounce cursor-default;
  content: url("~/assets/images/lb-down.png");
}


.price-component{
  background-image: linear-gradient(180deg, #ffffff00 5%, #F1F2F8 5%, #F1F2F8 80%, #ffffff00 80% );

}
.price-component>div{
  @apply px-5 m-auto
  lg:max-w-screen-1.5lg lg:grid lg:grid-cols-2;
}
.price-component>div .body-text{
 @apply xg:ml-20 z-10 lg:w-96
}
.price-component>div h2{
  @apply text-3xl text-srblue lg:text-12.5 lg:leading-13.75  lg:font-bold lg:pb-4
}
.price-component>div .highlighted{
  @apply text-srblue  text-lg leading-6 lg:text-xl lg:leading-7
}
.price-component>div p{
  @apply pb-3
}
.price-component>div .price-cards{
  @apply flex flex-col gap-y-5
}
.price-component>div .card{
@apply bg-srwhite px-9.5 py-12 rounded-tl-xl grid grid-cols-2 lg:max-w-pcards lg:-ml-45.5 lg:pl-30.25 xl:w-lgx2;
  background: #FFFFFF;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.05);
}


.price-component>div .card h3{
  @apply text-2xl  pb-5 col-span-2  md:text-3xl md:leading-8
}

.price-component>div .card ul{
  @apply col-span-2 sm:col-span-1
}
.price-component>div .card .cost{
  @apply flex flex-row  sm:justify-end w-full col-span-2 sm:col-span-1 justify-between
}
.price-component>div .card .cost p{
  @apply  pt-4 text-xl font-bold  text-srblue justify-self-start sm:justify-self-end text-right
}
.price-component>div .card .cost:after{
  content: url("~/assets/images/right-blue.svg");
  @apply  self-end sm:pl-4 pb-4;

}
.price-component>div .card:last-child .cost:after{
  content: url("~/assets/images/right-blue.svg");
  @apply hidden self-center pl-4 pb-4;

}

.price-component>div .card:last-child  .contact:after{
  content: url("~/assets/images/right-blue.svg");
  @apply  self-center pl-4 ;
}
.price-component>div .card:last-child  .contact:hover:after{
  @apply pl-4 transition duration-500 ease-in-out;
  content: url("~/assets/images/white-right.svg");
  @apply  self-center pl-4 ;
}

.price-component>div .cardForm{
  @apply bg-srwhite px-9.5 py-12 rounded-tl-xl  lg:max-w-pcards lg:-ml-45.5 lg:pl-30.25 xl:w-lgx2;
  background: #FFFFFF;
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.05);
}
.submit{
  @apply self-center mr-17.5;
  width: fit-content;
}
.submit:after{
  content: url("~/assets/images/right-blue.svg");
  @apply  self-center px-4 ;
}
/*a.contact:hover:after {*/
/*  @apply pl-4 transition duration-500 ease-in-out;*/
/*  content: url("~/assets/images/white-right.svg");*/
/*}*/


.configurator p{
  @apply font-bold text-xl leading-7 py-8
}
.configurator a:after {
  @apply pl-4 pr-10;
  content: url("~/assets/images/right-blue.svg");
}
.configurator a:hover:after {
  @apply pl-4 pr-10 transition duration-500 ease-in-out;;
  content: url("~/assets/images/white-right.svg");
}

.configurator input[type=radio]:checked + label{
  @apply bg-srblue text-srwhite opacity-100;
}


/*transation*/
.result-enter-active, .result-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.result-enter, .result-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-50%);
  opacity: 0;
}

.calculate{
  @apply pb-5;
padding-top: 22.5px;
}
</style>
