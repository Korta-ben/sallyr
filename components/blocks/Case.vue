<template>
  <div class="case flex flex-col bg-srwhite rounded-tl-2xl
        md:flex-row md:flex-row-reverse">
    <div style="background-image:url('https://apisr.kortaben.work/wp-content/uploads/2021/11/story-placeholder.png')"
         class="rounded-tl-2xl h-40 bg-no-repeat bg-cover bg-center	w-full
         md:h-auto   md:rounded-none md:w-45.5 lg:w-1/3">
<!--      <img src="~/assets/images/story-placeholder.png"-->
<!--           class="object-cover rounded-tl-2xl 	w-full md:rounded-0  md:w-45.5">-->
    </div>
    <div class="p-11.5 lg:w-2/3">
      <h3 class="font-bold pb-4 text-xl leading-6 text-srblue ">
        Sally R signs framework agreement with Unibail-Rodamco-Westfield Nordic
      </h3>
      <p class="pb-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div class="font-bold read-more text-base leading-4 text-srblue flex p-2">
        Read more
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style >
 .read-more:after{
   @apply pl-2;
   content:url("~/assets/images/right-blue.svg");
 }
</style>
