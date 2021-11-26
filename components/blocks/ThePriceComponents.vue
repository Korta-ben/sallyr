<template>
 <section class="price-component">

   <div>

     <div class="body-text">
       <h2>Our price plans</h2>
       <p class="highlighted">
         Invest in your building’s performance
       </p>
       <p>
         Choose between signing up for a monthly plan or make an investment in your building and hook it up to our
         all-inclusive support plan. All prices are listed per Air Handling Unit, excluding any taxes or other charges.
       </p>
     </div>

     <div class="price-cards">

       <ThePricingContact v-if="started" @click="started = !started" class="h-58 flex flex-col justify-center"/>
       <div class="card" v-if="!started">
         <h3>Get started today</h3>
         <ul>
           <li>
             - No starting fee

           </li>
           <li>

             - Pay monthly per HVAC-unit

           </li>
           <li>

             - Continuous updates and support
           </li>
         </ul>
         <div  class="cost">
           <p >
             from<br>
             €169/month
           </p>

         </div>
       </div>
       <ThePricingContact v-if="invest" @click="invest = !invest" class="h-58 flex flex-col justify-center"/>
       <div class="card" v-if="!invest">
         <h3>Invest in your Air Quality</h3>
         <ul>
           <li>
             - Purchase a license per HVAC-unit

           </li>
           <li>

             - Monthly support agreement

           </li>
           <li>

             - Continuous updates and support
           </li>
         </ul>
         <div  class="cost">
           <p >
           from<br>
           €8900 + €99/month
           </p>
         </div>
       </div>
       <ThePricingContact v-if="enterprize" class="h-73.75 flex flex-col justify-center"/>
       <div class="card" v-if="!enterprize">
         <h3>Enterprise Plan</h3>
         <ul>
           <li>
             - Pay monthly per m2 (pricing examples below)

           </li>
           <li>

             - from 3.000 m2 and upwards

           </li>
           <li>

             - Continuous updates and support
           </li>
         </ul>
         <div class="last cost">
           <p >€ 0.06 per m²</p>

         </div>
         <div class="col-span-2 flex flex-row justify-end gap-x-4">
            <a href="#configurator"
               class="calculate py-5 px-7.5 font-bold text-base  leading-4 border-srblue border-2 text-srblue  mt-6">Calculate your cost</a>
           <a  @click="enterprize = !enterprize"
              class="contact py-5 px-7.5 font-bold  text-base  leading-4 border-srblue border-2 text-srblue  mt-6">Contact</a>
         </div>
       </div>
     </div>

   </div>

 </section>
</template>

<script>
import ThePricingContact from "~/components/blocks/ThePricingContact";
export default {
  components: {ThePricingContact},
  data(){
    return {
      started:false,
      invest:false,
      enterprize:false
    }
  }
}
</script>

<style scoped>

</style>
