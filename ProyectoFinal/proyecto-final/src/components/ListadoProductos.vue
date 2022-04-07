<template>
  <div>
    <v-container>
      <v-row>
        <!-- <v-col-sm v-for="prod in productos" :key="prod.titulo"> -->
          <div v-for="prod in productos" :key="prod.titulo">
          <v-card 
            class=" my-12"
            max-width="374">
            <item-listado-productos :producto="prod"></item-listado-productos>
               </v-card>
               </div>
    <!-- </v-col-sm> -->

      </v-row>
      </v-container>
  </div>
</template>

<script>
import ItemListadoProductos from './ItemListadoProductos.vue';
import {mapState, mapActions} from 'vuex';

export default {
   name: 'ListadoProductos',
   components:{
     ItemListadoProductos
   },
   computed:{
     ...mapState([
       'productos'
     ])
   },
   methods:{
     ...mapActions([
       'obtenerProductos'
     ])
   },
   created(){
     this.$store.dispatch( 'obtenerProductos');
   }
   

}
</script>

<style>

</style>