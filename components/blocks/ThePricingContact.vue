<template>
  <div class="cardForm">
    <form class="grid grid-cols-3	gap-x-16">
      <input type="text" placeholder="Full Name*" name="name"
             class="border-0 border-b text-sm pr-2.5 pb-4 mb-4 border-srskyblue h-8 pl-0">
      <input type="text" placeholder="Business" name="business"
             class="border-0 border-b text-sm pr-2.5 pb-4 mb-4 border-srskyblue h-8 pl-0">
      <div class="row-span-3 flex flex-col self-center pt-2">
        <a v-if="!messageSend" @click="messageSend = !messageSend"
          class="sendMessage w-33.75 my-auto  justify-center  py-4  border-srblue  border-2 text-srblue text-base
        font-semibold leading-4 flex flex-row text-center hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out">send </a>
        <div v-if="messageSend" class="messageStatus">
          Your message
          has been sent!
        </div>

      </div>
      <input type="text" placeholder="Phone Number*" name="phone"
             class="border-0 border-b text-sm pr-2.5 pb-4 mb-4 border-srskyblue h-8 pl-0">
      <input type="text" placeholder="E-mail*" name="email"
             class="border-0 border-b text-sm pr-2.5 pb-4 mb-4 border-srskyblue h-8 pl-0">

    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      messageSend:false
    }
  }

}
</script>

<style >
.sendMessage:after {
  @apply pl-4;
  content: url("~/assets/images/right-blue.svg");
}
.sendMessage:hover:after {
  @apply pl-4 transition duration-500 ease-in-out;
  content: url("~/assets/images/white-right.svg");
}
.sendMessage{
  @apply hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out;
}
.messageStatus{
  @apply text-srgreen text-base  leading-4 font-bold text-center flex flex-col -mt-3
}
.messageStatus:before{
  @apply pb-1.5;
  content: url("~/assets/images/checkmark-outline.svg");
}
</style>
