import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    exportaciones:[]
  },
  getters: {
  },
  mutations: {
    asignarExportaciones(state,exportaciones){
      state.exportaciones =exportaciones;
    }
  },
  actions: {
    async obtenerExportaciones({ commit }){
      const url ='https://602ee9da4410730017c51705.mockapi.io/api/v1/exportaciones';
      const result = await fetch(url);
      const data = await result.json();
      commit('asignarExportaciones',data);
    },
    async agregarExportacion({dispatch},exportacion){
      const url ='https://602ee9da4410730017c51705.mockapi.io/api/v1/exportaciones';
      let post ={
        method:'POST',
        body: JSON.stringify(exportacion),
        headers:{
          'Content-Type': 'application/sjon'
        }
      };
      const result = await fetch(url,post);
      const data  = await result.json();
       console.log(data);
       dispatch('obtenerExportaciones');

    }
   
  },
  modules: {
  }
})
