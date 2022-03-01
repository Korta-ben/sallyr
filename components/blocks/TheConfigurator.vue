<template>
  <section class="configurator pb-45.5" id="configurator">
      <div class="px-5 m-auto  lg:max-w-screen-1.5lg" >
        <h2 class="font-bold text-12.5 leading-13.75 text-srblue pb-12.75 pt-40 md:w-1/2 md:max-w-102 md:pl-4">How much
          would you save?</h2>
        <form class="grid  grid-cols-1 md:grid-cols-2 gap-4" v-if="!theResultBox">
          <div class="building-type">
            <p>Building type*</p>
            <div class="flex flex-wrap gap-2">
              <input  v-model="building_type"  id="office" type="radio"  class="hidden" name="building_type" value="office">
              <label for="office"
               class="py-6 px-7.5  text-base font-bold leading-4 border-srblue border-2 text-srblue
               hover:bg-srblue hover:text-srwhite cursor-pointer
            " >Office</label>

              <input  v-model="building_type"  id="logistics" type="radio" class="hidden" name="building_type" value="logistics">
              <label for="logistics"
                     class="py-6 px-7.5  text-base font-bold leading-4 border-srblue border-2 text-srblue
                     hover:bg-srblue hover:text-srwhite cursor-pointer
            transition duration-500 ease-in-out " >Logistics</label>

              <input  v-model="building_type" id="educational"  type="radio" class="hidden" name="building_type"
                      value="educational">
              <label for="educational"
                     class="py-6 px-7.5 text-base font-bold leading-4  border-srblue border-2 text-srblue
                     hover:bg-srblue hover:text-srwhite cursor-pointer
              transition duration-500 ease-in-out" >Educational</label>


              <input  v-model="building_type"  id="retail" type="radio" class="hidden" name="building_type" value="retail">
              <label for="retail"
                     class="py-6 px-7.5  text-base font-bold leading-4 border-srblue border-2 text-srblue
                     hover:bg-srblue hover:text-srwhite cursor-pointer
              transition duration-500 ease-in-out" >Retail</label>


              <input v-model="building_type"   id="other" type="radio" class="hidden" name="building-type" value="other">
              <label for="other"
                     class="py-6 px-7.5  text-base font-bold leading-4 border-srblue border-2 text-srblue
                     hover:bg-srblue hover:text-srwhite cursor-pointer
              transition duration-500 ease-in-out" >Other</label>
            </div>

          </div>
          <div class="zones">
            <p>Zone*</p>
              <div class="flex flex-wrap gap-2">
                <input v-model="zone"
                                id="polar" type="radio"  class="hidden" name="zone" value="polar" />

                <label for="polar"
                       class="py-6 px-7.5  text-base font-bold leading-4 border-srblue border-2 text-srblue
                       hover:bg-srblue hover:text-srwhite cursor-pointer
                transition duration-500 ease-in-out" >Polar</label>


                <input v-model="zone"  id="temperate" type="radio" class="hidden" name="zone" value="temperate">
                <label for="temperate"
                       class="py-6 px-7.5  text-base font-bold leading-4 border-srblue border-2 text-srblue
                       hover:bg-srblue hover:text-srwhite  cursor-pointer   transition duration-500 ease-in-out"
                >Temperate
                </label>


                <input v-model="zone" id="tropical"  type="radio" class="hidden" name="zone" value="tropical">
                <label for="tropical"
                       class="py-6 px-7.5 text-base font-bold leading-4  border-srblue border-2 text-srblue
                       hover:bg-srblue hover:text-srwhite cursor-pointer   transition duration-500 ease-in-out" >Tropical
                </label>

              </div>
          </div>
          <div class="area-types">
            <p>Area type*</p>
            <div class="flex flex-wrap gap-2">
              <input v-model="area_type"  id="meters" type="radio"  class="hidden" name="area_type" value="meters">
              <label for="meters"
                     class="py-6 px-7.5  text-base font-bold leading-4 border-srblue border-2 text-srblue
                     hover:bg-srblue hover:text-srwhite  cursor-pointer  transition duration-500 ease-in-out" >Meters
              </label>


              <input v-model="area_type"  id="feet" type="radio" class="hidden" name="area_type" value="feet">
              <label for="feet"
                     class="py-6 px-7.5  text-base font-bold leading-4 border-srblue border-2 text-srblue
                     hover:bg-srblue hover:text-srwhite  cursor-pointer   transition duration-500 ease-in-out" >Feet
              </label>



            </div>
          </div>
          <div class="currency">
            <p>Currency*</p>
            <div class="flex flex-wrap gap-2">
              <input v-model="currency"  id="sek" type="radio"  class="hidden" name="currency" value="sek">
              <label for="sek"
                     class="py-6 px-7.5  text-base font-bold leading-4 border-srblue border-2 text-srblue
                         hover:bg-srblue hover:text-srwhite  cursor-pointer   transition duration-500 ease-in-out" >SEK
              </label>


              <input v-model="currency"  id="usd" type="radio" class="hidden" name="currency" value="usd">
              <label for="usd"
                     class="py-6 px-7.5  text-base font-bold leading-4 border-srblue border-2 text-srblue
                     hover:bg-srblue hover:text-srwhite   cursor-pointer transition duration-500 ease-in-out" >USD
              </label>


              <input v-model="currency" id="eur"  type="radio" class="hidden" name="currency" value="eur">
              <label for="eur"
                     class="py-6 px-7.5 text-base font-bold leading-4  border-srblue border-2 text-srblue
                      hover:bg-srblue hover:text-srwhite  cursor-pointer  transition duration-500 ease-in-out" >EUR
              </label>

            </div>
          </div>
          <div class="flex flex-col pb-8">
            <p>Area*</p>
<!--            <input v-model="area" type="text" name="area">-->
            <div class="self-center pb-4 text-srblue text-base font-semibold ">{{ area_type === "feet" ?
              (Math.round((area * 10.7639) / 1000)) * 1000 + ' ft' : roundArea  + ' m'}}
              <sup >2</sup></div>
            <div class="flex gap-2">

              <span class="text-srblue text-xs w-24">
                {{ area_type === "feet" ?
              (Math.round((1000 * 10.7639) / 1000)) * 1000 + ' ft' : 1000  + ' m'}}<sup>2</sup>
              </span>
              <AesthVueRangeInput v-model="area" :min="1000" :max="100000"
                                  :squaredThumb="true"
                                  v-model.number="area"
                                  progressColor="#ffffff0"
                                  thumbBorderColor="#FF981F"
                                  :buffered="{
                                      width: '100%',
                                      color: '#164CD6',
                                    }"
              />
              <span class="text-srblue text-xs w-24">
                {{ area_type === "feet" ?
                (Math.round((100000 * 10.7639) / 1000)) * 1000 + ' ft' : 100000  + ' m'}}<sup>2</sup>
              </span>
            </div>

          </div>
          <div class="self-center justify-self-center md:justify-self-end pt-8 lg:w-111">
            <a class="submit pl-7.5 py-6 border-srblue border-2
            hover:bg-srblue hover:text-srwhite
             text-srblue text-base font-semibold leading-4  transition duration-500 ease-in-out"
                    @click="theCalculations(); theResultBox = true ;"
            href="#configurator">Show me the result</a>
          </div>
        </form>


        <!--result stuff-->
        <transition name="result" appear v-if="theResultBox">
          <div class="results-wrapper flex flex-col md:flex-row md:flex-nowrap	md:gap-x-16	" >
            <div class="results w-full md:w-1/2">
              <div class="grid grid-cols-2 capitalize">
                <div class="pb-7.5 flex flex-col">
                  <span class="font-bold text-xl leading-7">Building Type:</span> {{ building_type }}
                </div>
                <div class="pb-7.5 flex flex-col items-end ">
                  <span class="font-bold text-xl leading-7 self-end"> Zone: </span>  {{ zone }}
                </div>
                <div class="pb-7.5 flex flex-col">
                  <span class="font-bold text-xl leading-7">Area Type:</span> {{ area_type }}
                </div>
                <div class="pb-7.5  flex flex-col items-end">
                  <span class="font-bold text-xl leading-7 self-end">  Area:</span>
                  <span class="pr-1.5">{{ area_type === "feet" ?
                  (Math.round((area *  10.7639) / 100)) * 100 + ' ft' : roundArea  + ' m'}}</span>
                  <span class="text-xs -mt-5 ml-4">2</span>
                </div>
              </div>
              <div class="font-bold text-lg leading-6">
                <ul>
                  <li>KWh/year in savings : {{ (Math.round(showResults().TotalKWhPerMonth/1000)*1000) * 12  }}</li>
                  <li>KWh/month in savings : {{Math.round(showResults().TotalKWhPerMonth/1000)*1000  }}</li>
                  <li class="pt-3.5 text-srblue text-xl">Price/Month : From
                    <span v-if="currency == 'sek'">
                      {{ Math.round(showResults().TotalCostPerMonth / 100 ) * 100}} SEK</span>
                    <span v-if="currency == 'usd'"> USD
                      {{ Math.round((showResults().TotalCostPerMonth / 8.5) / 10 ) * 10}}
                    </span>
                    <span v-if="currency == 'eur'">
                      {{ Math.round((showResults().TotalCostPerMonth / 10.15) / 10 ) * 10}} EURO
                    </span>
                  </li>
                </ul>
              </div>



            </div>


            <div class="contact w-full md:w-1/2 flex flex-col " v-if="!resultSent">
              <h3 class="font-bold text-xl leading-7 pt-4 md:pt-0">Send the result to:</h3>
              <input v-model="contactEmail" required name="email" placeholder="Email*"
                     class="border-b py-4 border-srblack max-w-xs"/>
              <div class="pt-4 flex">
<!--                <input v-model="contactMe" type="checkbox" id="contacted"/><label class="pl-4">I want to be contacted about-->
<!--                getting-->
<!--                started-->
<!--              </label>-->


              </div>
              <a v-if="resultSent===false"
                class="submit pl-7 w-1/2 py-6 mt-17.5 border-srblue cursor-pointer border-2 text-srblue text-base font-semibold
                 hover:bg-srblue hover:text-srwhite
                 leading-4 transition duration-500 ease-in-out flex"
                 @click="sendEmail"
              >Send</a>

            </div>
            <div class="contact w-1/2 flex flex-col " v-if="resultSent">
                <h2
                  class="text-srgreen text-base  leading-4 font-bold flex flex-col pb-4 items-center"><img
                  src="~/assets/images/checkmark-outline.svg" class="pr-4"/> The Result has been sent to your
                  email!</h2>
            </div>


          </div>
        </transition>

      </div>



  </section>
</template>

<script>
import AesthVueRangeInput from "aesth-vue-range-input";
import VueFormulate from '@braid/vue-formulate'
import axios from "axios";

export default {
components:{AesthVueRangeInput, VueFormulate},
  data(){
    return {
      // the inputs
      building_type:'office',
      zone:'polar',
      area_type:'meters',
      currency:'sek',
      area:1000,
      // the yearly rates
      theBuildingZone:[
        {
          type:"office",
          zone:{
            polar:10,
            temperate:15,
            tropical:20
          }

        },
        {
          type:"logistics",
          zone:{
            polar:30,
            temperate:35,
            tropical:40
          }

        },
        {
          type:"retail",
          zone:{
            polar:30,
            temperate:35,
            tropical:40
          }

        },
        {
          type:"educational",
          zone:{
            polar:10,
            temperate:15,
            tropical:20
          }

        },
        {
          type:"other",
          zone:{
            polar:15,
            temperate:20,
            tropical:25
          }

        }
      ],
      theResultBox: false,
      contactEmail: "",
      contactMe:false,
      resultSent:false



    }
  },
  computed:{
        roundArea(){
          this.area = Math.round(this.area/1000)*1000
          return this.area
        },

  },
  methods:{
        theRatePerYear(){
          // console.log(this.theBuildingZone.filter( o => o.type === this.building_type)[0].zone[this.zone])
          return this.theBuildingZone.filter( o => o.type === this.building_type)[0].zone[this.zone]
        },
        theCalculations(){
            //the calculation variables
              let KWhPerMonthPerMeter = this.theRatePerYear()/12
              let KWhPerYearPerFeet = this.theRatePerYear()*0.0929
              let  KWhPerMonthPerFeet = KWhPerYearPerFeet/12
              //default in Sek
              // let PPMonthPerMeter = (KWhPerMonthPerMeter*0.8)*0.45
              let PPMonthPerMeter = 0.6
              // let PPMUSDPerMeter = PPMonthPerMeter/8.5
              let PPMUSDPerMeter = PPMonthPerMeter/9
              let PPMEuroPerMeter = PPMonthPerMeter/10.14
              let TotalKWhPerYear = this.area*this.theRatePerYear()
              let TotalKWhPerMonth = this.area*KWhPerMonthPerMeter
              let TotalCostPerMonth = this.area*PPMonthPerMeter

              let result = {
                KWhPerMonthPerMeter: KWhPerMonthPerMeter,
                KWhPerYearPerFeet:KWhPerYearPerFeet,
                KWhPerMonthPerFeet:KWhPerMonthPerFeet,
                PPMonthPerMeter:PPMonthPerMeter,
                PPMUSDPerMeter:PPMUSDPerMeter,
                PPMEuroPerMeter:PPMEuroPerMeter,
                TotalKWhPerYear:TotalKWhPerYear,
                TotalKWhPerMonth:TotalKWhPerMonth,
                TotalCostPerMonth:TotalCostPerMonth
              }

          this.$store.dispatch('addTheCalculationResults', result)
          this.sendItToWP();


        },
      showResults(){

          // console.log( Math.round(this.$store.getters.getTheCalculationResults.TotalCostPerMonth*5000);
        // console.log(this.$store.getters.getTheCalculationResults.TotalCostPerMonth);
          return this.$store.getters.getTheCalculationResults;
        },

        async sendItToWP() {
          try{
            const theCalculationResponse = {
              "title": JSON.stringify(this.building_type + " - " + this.area),
              "acf": {
                "area": JSON.stringify(this.area),
                "area_type": JSON.stringify(this.area_type),
                "building_type": JSON.stringify(this.building_type),
                "calculated_cost": JSON.stringify(this.showResults().TotalCostPerMonth),
                "currency": JSON.stringify(this.currency),
                "email": null,
                "kwhmonth_in_savings": JSON.stringify(this.showResults().TotalKWhPerMonth),
                "kwhyear_in_savings": JSON.stringify(this.showResults().TotalKWhPerYear) ,
                "zone": JSON.stringify(this.zone),
              }
            }

            // console.log(theCalculationResponse)
            await  this.$store.dispatch('addTheCalculationResponse', JSON.stringify(theCalculationResponse))
          }catch(e){console.log(e)}
        },


      async sendEmail() {
         // console.log("email goes to :" +this.contactEmail)

        try{
          await this.$axios.$post('/calculator/send', {
            sender:this.contactEmail,
            buildingType:this.building_type,
            zone:this.zone,
            areaType:this.area_type,
            area:JSON.stringify(this.area),
            currency: this.currency,
            // savings: this.currency === 'sek' ? JSON.stringify(Math.round((this.showResults().TotalCostPerMonth ) / 100 ) * 100) : this.currency === 'usd' ?  JSON.stringify(Math.round((this.showResults().TotalCostPerMonth / 8.5) / 100 ) * 100) : JSON.stringify(Math.round((this.showResults().TotalCostPerMonth / 10.15) / 100 ) * 100),
            savings:JSON.stringify(Math.round(this.showResults().TotalKWhPerMonth/1000)*1000),
            cost:this.currency === 'sek' ? JSON.stringify(Math.round((this.showResults().TotalCostPerMonth ) / 100 ) * 100) : this.currency === 'usd' ?  JSON.stringify(Math.round((this.showResults().TotalCostPerMonth / 8.5) / 100 ) * 100) : JSON.stringify(Math.round((this.showResults().TotalCostPerMonth / 10.15) / 100 ) * 100)
          })
          // this.submitting = false
          // this.isSubmitted = true
          await new Promise(resolve => setTimeout(resolve, 2500))
          this.resultSent = true

        }catch (e) {
          console.log(e)
        }
      }

  }
}
</script>

<style>



</style>
