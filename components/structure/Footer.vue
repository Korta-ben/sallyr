<template>
  <footer class="bg-srblue w-full px-5  ">
    <div class="py-20 xl:max-w-screen-1.5lg  m-auto px-5 lg:px-10 xg:px-28 md:flex md:justify-between md:flex-wrap ">
      <div class="pb-12 w-52">
        <h3>
          Products
        </h3>
        <ul class="font-normal">
          <li>
            <a href="/indoor-farming" >Sally R - for Indoor farming</a>
            </li>
          <li>
            <a href="/product" >
            Sally R - for Real estate
          </a></li>
          <li>
            <a href="/pricing" >
            Pricing
          </a></li>
        </ul>
      </div>

      <div class="pb-12 w-52 flex flex-col items-start md:items-center">
        <h3 class="md:pl-7.5">
          Sally R
        </h3>
        <ul class="font-normal">
          <li>
            <a href="/who-are-we">
            About </a></li>
          <li>
            <a href="/news">
            News </a></li>
        </ul>
      </div>

      <div class="pb-12 w-52">
        <h3 >
          Contact
        </h3>
        <div @click="clickHandler"
             class="contact-footer cursor-pointer font-normal text-srwhite text-base flex flex-row justify-between content-center">
        Contact us</div>

        <ul class="font-normal social-icons pt-11 flex flex-row gap-x-4">
          <li>
            <a href="https://www.facebook.com/SallyRAir" target="_blank">
              <img src="~/assets/images/Group 81.svg" >
            </a>

          </li>

          <li>
            <a href="https://www.linkedin.com/company/sally-r/" target="_blank">
              <img src="~/assets/images/Group 84.svg" >
            </a>

          </li>
        </ul>
      </div>
<!--      <div class=" hidden md:block absolute float-right top-24 overflow-hidden w-full max-w-7xl">-->
<!--        -->
<!--      </div>-->
      <div class="w-full flex flex-col">
        <NuxtLink to="/">
        <img
          src="~/assets/images/logo-white-sally-r.svg"
          class="m-auto pb-10"
        >
        </NuxtLink>
        <div
          class="w-56 m-auto bg-srwhite pt-0.5 rounded-sm"
        />
<!--        <img src="~/assets/images/footer-dooted.webp" class="the-footer-bg">-->
      </div>


    </div>

  </footer>
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

<style >
.contact-footer:after{
  @apply pl-4;
  content: url("~/assets/images/white-right.svg");
}
.social-icons li img:hover{
  @apply opacity-75
}
</style>
