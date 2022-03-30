<template>
  <section class="bg-srblue py-24" id="newsletter">
    <div class="px-5 max-w-2xl m-auto">
      <h2 v-html="block.block_title"
      class="text-srwhite font-bold text-4xl lg:text-12.5 text-center leading-10 pb-5 lg:leading-11"></h2>
      <p v-html="block.newsletter_subtext"
         class="text-srwhite font-bold text-xl lg:text-2xl text-center"></p>
      <!--    <script charset="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/v2.js"></script>-->
      <div class="max-w-4xl m-auto">
        <script>
          hbspt.forms.create({
            region: "eu1",
            portalId: "25028945",
            formId: "ba72938e-1259-4322-ace9-3db028331e78"
          });
        </script>
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

}
</script>

<style >

</style>
