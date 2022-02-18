<template>
<div class="flex flex-col items-center">
  <img :src="member.photo" class="w-60 filter grayscale hover:filter-none transition-all pb-4">
  <h3 v-html="member.name" class="text-srblue font-bold text-center leading-6"></h3>
  <p v-html="member.position" class="text-center font-semibold"></p>
</div>
</template>

<script>
export default {
  props: {
    member: {
      type: [Object, Array]
    },
  },
}
</script>

<style >

</style>
