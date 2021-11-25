<template>
  <div class="form-overlay fixed bg-srwhite  px-5  w-full z-50 h-full  -mt-24">
    <img @click="clickHandler" src="~/assets/images/close.svg" class="ml-auto mt-4">
    <h3 class="text-center text-2xl xl:mr-48 font-bold text-xl pb-4 leading-7 pt-14 lg:pt-56  text-srblue
md:text-22.5 md:leading-25">
      Let’s get in touch!
    </h3>
    <div class=" m-auto w-full sm:w-138.5   bg-srwhite py-4 md:py-11 px-8.5 ">
      <form class="grid grid-cols-2	gap-x-16">
        <input name="fullname" placeholder="Full Name*" class="border-b text-sm pr-2.5 pb-4 mb-4 border-srskyblue h-8 ">
        <input name="business" placeholder="Business" class="border-b  text-sm pr-2.5 pb-4  mb-4  border-srskyblue h-8 ">
        <input name="phone" placeholder="Phone*" class="border-b  text-sm pr-2.5 mb-4 pb-4  border-srskyblue h-8 ">
        <input name="email" placeholder="Email*" class="border-b  text-sm  pr-2.5 mb-4 pb-4  border-srskyblue h-8 ">
        <textarea name="message"  placeholder="Message..."
                  class="col-span-2 w-full border-0 border-b pr-2.5 mb-8 text-sm border-srskyblue"></textarea>
        <button
          class="border-2 flex flex-row justify-center
          text-srblue text-base font-bold py-4 px-7.5 border-srblue
          col-span-2 w-36 justify-self-end mt-1 hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out;">
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
  /*padding-top: 15% ;*/
}
/*.form-overlay>div{*/
/*  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.05);*/
/*}*/

.form-overlay>div button:hover:after{
  @apply pl-4 transition duration-500 ease-in-out;
  content: url("~/assets/images/white-right.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}
.form-overlay>div button:after{
  @apply pl-4 pt-0.5;
  content: url("~/assets/images/right-blue.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}

.form-overlay textarea {
  padding-left: 0px;
}
</style>
