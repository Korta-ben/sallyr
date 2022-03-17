<template>
  <div class="form-overlay fixed bg-srwhite  px-5  w-full z-50 h-full  ">
    <img @click="clickHandler" src="~/assets/images/close.svg" class="ml-auto mt-4 cursor-pointer">
    <h3 class="text-center text-2xl xl:mr-48 font-bold text-xl pb-4 leading-7 pt-4  text-srblue
md:text-22.5 md:leading-25">
      Let’s get in touch!
    </h3>
<!--    <div class=" m-auto w-full sm:w-138.5   bg-srwhite py-4 md:py-11 px-8.5 ">-->
<!--      <form class="grid grid-cols-2	gap-x-16" method="POST" @submit.prevent="sendEmail">-->
<!--        <input name="fullname" placeholder="Full Name*" required-->
<!--              v-model="fullname" class="border-b text-sm pr-2.5 pb-4 mb-4 border-srskyblue h-8 ">-->
<!--        <input name="business" placeholder="Business"-->
<!--             v-model="business"  class="border-b  text-sm pr-2.5 pb-4  mb-4  border-srskyblue h-8 ">-->
<!--        <input name="phone" placeholder="Phone*" required-->
<!--            v-model="phone"   class="border-b  text-sm pr-2.5 mb-4 pb-4  border-srskyblue h-8 ">-->
<!--        <input name="sender" placeholder="sender*"  required-->
<!--             v-model="sender"  class="border-b  text-sm  pr-2.5 mb-4 pb-4  border-srskyblue h-8 ">-->
<!--        <span v-if="currentRouteName === 'indoor-farming'"></span>-->
<!--        <textarea v-else  name="message"  placeholder="Message..."-->
<!--               v-model="body"-->
<!--                  class="col-span-2 w-full border-0 border-b pr-2.5 mb-8 text-sm border-srskyblue"></textarea>-->
<!--        <button-->

<!--          class="border-2 flex flex-row justify-center-->
<!--          text-srblue text-base font-bold py-4 px-7.5 border-srblue-->
<!--          col-span-2 w-36 justify-self-end mt-1 hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out;">-->
<!--          Send-->
<!--        </button>-->
<!--      </form>-->

<!--    </div>-->

<!--    <script charset="utf-8" type="text/javascript" src="//js-eu1.hsforms.net/forms/v2.js"></script>-->
    <div class="max-w-4xl m-auto">
      <script>
        hbspt.forms.create({
          region: "eu1",
          portalId: "25028945",
          formId: "4c813ada-7b94-47f6-997c-135d44cb77b9"
        });
      </script>
    </div>

  </div>


</template>

<script>
import axios from "axios";

// import postmark from "postmark"
export default {

  data(){
    return {
      fullname:"",
      business:"",
      phone:"",
      from:"hello@sr-stage.kortaben.work",
      body:" ",
      sender:""
    }
  },
  methods: {
    clickHandler(e) {
      this.$emit("popupToggle");
    },

    async sendEmail() {
      // this.submitting = true
      // this.$ga.event('submit', 'form', this.$i18n.locale)
      // this.error = false
      try {
        console.log(
          "fullname: " + this.fullname,
          "business: " + this.business,
          "phone: " + this.phone,
          "sender: " + this.sender,
          "body: " + this.body)
        await this.$axios.$post('/mailer/send', {
          fullname:this.fullname,
          business:this.business,
          phone:this.phone,
          body:this.body,
          sender:this.sender,
          subject: "Message from contact form"
        })
        // this.submitting = false
        // this.isSubmitted = true
        await new Promise(resolve => setTimeout(resolve, 2500))
        this.clickHandler();
        // this.$emit('close')
      } catch (e) {
        // this.submitting = false
        // this.error = true
        console.error(e)
      }
    }

  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  }
}
</script>

<style>
.form-overlay{
  /*padding-top: 15% ;*/
}
/*.form-overlay>div{*/
/*  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.05);*/
/*}*/

.form-overlay>div button:hover:after{
  @apply pl-4 transition duration-500 ease-in-out;
  content: url("~/assets/images/white-right.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}
.form-overlay>div button:after{
  @apply pl-4 pt-0.5;
  content: url("~/assets/images/right-blue.svg");
  /*-webkit-mask-image: url("~/assets/images/right-blue.svg");*/
}

.form-overlay textarea {
  padding-left: 0px;
}

</style>
