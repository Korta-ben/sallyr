import axios from "axios";

export const state = () => {
  theCalculationResults:{}
  topMenu: []
  homePage:[]
  theProduct:[]
  theIndoorFarming:[]
  theTeam:[]
  theIntegritetspolicy:[]
  thePricing:[]
  theSlider:[]
  theCalculationResponse:[]
  theBlogg:[]

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
  setTheIntegritetspolicy(state, theIntegritetspolicy){
    state.theIntegritetspolicy = theIntegritetspolicy;
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
  setTheCalculationResponse(state, theCalculationResponse){
    state.theCalculationResponse = theCalculationResponse
  },
  setTheBlogg(state, theBlogg){
    state.theBlogg = theBlogg;
  },



}

export const actions = {

  async nuxtServerInit({ commit, dispatch }) {
    await dispatch('storeDispatchFunc')
  },

  async storeDispatchFunc({ commit }) {
    try{

      const  topMenu  = await axios.get('https://api.sally-r.com/wp-json/menus/v1/menus/main')
      const  homePage  = await axios.get('https://api.sally-r.com/wp-json/wp/v2/pages/45?acf_format=standard')
      const  theProduct  = await axios.get('https://api.sally-r.com/wp-json/wp/v2/pages/47?acf_format=standard')
      const  theIndoorFarming  = await axios.get('https://api.sally-r.com/wp-json/wp/v2/pages/51?acf_format=standard')
      const  theTeam  = await axios.get('https://api.sally-r.com/wp-json/wp/v2/pages/53?acf_format=standard')
      const  theIntegritetspolicy  = await axios.get('https://api.sally-r.com/wp-json/wp/v2/pages/561?acf_format=standard')
      const  thePricing  = await axios.get('https://api.sally-r.com/wp-json/wp/v2/pages/49?acf_format=standard')
      const  theSlider  = await axios.get('https://api.sally-r.com/wp-json/wp/v2/slider?acf_format=standard')
      const  theBlogg  = await axios.get(`https://api.hubapi.com/cms/v3/blogs/posts?hapikey=${process.env.HAPI}`)




      // console.log(homePage.data)
      commit('setTopMenu', topMenu.data.items);
      commit('setHomePage', homePage.data);
      commit('setTheProduct', theProduct.data);
      commit('setTheIndoorFarming', theIndoorFarming.data);
      commit('setTheTeam', theTeam.data);
      commit('setTheIntegritetspolicy', theIntegritetspolicy.data);
      commit('setThePricing', thePricing.data);
      commit('setTheSlider', thePricing.data);
      commit('setTheBlogg', theBlogg.data);


    }catch (e) {
      console.error(e);
    }
  },

  addTheCalculationResults({commit}, result){
      commit('setTheCalculationResults', result);
  },

  addTheCalculationResponse({commit}, theCalculationResponse){
    try{

      const postResponse =  axios.post(
          "https://api.sally-r.com/wp-json/wp/v2/calculations/",
          theCalculationResponse,
          {
            withCredentials:true,
            headers: {
              "Accept": "*/*",
              "Content-Type": "application/json"
            },
            auth: {
              username: "api-admin",
              password: "I8e6 CLQH zSBB Bgfh GMAH 7Cjn"
              // password: "clAF lGQl 7qZw ztHM wyZ5 47Yw"
              // password: "VeB5 eeRW lWl6 Wjag o8x2 jzC6"
            }
          }).then((response)=> {

        commit('setTheCalculationResponse', response.data)
      })

    }catch(e){
      console.error(e)
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
  },
  getTheIntegritetspolicy(state){
    return state.theIntegritetspolicy
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
  getTheCalculationResponse(state){
    return state.theCalculationResponse
  },
  getTheBlogg(state){
    return state.theBlogg
  },
}
