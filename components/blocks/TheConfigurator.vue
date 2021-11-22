<template>
  <section class="configurator pb-45.5">
      <div class="px-5 m-auto  lg:max-w-screen-1.5lg" >
        <h2 class="font-bold text-12.5 leading-13.75 text-srblue pb-12.75 pt-40 md:w-1/2 md:max-w-102 md:pl-4">How much
          would you save?</h2>
        <form class="grid  grid-cols-1 md:grid-cols-2 gap-4" v-if="!theResultBox">
          <div class="building-type">
            <p>Building type*</p>
            <div class="flex flex-wrap gap-2">
              <input  v-model="building_type"  id="office" type="radio"  class="hidden" name="building_type" value="office">
              <label for="office"
               class="py-6 px-7.5  text-base font-semibold leading-4 border-srblue border-2 text-srblue
            " >Office</label>

              <input  v-model="building_type"  id="logistics" type="radio" class="hidden" name="building_type" value="logistics">
              <label for="logistics"
                     class="py-6 px-7.5  text-base font-semibold leading-4 border-srblue border-2 text-srblue
            " >Logistics</label>

              <input  v-model="building_type" id="educational"  type="radio" class="hidden" name="building_type"
                      value="educational">
              <label for="educational"
                     class="py-6 px-7.5 text-base font-semibold leading-4  border-srblue border-2 text-srblue
            " >Educationl</label>


              <input  v-model="building_type"  id="retail" type="radio" class="hidden" name="building_type" value="retail">
              <label for="retail"
                     class="py-6 px-7.5  text-base font-semibold leading-4 border-srblue border-2 text-srblue
            " >Retail</label>


              <input v-model="building_type"   id="other" type="radio" class="hidden" name="building-type" value="other">
              <label for="other"
                     class="py-6 px-7.5  text-base font-semibold leading-4 border-srblue border-2 text-srblue
            " >Other</label>
            </div>

          </div>
          <div class="zones">
            <p>Zone*</p>
              <div class="flex flex-wrap gap-2">
                <input v-model="zone"
                                id="polar" type="radio"  class="hidden" name="zone" value="polar" />

                <label for="polar"
                       class="py-6 px-7.5  text-base font-semibold leading-4 border-srblue border-2 text-srblue
              " >Polar</label>


                <input v-model="zone"  id="temperate" type="radio" class="hidden" name="zone" value="temperate">
                <label for="temperate"
                       class="py-6 px-7.5  text-base font-semibold leading-4 border-srblue border-2 text-srblue  " >Temperate</label>


                <input v-model="zone" id="tropical"  type="radio" class="hidden" name="zone" value="tropical">
                <label for="tropical"
                       class="py-6 px-7.5 text-base font-semibold leading-4  border-srblue border-2 text-srblue " >Tropical</label>

              </div>
          </div>
          <div class="area-types">
            <p>Area type*</p>
            <div class="flex flex-wrap gap-2">
              <input v-model="area_type"  id="meters" type="radio"  class="hidden" name="area_type" value="meters">
              <label for="meters"
                     class="py-6 px-7.5  text-base font-semibold leading-4 border-srblue border-2 text-srblue  " >Meters</label>


              <input v-model="area_type"  id="feet" type="radio" class="hidden" name="area_type" value="feet">
              <label for="feet"
                     class="py-6 px-7.5  text-base font-semibold leading-4 border-srblue border-2 text-srblue  " >Feet</label>



            </div>
          </div>
          <div class="currency">
            <p>Currency*</p>
            <div class="flex flex-wrap gap-2">
              <input v-model="currency"  id="sek" type="radio"  class="hidden" name="currency" value="sek">
              <label for="sek"
                     class="py-6 px-7.5  text-base font-semibold leading-4 border-srblue border-2 text-srblue  " >SEK</label>


              <input v-model="currency"  id="usd" type="radio" class="hidden" name="currency" value="usd">
              <label for="usd"
                     class="py-6 px-7.5  text-base font-semibold leading-4 border-srblue border-2 text-srblue  " >USD</label>


              <input v-model="currency" id="eur"  type="radio" class="hidden" name="currency" value="eur">
              <label for="eur"
                     class="py-6 px-7.5 text-base font-semibold leading-4  border-srblue border-2 text-srblue  " >EUR</label>

            </div>
          </div>
          <div class="flex flex-col pb-8">
            <p>Area*</p>
<!--            <input v-model="area" type="text" name="area">-->
            <div class="self-center pb-4 text-srblue text-base font-semibold ">{{ area_type === "feet" ?
              (Math.round((area * 10.7639) / 1000)) * 1000 + ' ft' : roundArea  + ' m'}}<sup>2</sup></div>
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
          <div class="self-center">
            <a class="submit pl-7.5 py-6 border-srblue border-2 text-srblue text-base font-semibold leading-4"
                    @click="theCalculations(); theResultBox = true "
            >Show me the result</a>
          </div>
        </form>


        <!--result stuff-->
        <transition name="result" appear v-if="theResultBox">
          <div class="results-wrapper flex flex-wrap" >
            <div class="results w-1/2">
              <div class="grid grid-cols-2 capitalize">
                <div class="pb-7.5">
                  <span class="font-bold text-xl leading-7">Building Type:</span> <br> {{ building_type }}
                </div>
                <div class="pb-7.5">
                  <span class="font-bold text-xl leading-7"> Zone: </span> <br> {{ zone }}
                </div>
                <div class="pb-7.5">
                  <span class="font-bold text-xl leading-7">Area Type:</span> <br> {{ area_type }}
                </div>
                <div class="pb-7.5">
                  <span class="font-bold text-xl leading-7">  Area:</span> <br>
                  {{ area_type === "feet" ?
                  (Math.round((area *  10.7639) / 1000)) * 1000 + ' ft' : roundArea  + ' m'}}<sup>2</sup>
                </div>
              </div>
              <div class="font-bold text-lg leading-6">
                <ul>
                  <li>KWh/year in savings : {{ showResults().TotalKWhPerYear }}</li>
                  <li>KWh/month in savings : {{ showResults().TotalKWhPerMonth }}</li>
                  <li class="pt-3.5 text-srblue text-xl">Price/Month :
                    <span v-if="currency == 'sek'">
                      {{ Math.round(showResults().TotalCostPerMonth / 1000 ) * 1000}} SEK</span>
                    <span v-if="currency == 'usd'"> USD
                      {{ Math.round((showResults().TotalCostPerMonth / 8.5) / 100 ) * 100}}
                    </span>
                    <span v-if="currency == 'eur'">
                      {{ Math.round((showResults().TotalCostPerMonth / 10.15) / 100 ) * 100}} EURO
                    </span>
                  </li>
                </ul>
              </div>



            </div>


            <div class="contact w-1/2 flex flex-col">
              <h3 class="font-bold text-xl leading-7 ">Send the result to:</h3>
              <input name="email" placeholder="Email*" class="border-b py-4 border-srblack max-w-xs"/>
              <div class="pt-8">
                <input type="checkbox" id="contacted"/><label class="pl-4">I want to be contacted about getting started
              </label>
              </div>

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

      theResultBox: false


    }
  },
  computed:{
        roundArea(){
          this.area = Math.round(this.area/1000)*1000
          return this.area
        }
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
              let PPMonthPerMeter = (KWhPerMonthPerMeter*0.8)*0.45
              let PPMUSDPerMeter = PPMonthPerMeter/8.5
              let PPMEuroPerMeter = PPMonthPerMeter/10.15
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
          console.log(this.$store.getters.getTheCalculationResults);
          return this.$store.getters.getTheCalculationResults;
        },

        sendItToWP() {


          try{
            const calData = {
              "acf": {
                "area": "62000",
                "area_type": "meters",
                "building_type": "retail",
                "calculated_cost": "55800",
                "currency": "sek",
                "email": null,
                "kwhmonth_in_savings": "155000",
                "kwhyear_in_savings": "1860000",
                "zone": "polar"
              }


            }
            // {
            //     "area": this.area,
            //     "area_type": this.area_type,
            //     "building_type": this.building_type,
            //     "calculated_cost": this.showResults().TotalCostPerMonth,
            //     "currency": this.currency,
            //     "email": null,
            //     "kwhmonth_in_savings": this.showResults().TotalKWhPerMonth,
            //     "kwhyear_in_savings": this.showResults().TotalKWhPerYear ,
            //     "zone": this.zone,
            // }
            console.log(JSON.stringify(calData))
            axios.post('https://apisr.kortaben.work/wp-json/wp/v2/calculations/', JSON.stringify(calData),{
              auth: {
                        username: "api-admin",
                        password: "VeB5 eeRW lWl6 Wjag o8x2 jzC6"
                      },
                withCredentials: true,
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
                }
            })
              .then(function(response){
              console.log(response.data);
            })
            // axios({
            //   method: 'post',
            //   url: 'https://apisr.kortaben.work/wp-json/wp/v2/calculations/',
            //   data: {
            //     title: "sometitle2",
            //     content: "blah",
            //     fields: JSON.stringify({
            //       "area": "62000000",
            //       "area_type": "meters",
            //       "building_type": "retail",
            //       "calculated_cost": "55800",
            //       "currency": "sek",
            //       "email": null,
            //       "kwhmonth_in_savings": "155000",
            //       "kwhyear_in_savings": "1860000",
            //       "zone": "polar"
            //     })
            //   },
            //   headers: {
            //     "Authorization" : `Bearer ${this.$store.state.token}`
            //   },
            //   auth: {
            //         username: "api-admin",
            //         password: "VeB5 eeRW lWl6 Wjag o8x2 jzC6"
            //       }}).then(function(response) {
            //       console.log(response.data);
            //     }).catch(function(error) {
            //       console.log('Error on Authentication');
            //     });
            // axios.post(`https://apisr.kortaben.work/wp-json/wp/v2/calculations/`, {
            //   data: {
            //     title:"from website",
            //     fields:{
            //       calData
            //     }
            //   },
            //   withCredentials: true,
            //   headers: {
            //     "Accept": "application/json",
            //     "Content-Type": "application/json"
            //   },
            //
            //
            // },{
            //   auth: {
            //     username: "api-admin",
            //     password: "VeB5 eeRW lWl6 Wjag o8x2 jzC6"
            //   }}).then(function(response) {
            //   console.log(response.data);
            // }).catch(function(error) {
            //   console.log('Error on Authentication');
            // });

          }catch(e){console.log(e)}


        }
  }
}
</script>

<style>
.configurator p{
  @apply font-bold text-xl leading-7 py-8
}
.configurator a:after {
  @apply pl-4 pr-10;
  content: url("~/assets/images/right-blue.svg");
}

.configurator input[type=radio]:checked + label{
  @apply bg-srblue text-srwhite opacity-100;
}

</style>
