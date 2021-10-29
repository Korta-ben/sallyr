<template>
  <nav class="bg-srwhite  fixed w-full">
    <div class="py-8 md:py-5 px-5  flex justify-between max-w-screen-1.5lg  m-auto">
      <ul
        class="w-2/5
        hidden
        md:block
        py-3
        text-srblue
        font-bold
         justify-between"
      >
        <li v-for="item in menuItems" :key="item.id" class="px-5 py-1 text-base inline-block" >
          <span v-if="item.child_items"  v-html="item.title" @click="showChild = !showChild"></span>
          <ul
            v-if="item.child_items"
            :class="{'opacity-0' : !showChild}"
            class="absolute bg-srwhite transition-opacity w-56  duration-300 ease-in-out"
          >
            <li
              v-for="child in item.child_items"
              class="py-3 text-sm px-5 border-l-4 border-srwhite  hover:border-srblue">
              {{ child.title }}
            </li>
          </ul>
          <span v-if="!item.child_items" v-html="item.title"></span>

        </li>
      </ul>
      <img
        src="~/assets/images/sally-r-logo.svg"
        alt="Take control of your air quality."
      >
      <div
        class="hidden md:flex w-2/5 py-3 text-srblue
        font-bold text-base  flex-wrap content-center justify-end "
      >
        <img src="~/assets/images/plant.svg" class="inline pr-1.5">
        <span>Indoor Farming</span>
      </div>
      <div class="md:hidden flex flex-col gap-y-1" @click="showMenu = !showMenu">
        <div
          :class="{'opacity-0' : showMenu}"
          class="pt-0.5 bg-srblue w-6 relative transition-opacity  duration-300 ease-in-out"
        />
        <div
          class="pt-0.5 bg-srblue w-6 relative  ease-in-out  duration-300 "
          :class="{'rotate-45 top-1.5' : showMenu}"
        />
        <div
          class="pt-0.5 bg-srblue w-6 relative ease-in-out duration-300 "
          :class="{'-rotate-45' : showMenu}"
        />
        <div
          :class="{'opacity-0' : showMenu}"
          class="pt-0.5 bg-srblue w-6 relative transition-opacity  duration-300 ease-in-out"
        />
      </div>
      <transition name="menu">
        <ul
          v-if="showMenu"
          class="absolute
        md:hidden
        right-0
        text-right
        top-16
        right-4
        py-3
        bg-srwhite
        text-srblue
        font-bold"
        >
          <li class="px-5 py-1 text-base">
            <span @click="showChild = !showChild">Menu</span>
            <ul v-if="showChild">
              <li class="py-1 text-sm">
                Team
              </li>
              <li class="py-1 text-sm">
                Cases
              </li>
              <li class="py-1 text-sm">
                News
              </li>
            </ul>
          </li>
          <li class="px-5 py-1 text-base">
            Product
          </li>
          <li class="px-5 py-1 text-base">
            Pricing
          </li>
          <li class="px-5 py-1 text-base">
            Indoor Farming
          </li>
        </ul>
      </transition>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      showMenu: false,
      showChild: false,
    }
  },
  computed: {
    menuItems(){ return this.$store.getters.getTopMenu }
  }
}
</script>

<style scoped>
.menu-enter-active {
  transition: all .3s ease;
}
.menu-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.menu-enter, .menu-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
