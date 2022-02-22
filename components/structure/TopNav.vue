<template>
  <nav class="bg-srwhite  fixed w-full z-40">
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
        <li v-for="item in menuItems" :key="item.id" class="parent-item px-5 py-1 text-base inline-block focus-within:ring-0"  tabindex="0">
          <span v-if="item.child_items"   class="haschilditem">
            <NuxtLink
              :to="{name:item.slug  }">
            {{ item.title }}
          </NuxtLink>
          </span>

          <ul
            v-if="item.child_items"
            class="hidden absolute bg-srwhite transition-opacity w-56  duration-300 ease-in-out"
          >
<!--            :class="{'opacity-0' : !showChild}"-->

            <li
              v-for="child in item.child_items"
              class="py-3 text-sm px-5 border-l-4 border-srwhite  hover:border-srblue flex">
              <NuxtLink class="w-full"
                :to="{name:child.slug}">

              {{ child.title }}</NuxtLink>
            </li>
            <li

              class="py-3 text-sm px-5 border-l-4 border-srwhite  hover:border-srblue flex">
              <NuxtLink class="w-full"
                to="/news">

                News</NuxtLink>
            </li>


          </ul>
          <span v-if="!item.child_items" >
            <NuxtLink
              :to="{name:item.slug}">
            {{ item.title }}
          </NuxtLink>
          </span>

        </li>
      </ul>
      <NuxtLink class="self-center"
        to="/">
        <img
          src="~/assets/images/sally-r-logo.svg"
          alt="Take control of your air quality."
        >
      </NuxtLink>

      <div
        class="hidden md:flex w-2/5 py-3 text-srblue
        font-bold text-base  flex-wrap content-center justify-end "
      >

        <span>
           <NuxtLink
             to="/indoor-farming">
             <img src="~/assets/images/plant.svg" class="inline pr-1.5">
            Indoor Farming
          </NuxtLink>
        </span>
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
          <li v-for="item in menuItems" :key="item.id" class="parent-item px-5 py-1 text-base focus-within:ring-0" tabindex="0">
            <span v-if="item.child_items"   class="haschilditem" >
              <NuxtLink
                :to="{name:item.slug}">
                {{ item.title }}
              </NuxtLink>
            </span>


            <ul class="hidden"
              v-if="item.child_items "
            >
              <li
                v-for="child in item.child_items"
                class="py-1 text-sm">
                <NuxtLink
                  :to="{name:child.slug}">

                  {{ child.title }}</NuxtLink>
              </li>
              <li

                class="py-1 text-sm">
                <NuxtLink
                  to="/news">

                  News</NuxtLink>
              </li>

            </ul>

            <span v-if="!item.child_items" >
            <NuxtLink
              :to="{name:item.slug}">
            {{ item.title }}
          </NuxtLink>
          </span>

          </li>

          <li class="px-5 py-1 text-base">
            <NuxtLink
              to="/indoor-farming">
              Indoor Farming
            </NuxtLink>
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
  watch: {
    '$route' () {
      this.showMenu = false
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
.haschilditem a:after{
  content: url("~/assets/images/plus-menu.svg");
  margin-top: -2px;
  padding-left: 5px;
  @apply absolute
}
.parent-item:focus-within>ul{
  display: block;
}
.parent-item:focus-within{
  outline: none !important;
}
/*nav ul a{*/
/*  @apply flex flex-col items-center*/
/*}*/
/*nav ul a.current-page:after{*/
/*  @apply absolute mt-2;*/
/*  content: url("~/assets/images/anchor-footer.png");*/
/*}*/
</style>
