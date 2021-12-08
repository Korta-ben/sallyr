<template>
  <section :class="card.box_layout +' '+ card.additional_css_class" >

    <div >
      <TheEcosystem v-if="card.has_animation && card.animations == 'ecosystem'"/>
      <TheGreenHouse v-if="card.has_animation && card.animations == 'greenhouse1'" />
      <TheGreenHouse2 v-if="card.has_animation && card.animations == 'greenhouse2'" />
      <img v-if="card.has_header_image" :src="card.image" class="header-image">
      <img v-if="card.has_background" />
      <img v-if="card.has_top_icon" />
      <h2 v-if="card.has_header_text" v-html="card.heading"></h2>
      <h3 v-if="card.has_sub_header_text" v-html="card.sub_heading"></h3>
      <div  v-if="card.has_body_text" class="body-text" v-html="card.body_text"></div>
      <div class="main-button-wrapper" v-if="card.has_button_text" >
        <NuxtLink :to="card.buttom_link"  class="main-button" :ref="card.box_layout" :id="card.box_layout">
          {{ card.button_text }}
        </NuxtLink>
      </div>
      <div class="sub-button-wrapper" v-if="card.has_sub_button_text">
        <NuxtLink :to="card.sub_button_link" class="sub-button">
          {{ card.sub_button_text }}
        </NuxtLink>

      </div>
      <img v-if="card.has_bottom_icon" class="bottom-image" />
      <TheLinesBackground v-if="card.blue_line_background" class="lines-bg"/>
      <TheLinesGreenBackground  v-if="card.has_green_line_background" class="linesbg" />
    </div>

  </section>
</template>

<script>

import TheLinesGreenBackground from "~/components/animations/TheLinesGreenBackground";
export default {
  components: {TheLinesGreenBackground},
  props: {
    card: {
      type: [Object, Array]
    },
  },


}
</script>

<style scoped>

</style>
