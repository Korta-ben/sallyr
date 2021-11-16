<template>
  <div class="form-overlay fixed bg-srwhite bg-opacity-90  w-full z-50 h-full  -mt-24">
    <div class=" w-138.5 rounded-tl-2xl  bg-srwhite py-11 px-8.5  mx-auto  ">

        <img @click="clickHandler" src="~/assets/images/close.svg" class="ml-auto">

      <h3 class="text-center font-bold text-xl leading-6 px-30.25">
        Glad to hear you want to know
        more about Sally R!
      </h3>
      <p class="text-center pb-8">
        Fill this form out and we will get back to you.
      </p>
      <form class="grid grid-cols-2	gap-2">
        <input name="fullname" placeholder="Full Name*" class="border text-sm px-2.5 border-srblue h-8 ">
        <input name="business" placeholder="Business" class="border text-sm px-2.5 border-srblue h-8 ">
        <input name="phone" placeholder="Phone*" class="border text-sm px-2.5 border-srblue h-8 col-span-2">
        <input name="email" placeholder="Email*" class="border text-sm  px-2.5 border-srblue h-8 col-span-2">
        <textarea name="message"  placeholder="Message..."
                  class="col-span-2 w-full border px-2.5 text-sm border-srblue"></textarea>
        <button
          class="border-2 flex flex-row justify-center  text-srblue text-base font-bold py-6 px-7.5 border-srblue col-span-2 w-36 justify-self-end">
          Send
        </button>
      </form>

    </div>
  </div>


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
.form-overlay{
  padding-top: 15% ;

}
.form-overlay>div{
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.05);
}
.form-overlay>div button:after{
  @apply pl-4 pt-0.5;
  content: url("~/assets/images/right-blue.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}
</style>
