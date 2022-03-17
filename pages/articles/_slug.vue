<template>
  <div class="">
    <transition name="readytotalk" appear v-if=showOverlayForm>
      <OverlayForm @popupToggle="showOverlayForm = !showOverlayForm"/>
    </transition>
    <TheLinesBackground class="linesbg "/>
    <component  v-for="block in blocks" :key="block.index"  :is="block.block_type" :block="block"/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  head() {
    if(this.page) {
      const metaArray = [];
      this.page.yoast_meta.map(ele => {
        metaArray.push({
          hid: ele.name ? ele.name : ele.property,
          name: ele.name ? ele.name : ele.property,
          content: ele.content,
        });
      });
      return {
        title: this.page.yoast_title,
        meta: metaArray,
      }
    }
  },



  data(){
    return {
      showOverlayForm:false,
      article:[],
    }
  },

  async asyncData ({ params }) {
    const { data } = await axios.get(
      `https://api.sally-r.com/wp-json/wp/v2/articles?slug=${params.slug}&acf_format=standard`
    )
    let article = data[0]
    console.log(article.acf.article_block)
    return { article }
  },

  computed: {
          page() { return this.article },
          blocks(){
            return this.article.acf.article_block
          }
  }


}
</script>

<style>

.blog_header{
  @apply bg-no-repeat pt-11 md:pt-25 max-w-screen-1.5xl w-full   content-center m-auto;
  background-image:url("~/assets/images/blue-blur-2.webp"),
  url("~/assets/images/home-header.webp");
  background-position:right 90% , left 0% ;

}
.blog_header>div{
  @apply m-auto flex  max-w-screen-1.5lg px-5
  lg:px-10
  /*@apply m-auto  px-5  pb-44*/
  /*lg:px-10 xg:pr-28  max-w-screen-1.5lg lg:pb-56*/
  /*lg:grid lg:grid-cols-5;*/
}
.blog_header h1{
  @apply text-8xl leading-25 pb-11.5;
}
.blog_header .description{
  @apply text-4xl font-bold
}
.blog_header span.orange{
  @apply text-srorange;
}
.linesbg{
  @apply absolute left-0 right-0 m-auto overflow-hidden;
  z-index: -1;
}
.case{
  box-shadow: 0px 0px 19px rgba(0, 0, 0, 0.05);
}

.cases {
  background-image: url("~/assets/images/blue-blur-2.webp");
  @apply bg-no-repeat ;
  background-position: left 0%}
</style>
