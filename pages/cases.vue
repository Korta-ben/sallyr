<template>
<div class="pb-25">
  <transition name="readytotalk" appear v-if=showOverlayForm>
    <OverlayForm @popupToggle="showOverlayForm = !showOverlayForm"/>
  </transition>
  <TheLinesBackground class="linesbg"/>
  <section class="cases px-5 pb-25">
    <h2 class="font-bold text-5xl leading-13.75 text-center py-11.5">Our cases</h2>
    <div class="story-wrapper px-5 grid grid-cols-1 lg:grid-cols-2 gap-6 xl:max-w-screen-1.5lg m-auto ">
      <Case />
      <Case />
      <Case />
      <Case />
    </div>
  </section>
</div>
</template>

<script>
export default {
data(){
    return {
      showOverlayForm:false
    }
  }
}
</script>

<style>


.linesbg{
  @apply absolute left-0 right-0 m-auto overflow-hidden;
  z-index: -1;
}
.case{
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.05);
}

.cases {
  background-image: url("~/assets/images/blue-blur-2.webp");
  @apply bg-no-repeat ;
  background-position: left 0%}
</style>
