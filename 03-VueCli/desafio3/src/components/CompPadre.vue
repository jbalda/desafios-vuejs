<template>
  <hijo :arreglo=arreglo :colorLetra=colorL :colorFondo=colorF ></hijo>
</template>

<script>
import Hijo from './CompHijo.vue'
export default {
    name: 'padre-nuestro',
    components: {
        Hijo
    },
    data(){
        return {'arreglo':[
            {nombre:'Juan',apellido:'Perez'},
            {nombre:'Ana',apellido:'Rodriguez'},
            {nombre:'Ernesto',apellido:'Martinez'},
            {nombre:'María',apellido:'Sartori'}
        ],
            'colorL':'text-success',
            'colorF':'bg-info'}
        ;
    }
}
</script>

<style>

</style>

