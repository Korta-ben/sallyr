<template>
  <section class="m-auto w-full order-first xl:max-w-screen-1.5lg  bg-no-repeat  pb-50 lg:pl-50 pt-11.5">
    <VueSlickCarousel v-bind="sliderSettings"  ref="carousel" v-if="slides.length">
      <div v-for="item in items" :key="item.id"
                   class="flex flex-row px-5">
                <div class="slide flex flex-wrap justify-between py-14 px-8">
                  <div class=" bg-contain bg-no-repeat bg-center"
                       >
                    <img class="h-36" :src="item.acf.image">
                  </div>
                  <div class="w-5/12">
                    <h3 v-html="item.title.rendered" ></h3>
                    <div v-html="item.excerpt.rendered" ></div>
                  </div>
                </div>

      </div>

    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: {VueSlickCarousel},
  data () {
    return {
      items: [],
      sliderSettings: [
        {

          "dots": false,
          "infinite": true,
          "centerMode": false,
          "speed": 500,
          "slidesToShow": 2,
          "slidesToScroll": 1,
          "initialSlide": 0,
          "arrows":true,
          "responsive": [

            {
              "breakpoint": 375,
              "settings": {
                "centerMode": false,
                "slidesToShow": 1,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 480,
              "settings": {
                "centerMode": false,
                "slidesToShow": 1,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 640,
              "settings": {
                "centerMode": false,
                "slidesToShow": 1,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 768,
              "settings": {
                "centerMode": false,
                "slidesToShow": 1,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 855,
              "settings": {
                "centerMode": false,
                "slidesToShow": 2,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 1024,
              "settings": {
                "centerMode": false,
                "slidesToShow": 2,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 1280,
              "settings": {
                "centerMode": false,
                "slidesToShow": 2,
                "slidesToScroll": 1
              }
            },
            {
              "breakpoint": 1536,
              "settings": {
                "centerMode": false,
                "slidesToShow": 2,
                "slidesToScroll": 1

              }
            },
          ]
        }

      ]
    }
  },
  async fetch() {
    this.items = await fetch('https://apisr.kortaben.work/wp-json/wp/v2/slider')
      .then(res =>
      res.json()
    )
  },
}
</script>

<style>

</style>
