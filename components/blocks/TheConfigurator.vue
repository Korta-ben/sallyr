<template>
  <section class="configurator pb-45.5">
      <div class="px-5 m-auto  lg:max-w-screen-1.5lg">
        <h2 class="font-bold text-12.5 leading-13.75 text-srblue pb-12.75 pt-40">How much
          would you save?</h2>
        <form class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <input v-model="zone"  id="polar" type="radio"  class="hidden" name="zone" value="polar">
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
              (Math.round((area * 3.28084) * 100)) / 100 + ' ft' : area  + ' m'}}<sup>2</sup></div>
            <div class="flex gap-2">

              <span class="text-srblue text-xs w-20">
                {{ area_type === "feet" ?
              (Math.round((1000 * 3.28084) * 100)) / 100 + ' ft' : 1000  + ' m'}}<sup>2</sup>
              </span>
              <AesthVueRangeInput v-model="area" :min="1000" :max="50000"
                                  :squaredThumb="true"
                                  v-model.number="area"
                                  progressColor="#ffffff0"
                                  thumbBorderColor="#FF981F"
                                  :buffered="{
                                      width: '100%',
                                      color: '#164CD6',
                                    }"
              />
              <span class="text-srblue text-xs w-20">
                {{ area_type === "feet" ?
                (Math.round((50000 * 3.28084) * 100)) / 100 + ' ft' : 50000  + ' m'}}<sup>2</sup>
              </span>
            </div>

          </div>
          <div class="self-center">
            <a class="submit pl-7.5 py-6 border-srblue border-2 text-srblue text-base font-semibold leading-4"
                    @click="theCalculations"
            >Show me the result</a>
          </div>
        </form>
      </div>

  </section>
</template>

<script>
import AesthVueRangeInput from "aesth-vue-range-input";
export default {
components:{AesthVueRangeInput},
  data(){
    return {
      building_type:'',
      zone:'',
      area_type:'',
      currency:'',
      area:1000,
      colour:"#ffffff",

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
            polar:10,
            temperate:15,
            tropical:20
          }

        },
        {
          type:"educational",
          zone:{
            polar:30,
            temperate:35,
            tropical:40
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
      ]


    }
  },
  methods:{
        theRates(){
          // console.log(this.theBuildingZone.filter( o => o.type === this.building_type)[0].zone[this.zone])
          return this.theBuildingZone.filter( o => o.type === this.building_type)[0].zone[this.zone]
        },
        theCalculations(){
              let theZone = this.theRates()
              let result = this.area * theZone
              console.log( result );
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
