<template>
  <div class="cardForm">
    <form class="grid  grid-cols-1	sm:grid-cols-4 sm:gap-x-16" method="POST" @submit.prevent="sendEmail">
      <div class="grid grid-cols-2 gap-x-16 col-span-1 sm:col-span-3">
        <input type="text" v-model="fullname" placeholder="Full Name*" name="fullname"
               class="col-span-2 sm:col-span-1 border-0 border-b text-sm pr-2.5 pb-4 mb-4 border-srskyblue h-8 pl-0 focus:ring-0">
        <input type="text" v-model="business" placeholder="Business" name="business"
               class="col-span-2 sm:col-span-1 border-0 border-b  text-sm pr-2.5 pb-4 mb-4 border-srskyblue h-8 pl-0 focus:ring-0">

        <input type="text" v-model="phone" placeholder="Phone Number*" name="phone"
               class="col-span-2 sm:col-span-1 border-0 border-b text-sm pr-2.5 pb-4 mb-4 border-srskyblue h-8 pl-0 focus:ring-0">
        <input type="text" v-model="sender" placeholder="E-mail*" name="email"
               class="col-span-2 sm:col-span-1 border-0 border-b text-sm pr-2.5 pb-4 mb-4 border-srskyblue h-8 pl-0 focus:ring-0">
      </div>


      <div class="  flex flex-col self-center pt-2 items-center">
        <button v-if="messageSend === false"
           class="sendMessage w-33.75 my-auto self-end justify-center  py-4  border-srblue  border-2 text-srblue text-base
        font-semibold leading-4 flex flex-row text-center hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out">Send </button>
        <div v-if="messageSend" class="messageStatus">
          Your message
          has been sent!
        </div>

      </div>

    </form>
  </div>
</template>

<script>


export default {
  data(){
    return {
      messageSend:false,
      fullname:"",
      business:"",
      phone:"",
      sender:"",
      body:"",
      from:"hello@sr-stage.kortaben.work",
    }
  },

  methods:{
    async sendEmail() {
      // this.submitting = true
      // this.$ga.event('submit', 'form', this.$i18n.locale)
      // this.error = false
      try {
        console.log(
          "fullname: " + this.fullname,
          "business: " + this.business,
          "phone: " + this.phone,
          "sender: " + this.sender)
        await this.$axios.$post('/mailer/send', {
          fullname:this.fullname,
          business:this.business,
          phone:this.phone,
          sender:this.sender,
          body:this.body,
          subject: "Enquiry from pricing page"
        })
        // this.submitting = false
        // this.isSubmitted = true
        await new Promise(resolve => setTimeout(resolve, 2500))
        this.messageSend = true
        // this.$emit('close')
      } catch (e) {
        // this.submitting = false
        // this.error = true
        console.error(e)
      }
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
