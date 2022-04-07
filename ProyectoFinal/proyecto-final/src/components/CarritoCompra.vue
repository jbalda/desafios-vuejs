<template>
  <div>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Nombre Producto
          </th>
          <th class="text-left">
            Precio
          </th>
          <th class="text-left">
            Cantidad
          </th>
          <th class="text-left">
            Subtotal
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in carrito"
          :key="item.name"
        >
          <td>{{ item.producto.titulo}}</td>
            <td>{{ item.producto.precio}}</td>
            <td>{{ item.cantidad }}</td>
             <td>{{ item.cantidad * item.producto.precio}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <label>TOTAL</label><label>{{total}}</label>
  <div>
       <v-btn
      depressed
      color="primary"
    >
    Comprar
    </v-btn>
  </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'carrito-compra',
    computed:{
      ...mapState([
        'carrito'
      ]),
      total: function(){
          return this.carrito.reduce((total,elem)=>total +(elem.cantidad * elem.producto.precio),0);
      }
    },
}
</script>

<style>

</style>