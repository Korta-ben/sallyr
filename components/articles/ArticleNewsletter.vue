<template>
  <section class="bg-srblue py-24" id="newsletter">
    <div class="px-5 max-w-2xl m-auto">
      <h2 v-html="block.block_title"
      class="text-srwhite font-bold text-4xl lg:text-12.5 text-center leading-10 pb-5 lg:leading-11"></h2>
      <p v-html="block.newsletter_subtext"
         class="text-srwhite font-bold text-xl lg:text-2xl text-center"></p>
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

}
</script>

<style >

</style>
