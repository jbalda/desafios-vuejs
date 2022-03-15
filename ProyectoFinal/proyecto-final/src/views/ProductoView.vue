<template>
  <div>
      <button>Volver</button>
      <h1>Info de Producto</h1>
      <!-- <p>{{articulo.titulo}}</p>
      <p>{{articulo.precio}}</p>
      <p>{{articulo.descripcion}}</p>
      <p>{{articulo.imagen}}</p> -->
      <p><button :click="loguear">Agregar al carrito</button></p>
      <p>{{mensaje}}</p>
  </div>
</template>

<script>
export default {
    name: 'producto-view',
    data(){
      return{
        mensaje: ''
      }
    },
    prop:{
      articulo:Object
    },
    methods:{
      loguear(){
        this.mensaje ="Logueado";
      }
    }
}
</script>

<style>

</style>