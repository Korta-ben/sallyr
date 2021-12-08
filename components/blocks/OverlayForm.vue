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
        <input name="to" placeholder="Email*"  required
             v-model="to"  class="border-b  text-sm  pr-2.5 mb-4 pb-4  border-srskyblue h-8 ">
        <span v-if="currentRouteName === 'indoor-farming'"></span>
        <textarea v-else  name="message"  placeholder="Message..."
               v-model="body"
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
import axios from "axios";

// import postmark from "postmark"
export default {
  data(){
    return {
      fullname:"",
      business:"",
      phone:"",
      from:"hello@sr-stage.kortaben.work",
      to:"",
      body:""
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
        console.log("starting submission")
        await this.$axios.$post('/', {
          fullname:this.fullname,
          business:this.business,
          phone:this.phone,
          to:this.to,
          from:this.from,
          body:this.body
        })

        // this.submitting = false
        // this.isSubmitted = true
        await new Promise(resolve => setTimeout(resolve, 2500))
        console.log("sent to middleware")
        // this.$emit('close')
      } catch (e) {
        // this.submitting = false
        // this.error = true
        console.error(e)
      }
    }
    /* sendEmail() {*/

    /*  try{*/
    /*    console.log('email prepared')*/
    /*      // this.$mail.send({*/
    /*      //   from: 'hello@sr-stage.kortaben.work',*/
    /*      //   subject: 'Message from ' + this.fullname,*/
    /*      //   text: `Fullname:  + @{this.fullname} +*/
    /*      //     Business:  + @{}this.business +*/
    /*      //     Phone:  + @{this.phone} +*/
    /*      //     email:  + @{this.email} +*/
    /*      //     message:  + @{this.message}`*/
    /*      // })*/

    /*    // this.$mail.send({*/
    /*    //    bcc : this.email ,*/
    /*    //   from: 'hello@sr-stage.kortaben.work',*/
    /*    //   subject: 'message title',*/
    /*    //   text: 'this is body text'*/
    /*    // })*/


    /*   // await axios.post('/mail/send', {*/
    /*   //    config: { to : this.email  },*/
    /*   //    from: 'ashish aryal',*/
    /*   //    subject: 'Incredible',*/
    /*   //    text: 'This is an incredible test message',*/
    //    //  })
    //
    //     // this.$mail.send({
    //     //   from: 'John Doe',
    //     //   subject: 'Incredible',
    //     //   text: 'This is an incredible test message',
    //     //   to: this.email,
    //     // })
    //
    //
    //
    //
    //
    //
    //     console.log("email sent to " + this.email)
    //   }catch(e){
    //     console.log(e)
    //   }
    //
    //
    //   // await this.$axios.$post('/mail/send', {
    //   //   config: { to: this.email },
    //   //   from: 'John Doe',
    //   //   subject: 'Incredible',
    //   //   text: 'This is an incredible test message',
    //   // })
    // }
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
