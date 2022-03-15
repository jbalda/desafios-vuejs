<template>
  <div>
      <h1>Listado de Productos</h1>
      <table>
          <thead>
            <tr><th>Titulo</th><th>Descripcion</th><th>Precio</th><th>Imagen</th><th></th></tr>
          </thead>
          <tbody>
              <tr v-for="(prod,index) in productos" :key="index">
                  <td>{{prod.titulo}}</td>
                  <td>{{prod.descripcion}}</td>
                  <td>{{prod.precio}}</td>
                  <td><img :src="prod.imagen"></td>
                  <td><button>Comprar</button></td>
              </tr>
          </tbody>
          
      </table>
  </div>
</template>

<script>
export default {
    name: 'listado-productos',
   
    props:{
        productos: Array
    }
}
</script>

<style>

</style>