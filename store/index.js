import axios from "axios";

export const state = () => {
  theCalculationResults:{}
  topMenu: []
  homePage:[]
  theProduct:[]
  theIndoorFarming:[]
  theTeam:[]
  thePricing:[]
  theSlider:[]
  // theUpdateUrl:""

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
  },
  setThePricing(state, thePricing){
    state.thePricing = thePricing
  },
  setTheSlider(state, theSlider){
    state.theSlider = theSlider
  },
  setTheCalculationResults(state, theCalculationResults){
    // console.log(theCalculationResults)
    // console.log("hi im action for calculation and the result is "  + theCalculationResults)
    state.theCalculationResults = theCalculationResults
  },
  setTheUpdateUrl(state, theUpdateUrl){
    state.theUpdateUrl = theUpdateUrl
  }



}

export const actions = {

  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('storeDispatchFunc')
  },

  async storeDispatchFunc({ commit }) {
    try{

      const  topMenu  = await axios.get('https://apisr.kortaben.work/wp-json/menus/v1/menus/main')
      const  homePage  = await axios.get('https://apisr.kortaben.work/wp-json/wp/v2/pages/45?acf_format=standard')
      const  theProduct  = await axios.get('https://apisr.kortaben.work/wp-json/wp/v2/pages/47?acf_format=standard')
      const  theIndoorFarming  = await axios.get('https://apisr.kortaben.work/wp-json/wp/v2/pages/51?acf_format=standard')
      const  theTeam  = await axios.get('https://apisr.kortaben.work/wp-json/wp/v2/pages/53?acf_format=standard')
      const  thePricing  = await axios.get('https://apisr.kortaben.work/wp-json/wp/v2/pages/49?acf_format=standard')
      const  theSlider  = await axios.get('https://apisr.kortaben.work/wp-json/wp/v2/slider?acf_format=standard')




      // console.log(homePage.data)
      commit('setTopMenu', topMenu.data.items);
      commit('setHomePage', homePage.data);
      commit('setTheProduct', theProduct.data);
      commit('setTheIndoorFarming', theIndoorFarming.data);
      commit('setTheTeam', theTeam.data);
      commit('setThePricing', thePricing.data);
      commit('setTheSlider', thePricing.data);


    }catch (e) {
      console.error(e);
    }
  },

  addTheCalculationResults({commit}, result){
      commit('setTheCalculationResults', result);
  },
  addTheUpdateUrl({commit}, UpdateUrl){
    commit('setTheUpdateUrl', UpdateUrl);
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
  },
  getThePricing(state){
    return state.thePricing
  },
  getTheSlider(state){
    return state.theSlider
  },
  getTheCalculationResults(state){

    return state.theCalculationResults
  },
  getTheUpdateUrl(state){
    return state.theUpdateUrl
  },
}
