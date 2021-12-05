<template>
  <div class="form-overlay fixed bg-srwhite  px-5  w-full z-50 h-full  ">
    <img @click="clickHandler" src="~/assets/images/close.svg" class="ml-auto mt-4 cursor-pointer">
    <h3 class="text-center text-2xl xl:mr-48 font-bold text-xl pb-4 leading-7 pt-14 lg:pt-56  text-srblue
md:text-22.5 md:leading-25">
      Let’s get in touch!
    </h3>
    <div class=" m-auto w-full sm:w-138.5   bg-srwhite py-4 md:py-11 px-8.5 ">
      <form class="grid grid-cols-2	gap-x-16" method="POST" @submit.prevent="sendEmail">
        <input name="fullname" placeholder="Full Name*" required
              v-model="fullname" class="border-b text-sm pr-2.5 pb-4 mb-4 border-srskyblue h-8 ">
        <input name="business" placeholder="Business"
             v-model="business"  class="border-b  text-sm pr-2.5 pb-4  mb-4  border-srskyblue h-8 ">
        <input name="phone" placeholder="Phone*" required
            v-model="phone"   class="border-b  text-sm pr-2.5 mb-4 pb-4  border-srskyblue h-8 ">
        <input name="email" placeholder="Email*"  required
             v-model="email"  class="border-b  text-sm  pr-2.5 mb-4 pb-4  border-srskyblue h-8 ">
        <span v-if="currentRouteName === 'indoor-farming'"></span>
        <textarea v-else  name="message"  placeholder="Message..."
               v-model="message"
                  class="col-span-2 w-full border-0 border-b pr-2.5 mb-8 text-sm border-srskyblue"></textarea>
        <button

          class="border-2 flex flex-row justify-center
          text-srblue text-base font-bold py-4 px-7.5 border-srblue
          col-span-2 w-36 justify-self-end mt-1 hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out;">
          Send
        </button>
      </form>

    </div>
  </div>


</template>

<script>
// import postmark from "postmark"
export default {
  data(){
    return {
      fullname:"",
      business:"",
      phone:"",
      email:"",
      message:""
    }
  },
  methods: {
    clickHandler(e) {
      this.$emit("popupToggle");
    },

    async sendEmail() {
      const nodemailer = require("nodemailer");

      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      // let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.postmarkapp.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "d1f5cb47-3071-41be-a8d2-887be1b0f663", // generated ethereal user
          pass: "d1f5cb47-3071-41be-a8d2-887be1b0f663", // generated ethereal password
        },
        header:"X-PM-Message-Stream: outbound"
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Fred Foo " <hello@sr-stage.kortaben.work>', // sender address
        to: "ashish@kortaben.se, ashish@kortaben.se", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
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
