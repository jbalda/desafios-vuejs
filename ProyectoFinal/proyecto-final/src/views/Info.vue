<template>
  <div>
      <button>Volver</button>
      <h1>Info de Producto</h1>
      <!-- <p>{{articulo.titulo}}</p>
      <p>{{articulo.precio}}</p>
      <p>{{articulo.descripcion}}</p>
      <p>{{articulo.imagen}}</p> -->
      <p><button>Agregar al carrito</button></p>
  </div>
</template>

<script>
export default {
    name: 'info-producto',
    prop:{
      articulo:Object
    }
}
</script>

<style>

</style>