import axios from "axios";

export const state = () => {
  topMenu: []
  homePage:[]
  theProduct:[]
  theIndoorFarming:[]
  theTeam:[]
}

export const mutations = {

  setTopMenu(state, topMenu){
    state.topMenu = topMenu
  },
  setHomePage(state, homePage){
    state.homePage = homePage;
  },
  setTheProduct(state, theProduct){
    state.theProduct = theProduct;
  },
  setTheIndoorFarming(state, theIndoorFarming){
    state.theIndoorFarming = theIndoorFarming;
  },
  setTheTeam(state, theTeam){
    state.theTeam = theTeam;
  }

}

export const actions = {

  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('storeDispatchFunc')
  },

  async storeDispatchFunc({ commit }) {
    try{

      const  topMenu  = await axios.get('https://apisr.kortaben.work/wp-json/menus/v1/menus/main')
      const  homePage  = await axios.get('https://apisr.kortaben.work/wp-json/wp/v2/pages/45')
      const  theProduct  = await axios.get('https://apisr.kortaben.work/wp-json/wp/v2/pages/47')
      const  theIndoorFarming  = await axios.get('https://apisr.kortaben.work/wp-json/wp/v2/pages/51')
      const  theTeam  = await axios.get('https://apisr.kortaben.work/wp-json/wp/v2/pages/53')



      // console.log(homePage.data)
      commit('setTopMenu', topMenu.data.items);
      commit('setHomePage', homePage.data);
      commit('setTheProduct', theProduct.data);
      commit('setTheIndoorFarming', theIndoorFarming.data);
      commit('setTheTeam', theTeam.data);


    }catch (e) {
      console.error(e);
    }
  }
}

export const getters = {
  getTopMenu(state){
    return state.topMenu
  },
  getHomePage(state){
    return state.homePage
  },
  getTheProduct(state){
    return state.theProduct
  },
  getTheIndoorFarming(state){
    return state.theIndoorFarming
  },
  getTheTeam(state){
    return state.theTeam
  }
}
