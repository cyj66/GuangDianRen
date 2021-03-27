import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        isSchool:true,
       
    },
    mutations:{
        oppositeIsSchool(state){
            state.isSchool=!state.isSchool
        },
        
    }
})

export default store