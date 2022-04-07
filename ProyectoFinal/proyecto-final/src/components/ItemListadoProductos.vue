<template>
  <div>
    <v-img :src="producto.imagenes[0]" height="250"> </v-img>
    <v-card-title>{{ producto.titulo }}</v-card-title>
    <v-card-text>
      {{ producto.descripcion }}
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <p>
           <v-row align="center" justify="space-around">
        <input type="number" v-model="cantidad" />
           </v-row>
        <v-row align="center" justify="space-around">
          <v-btn @click="decrementarCantidad">-</v-btn>
          <v-btn @click="incrementarCantidad">+</v-btn>
        </v-row>
      </p>
      <v-divider class="mx-4"></v-divider>
      <p>
      <v-row align="center" justify="space-around">
        <v-btn :to="{ name: 'producto', params: { id: producto.numero } }"
          >Detalle</v-btn
        >
        <v-btn @click="agregarAlCarrito"
          >Agregar al carrito</v-btn>
      </v-row>
      </p>
    </v-card-actions>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ItemListadoProductos",
  props: {
    producto: Object,
  },
  data() {
    return {
      cantidad: 0,
    };
  },
  methods: {
    ...mapMutations(["agregarItemAlCarrito"]),
    incrementarCantidad() {
      this.cantidad++;
    },
    decrementarCantidad() {
      this.cantidad > 0 ? this.cantidad-- : (this.cantidad = 0);
    },
    agregarAlCarrito(){
        console.log(this.cantidad);
        this.agregarItemAlCarrito({"producto":this.producto,"cantidad":this.cantidad});
    }
  },
};
</script>

<style>
</style>