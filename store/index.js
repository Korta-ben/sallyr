import axios from "axios";

export const state = () => {
  // hikingTrails:[]
  // landmarks:[]
  // stories:[]
  // parking:[]
  topMenu: []
  // footerBlocks: []
}

export const mutations = {
  setTopMenu(state, topMenu){
    state.topMenu = topMenu
  },

  // setFooterBlocks(state, footerBlocks){
  //   state.footerBlocks = footerBlocks;
  // },

}

export const actions = {

  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('storeDispatchFunc')
  },

  async storeDispatchFunc({ commit }) {
    try{

      const  topMenu  = await axios.get('https://apisr.kortaben.work/wp-json/menus/v1/menus/main')
      // const  footerBlocks  = await axios.get(`https://api.stockamollan.guide/wp-json/wp/v2/sevardheter?per_page=100&orderby=title&order=asc`)
      // const stories  = await axios.get(`https://api.stockamollan.guide/wp-json/wp/v2/sagner?per_page=100&orderby=title&order=asc`)
      // commit('setHikingTrails', hikingTrails.data.sort( (a, b) => b.acf.position.localeCompare(a.acf.position) ));
      // console.log(topMenu.data.items)
      commit('setTopMenu', topMenu.data.items);
      // commit('setFooterBlocks', footerBlocks.data);
      // commit('setStories', stories.data);

    }catch (e) {
      console.error(e);
    }
  }
}

export const getters = {
  getTopMenu(state){
    return state.topMenu
  },
  // getFooterBlocks(state){
  //   return state.footerBlocks
  // },
  // getStories(state){
  //   return state.stories
  // }
}
