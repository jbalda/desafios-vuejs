<template>
  <div>
    <v-container>
      <v-row>
        <v-col-sm v-for="(prod) in productos" :key="prod">
            <v-card   :loading="loading"
            class=" my-12"
            max-width="374">
              <v-img :src="prod.imagenes[0]" height="250">

              </v-img>
              <v-card-title>{{prod.titulo}}</v-card-title>
              <v-card-text>
                {{prod.descripcion}}
              </v-card-text>
              <v-card-actions>
                <v-btn :to="{name: 'producto', params:{id:prod.numero}}">Detalle</v-btn>
              </v-card-actions>
            </v-card>
    </v-col-sm>

      </v-row>
      </v-container>
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