<template>
  <div>
      <lista-exportaciones></lista-exportaciones>
  </div>
</template>

<script>
import ListaExportaciones from '../../../../04-Formulario/desafio-4-formulario/src/components/ListaExportaciones.vue'
import Formulario from '../components/ListaExportaciones.vue'
export default {
    name: 'ListdoView',
    components:{Formulario, ListaExportaciones}
}
</script>

<style>

</style>