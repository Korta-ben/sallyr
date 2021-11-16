<template>
  <div class="form-overlay fixed bg-srwhite bg-opacity-70  w-full z-50 h-full  -mt-24">
    <div class="w-1/2  h-60 bg-srwhite    mx-auto border-2 border-srblue">
      Hello.
      <span @click="clickHandler">
        close
      </span>
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
</style>
