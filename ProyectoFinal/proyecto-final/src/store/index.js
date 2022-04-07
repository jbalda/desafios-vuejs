import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:[],
    carrito:[]
  },
  getters: {
    },

  mutations: {
    //Item: {idProducto, cantidad}
    agregarItemAlCarrito(state, item ){
      console.log(item);
      let elem = state.carrito.find(e=> e.producto.numero == item.producto.numero);
      console.log(elem);
      if(elem == null){
        state.carrito.push(item);
      }else{
        elem.cantidad = item.cantidad;
      }
    },
    cargarProductos(state, productos){
      state.productos = productos;
    }
  },
  actions: {
    async obtenerProductos({ commit }){
      const url ='https://602ee9da4410730017c51705.mockapi.io/api/v1/productos';      const result = await fetch(url);
      const data = await result.json();
      commit('cargarProductos',data);
    },
  },
  modules: {
  }
});
