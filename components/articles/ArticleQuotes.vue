<template>
  <section class="py-16 ">
    <div class="px-5  max-w-screen-1.5lg m-auto">
      <div v-for="quote in block.quotes" class="flex flex-col
      lg:grid lg:grid-cols-4 lg:justify-items-center lg:items-center">
        <img :src="quote.image" class="object-contain m-auto pb-7.5 px-21.75">
        <p v-html="quote.quote" class="pb-6 text-2xl font-medium lg:col-span-3"></p>
        <p v-html="quote.reference" class="font-normal text-lg lg:col-span-4"></p>
      </div>
    </div>
    <div v-if="block.show_cta_button" class="boxeslink mx-auto my-17.5" @click="clickHandler">
      {{ block.quotes_cta_label }}
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

</style>
