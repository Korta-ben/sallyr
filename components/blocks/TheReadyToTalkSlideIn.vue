<template>
  <section class="home_ready_to_talk w-full order-first">

    <div>
      <h2 >Ready to talk?</h2>
      <div>
        <span>
          <input type="radio" name="talk" id="amazed" @click="clickHandler">
          <label for="amazed" >I’m amazed! Call me!</label>
        </span>
        <span>
          <input type="radio" name="talk" id="unsure">
          <label for="unsure">Not sure but call me anyway!</label>
        </span>
      </div>
      <div class="sub-button-wrapper pt-5" >
        <button  class="sub-button">Or keep scrolling.</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    clickHandler(e) {
      this.$emit("popupToggle");
    }
  }

}
</script>

<style>


/*
1. home_ready_to_talk
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
  @apply  place-self-center pr-6 animate-bounce cursor-default;
  content: url("~/assets/images/lb-down.png");
}
</style>
