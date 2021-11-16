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
        <button v-html="card.button_text" class="main-button"></button>
      </div>
      <div class="sub-button-wrapper" v-if="card.has_sub_button_text">
        <button  v-html="card.sub_button_text" class="sub-button"></button>
      </div>
      <img v-if="card.has_bottom_icon" class="bottom-image" />
    </div>
  </section>
</template>

<script>

export default {
  props: {
    card: {
      type: [Object, Array]
    },
  },
}
</script>

<style scoped>

</style>
