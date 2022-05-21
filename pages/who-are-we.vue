<template>
  <div>
    <transition name="readytotalk" appear v-if=showOverlayForm>
      <OverlayForm class="-mt-24" @popupToggle="showOverlayForm = !showOverlayForm"/>
    </transition>
    <TheLinesBackground class="linesbg"/>
    <section class=" px-5 teams xl:max-w-screen-1.5lg m-auto">
      <h2 class="text-center font-bold text-3xl leading-8 pb-9.5
    md:pt-25 md:pb-16 md:text-12.5 md:leading-13.75">
        Who are we?
      </h2>
      <div class="grid grid-cols-2 gap-x-4 gap-y-10
        sm:grid-cols-3 lg:grid-cols-4 max-w-5xl m-auto ">
        <TeamsBox v-for="team in teams" :key="team.index" :member="team"></TeamsBox>
      </div>

    </section>
<!--    <UniversalCard class="team-wwu md:max-w-md w-full m-auto" v-for="card in cards" :key="card.index"-->
<!--                   :card="card"></UniversalCard>-->
    <section class="team-wwu md:max-w-md w-full m-auto  " >
      <div >
        <h3  v-html="cards[0].sub_heading"></h3>
        <div class="main-button-wrapper" >
          <a class="main-button nuxt-link-exact-active current-page"
          @click="showOverlayForm = !showOverlayForm" v-html="cards[0].button_text">
        </a>
        </div>
        <!----> <!---->
      </div>
    </section>
    <section class=" px-5 teams xl:max-w-screen-1.5lg m-auto">
      <div class="px-8">
        <style type="text/css">@import url("https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");@import url("https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");@import url("https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");@import url("https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i");@import url("https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");.embed-form-super-wrapper .hs-form {max-width:100%;margin: auto;}.embed-form-super-wrapper .hs-form input[type=date],.embed-form-super-wrapper .hs-form input[type=datetime], .embed-form-super-wrapper .hs-form input[type=datetime-local], .embed-form-super-wrapper .hs-form input[type=email], .embed-form-super-wrapper .hs-form input[type=month], .embed-form-super-wrapper .hs-form input[type=number], .embed-form-super-wrapper .hs-form input[type=password], .embed-form-super-wrapper .hs-form input[type=range], .embed-form-super-wrapper .hs-form input[type=search], .embed-form-super-wrapper .hs-form input[type=tel], .embed-form-super-wrapper .hs-form input[type=text], .embed-form-super-wrapper .hs-form input[type=time], .embed-form-super-wrapper .hs-form input[type=url], .embed-form-super-wrapper .hs-form input[type=week], .embed-form-super-wrapper .hs-form fieldset.form-columns-1 textarea.hs-input, .embed-form-super-wrapper .hs-form fieldset.form-columns-1 .input select, .embed-form-super-wrapper .hs-form .input textarea, .embed-form-super-wrapper .hs-form .hs-input textarea, .embed-form-super-wrapper .hs-form textarea, .embed-form-super-wrapper .hs-form .input select, .embed-form-super-wrapper .hs-form .hs-input select, .embed-form-super-wrapper .hs-form select  {border: 1px solid #d6d6d6;width: 100%;padding: 9px 14px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}.embed-form-super-wrapper .hs-form ul {list-style-type: none;margin-left: 0; padding-left: 0;}.embed-form-super-wrapper .hs-form fieldset.form-columns-1 .hs-input{width: 100% !important;}.embed-form-super-wrapper .hs-form fieldset.form-columns-1 input[type="checkbox"], .embed-form-super-wrapper .hs-form fieldset.form-columns-1 input[type="radio"] {width: auto !important;margin-right: 15px !important;margin-top: -2px;}.embed-form-super-wrapper .hs-form label {color: #606060;}.embed-form-super-wrapper .hs-form fieldset {max-width: 100% !important;}.embed-form-super-wrapper .hs-form fieldset.form-columns-3 .hs-form-field {width: 33.333% !important;}.embed-form-super-wrapper .hs-form fieldset {margin-bottom: 0 !important;}.embed-form-super-wrapper .hs-form .hs-form-field {margin-bottom: 15px;}.embed-form-super-wrapper .hs-form label {font-weight: normal;letter-spacing: 1px;}.embed-form-super-wrapper .hs-form ul li {margin-top: 4px;margin-bottom: 4px !important;float: left;width: 100%;}.embed-form-super-wrapper .hs-form fieldset textarea.hs-input {min-height: 200px;}.embed-form-super-wrapper .hs-form select{-webkit-appearance: none;-moz-appearance: none;appearance: none;padding: 5px;border-radius: 0;} .embed-form-super-wrapper .hs-form input[type=reset], .embed-form-super-wrapper .hs-form input[type=submit] {background:#606060;color: white;padding: 7px 45px;font-weight: bold;font-size: 20px;text-transform: uppercase;letter-spacing: 2px;margin-top: 15px;}.embed-form-super-wrapper .hs-form fieldset.form-columns-2 .hs-form-field { width: 50%; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;}.embed-form-super-wrapper .hs-form fieldset.form-columns-3 .hs-form-field, .embed-form-super-wrapper .hs-form fieldset.form-columns-2 .hs-form-field {float: left;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.embed-form-super-wrapper .hs-form fieldset .hs-form-field {padding: 0 10px;-moz-box-sizing: border-box;-webkit-box-sizing: border-box; box-sizing: border-box;}.hs_cos_wrapper.form-title {display: none;}@media screen and (max-width:400px) {.embed-form-super-wrapper .hs-form fieldset.form-columns-3 .hs-form-field {width: 100% !important;}}.embed-form-super-wrapper {    -moz-box-sizing:border-box;-webkit-box-sizing: border-box;box-sizing: border-box;width: 100%;background: rgba(255,255,255,0);border-top-width: 0px;border-bottom-width: 0px;border-left-width: 0px;border-right-width: 0px;border-radius: 0px !important;-moz-border-radius: 0px !important;-webkit-border-radius: 0px !important;border-color: #bababa !important;border-style: solid !important;padding-top: 50px !important;padding-bottom: 50px !important;padding-left: 49px !important;padding-right: 49px !important;margin: 0 auto;}.embed-form-super-wrapper .hs-form label, .embed-form-super-wrapper .hs-form label span {font-family: 'Raleway', Arial !important;color: #636363 !important;font-size: 14px !important;letter-spacing: 0px !important;font-weight: 500 !important;margin-bottom: 6px;}.embed-form-super-wrapper .hs-form label {width: 100% !important;float:left !important;text-align: left !important;padding-left: 0px !important;padding-right: 0px !important;padding-top: 0px !important;padding-bottom: 0px !important;}.embed-form-super-wrapper .hs-form input[type=date], .embed-form-super-wrapper .hs-form input[type=datetime], .embed-form-super-wrapper .hs-form input[type=datetime-local], .embed-form-super-wrapper .hs-form input[type=email], .embed-form-super-wrapper .hs-form input[type=month], input[type=number], .embed-form-super-wrapper .hs-form input[type=password], .embed-form-super-wrapper .hs-form input[type=range], .embed-form-super-wrapper .hs-form input[type=search], .embed-form-super-wrapper .hs-form input[type=tel], .embed-form-super-wrapper .hs-form input[type=text], .embed-form-super-wrapper .hs-form input[type=time], .embed-form-super-wrapper .hs-form input[type=url], .embed-form-super-wrapper .hs-form input[type=week], .embed-form-super-wrapper .hs-form .input textarea, .embed-form-super-wrapper .hs-form .hs-input textarea,.embed-form-super-wrapper .hs-form textarea, .embed-form-super-wrapper .hs-form .input select, .embed-form-super-wrapper .hs-form .hs-input select, .embed-form-super-wrapper .hs-form select {text-align: left !important;font-family: 'Raleway', Arial !important;letter-spacing: 0px !important;font-weight: 300 !important;font-size: 15px !important;border-color: #164cd6 !important;color: #000000 !important;background-color: #f8f8f8 !important;padding-top: 10px;padding-bottom: 10px;padding-left: 10px;padding-right: 10px;border-style: solid !important;border-radius: 0px !important;-moz-border-radius: 0px !important;-webkit-border-radius: 0px !important;box-sizing: border-box;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;border-top-width: 0px !important;border-bottom-width: 1px !important;border-left-width: 0px !important;border-right-width: 0px !important;height:auto !important;}.embed-form-super-wrapper .hs-form input::-webkit-input-placeholder, .embed-form-super-wrapper .hs-form select::-webkit-input-placeholder{color:#a1a1a1 !important;text-align: left !important;}.embed-form-super-wrapper .hs-form input::-moz-placeholder, .embed-form-super-wrapper .hs-form select::-moz-placeholder{color:#a1a1a1 !important;text-align: left !important;}.embed-form-super-wrapper .hs-form input:-ms-input-placeholder, .embed-form-super-wrapper .hs-form select:-ms-input-placeholder{color:#a1a1a1 !important;text-align: left !important;}.embed-form-super-wrapper .hs-form input:-moz-placeholder, .embed-form-super-wrapper .hs-form select:-moz-placeholder{color:#a1a1a1 !important;text-align: left !important;}.embed-form-super-wrapper .hs-form input[type=reset], .embed-form-super-wrapper .hs-form input[type=submit] {font-family: 'Raleway', Arial !important;letter-spacing: 2px !important;font-weight: 800 !important;font-size: 16px !important;color: #164cd6 !important;background: #ffffff !important;border-top-width: 2px !important;border-bottom-width: 2px !important;border-left-width: 2px !important;border-right-width: 2px !important;border-radius: 0px !important;border-style: solid !important; border-color: #164cd6 !important;border-radius: 0px !important;-moz-border-radius: 0px !important;-webkit-border-radius: 0px !important;box-sizing:border-box;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;padding-top: 25px;padding-bottom: 25px;padding-left: 40px;padding-right: 40px;-webkit-transition: all .2s linear;-o-transition: all .2s linear;-moz-transition: all .2s linear;-ms-transition: all .2s linear;transition: all .2s linear;-khtml-transition: all .2s linear;}.embed-form-super-wrapper .hs-form .hs-submit {display: inline-block;width: 100%;}.embed-form-super-wrapper .hs-form .hs-submit .actions {width: 100% !important;float: left !important;clear: both !important;text-align: left !important;box-sizing:border-box;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;padding-left: 11px !important;padding-right: 17px !important;}@media screen and (max-width:767px){.embed-form-super-wrapper .hs-form .form-columns-2>div.hs-form-field,.embed-form-super-wrapper .hs-form .form-columns-3>div.hs-form-field,.embed-form-super-wrapper .hs-form .form-columns-4>div.hs-form-field{width: 100% !important;}}.embed-form-super-wrapper .hs-richtext{float: left !important;width: 100% !important;padding-top: 20px !important;padding-bottom: 20px !important;padding-left: 20px !important;padding-right: 20px !important;color: #666666 !important;font-weight: 600 !important;letter-spacing: 1px !important;font-size: 12px !important;font-family: 'Raleway' !important;}.embed-form-super-wrapper .hs-form .hs-submit .actions {text-align: right !important;}.embed-form-super-wrapper .hs-form .hs-error-msgs label, .embed-form-super-wrapper .hs-form .hs-error-msgs label span {font-family: 'Lato', Arial !important;letter-spacing: 1px !important;font-weight: 300 !important;font-size: 12px !important;color: #ff7373 !important;}.embed-form-super-wrapper .hs-form button:hover, .embed-form-super-wrapper .hs-form input[type=button]:hover, .embed-form-super-wrapper .hs-form input[type=reset]:hover, .embed-form-super-wrapper .hs-form input[type=submit]:hover {background: #164cd6 !important;color: #ffffff !important; border-color: #164cd6 !important;}.grecaptcha-badge {width: auto !important;height: auto !important;box-shadow: none !important;}.embed-form-super-wrapper .hs-form input[type="checkbox"]{margin-right: 10px;margin-top: -2px;}.center-the-form form, .center-the-form form input {text-align: center;}.fn-date-picker .pika-button{text-align: center !important;}</style><script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script><script>hbspt.forms.create({target:".Belch-tyKStKspPibtmgUpeRB9", portalId: "25028945",formId: "6e6d8123-0635-4526-bc1d-379f8d03bea2",css: ""});</script><div class="embed-form-super-wrapper Belch-tyKStKspPibtmgUpeRB9"></div>
      </div>
    </section>
  </div>
</template>

<script>

export default {

  data () {
    return {
      showOverlayForm:false
    }
  },
  computed: {
    teams() {  return this.$store.getters.getTheTeam.acf.member },
    cards() { return  this.$store.getters.getTheTeam.acf.universal_text_box },
    page() { return  this.$store.getters.getTheTeam }
  }
}
</script>

<style >
/*transation*/
.readytotalk-enter-active, .readytotalk-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.readytotalk-enter, .readytotalk-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50%);
  opacity: 0;
}

.linesbg{
  @apply absolute left-0 right-0 m-auto overflow-hidden;
  z-index: -1;
}
/*.teams>div div:nth-last-child(2){*/
/*  @apply lg:col-span-2 lg:justify-self-end;*/
/*}*/
/*.teams>div div:last-child{*/
/*  @apply lg:col-span-2 lg:justify-self-start;*/
/*}*/
.team-wwu>div{
  @apply px-5 pt-23.25
}
.teams h3{
  @apply text-center font-bold text-xl leading-6 md:text-xl
}
.team-wwu>div .main-button {
  @apply py-6 px-7 border-2 flex border-srblue font-bold  text-base leading-4 block m-auto text-srblue mb-36
  hover:bg-srblue hover:text-srwhite transition duration-500 ease-in-out mt-11 cursor-pointer;
  width: fit-content;
}

.team-wwu>div h3{
  @apply text-center
}


</style>
