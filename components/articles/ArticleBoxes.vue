<template>
  <section class="bg-srlightestblue pt-14 pb-23.25 px-5
          lg:pt-23.25 lg:pb-30.25">
    <div class=" m-auto  px-5
  lg:px-10   max-w-screen-1.5lg ">
      <p v-html="block.block_title" class="font-bold text-xl pb-12.75 lg:pb-25"></p>
      <div v-for="box in block.boxes"
        class="border-2 border-srblue bg-srwhite pt-9 px-5 lg:px-15 pb-12.75 flex flex-col mb-10 lg:mb-20
          lg:flex-row lg:gap-x-20">
        <h2 class="font-bold text-3xl text-srblue pb-5 lg:w-1/3" v-html="box.box_heading">
        </h2>
        <p class="text-lg font-normal lg:w-2/3" v-html="box.box_sub_text">
        </p>
      </div>
      <div class="boxeslink mx-auto mt-3.5"
           @click="clickHandler">
        {{ block.boxes_cta_label }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    block: {
      type: [Object, Array]
    },
  },

  methods: {
    clickHandler(e) {
      this.$emit("popupToggle");
    }
  }

}
</script>

<style >
.boxeslink{
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base leading-4 block  text-srblue
  hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out;
  width: fit-content;
  cursor: pointer;
}

.boxeslink:hover:after{
  @apply pl-4 transition duration-500 ease-in-out;
  content: url("~/assets/images/white-right.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}
.boxeslink:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}
</style>
