<template>
  <section class="article_header ">
    <div class="flex flex-col lg:flex-row">
      <div>
        <h1 v-html="block.block_title"
            class="font-bold text-12.5 leading-11
            lg:text-22.5 lg:leading-25"></h1>

          <p v-html="block.header_text" class="text-xl font-bold py-6 lg:py-12"></p>

        <NuxtLink :to="block.header_cta_link" class="cta-button">
          {{ block.header_cta_label }}
        </NuxtLink>

      </div>
      <div class="lg:pt-36">
        <img :src="block.header_image" class="lg:max-w-lg m-auto">
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
.article_header{
  @apply bg-no-repeat pt-11 md:pt-25 max-w-screen-1.5xl w-full   content-center m-auto;
  background-image:url("~/assets/images/blue-blur-2.webp"),
  url("~/assets/images/home-header.webp");
  background-position:right 90% , left 0% ;

}

.article_header>div{
  @apply  m-auto  px-5  pb-44
  lg:px-10   max-w-screen-1.5lg lg:pb-56
  ;
}

.article_header>div h1>span{
  @apply text-srorange
}
.cta-button{
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base leading-4 block  text-srblue mb-14
  hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out;
  width: fit-content;
}

.cta-button:hover:after{
  @apply pl-4 transition duration-500 ease-in-out;
  content: url("~/assets/images/white-right.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}
.cta-button:after{
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}
</style>
