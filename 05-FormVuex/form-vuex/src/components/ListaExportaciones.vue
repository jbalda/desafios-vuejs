<template>
    <table>
        <tr><th>Region</th><th>Cantidad</th><th>Donación</th><th>Detalle</th></tr>
        <tr v-for="expo in exportaciones" :key="expo.index"> 
            <td>{{expo.region.nombre}}</td><td>{{expo.cantidad}}</td><td>{{expo.donacion}}</td><td>{{expo.detalle}}</td></tr>
    </table>
  
</template>

<script>
import  {mapState, mapActions} from 'vuex';

export default {
    name:'lista-exportaciones',
    computed:{
        ...mapState([
            'exportaciones'
        ])
    },
    methods:{
        ...mapActions(['obtenerExportaciones'])
    },
    created (){
        this.obtenerExportaciones();
    }

}
</script>

<style>

</style>