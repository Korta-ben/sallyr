<template>
<div class="flex flex-col items-center">
  <img :src="member.photo" class="w-60 lg:w-56">
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

<style scoped>

</style>
