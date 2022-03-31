<template>
    <table>
        <tr><th>Region</th><th>Cantidad</th><th>Donación</th><th>Detalle</th></tr>
        <tr v-for="expo in exportacions" :key="expo.index"> <td>{{expo.region}}</td><td>{{expo.cantidad}}</td><td>{{expo.donacion}}</td><td>{{expo.detalle}}</td></tr>
    </table>
  
</template>

<script>
export default {
    name:'lista-exportaciones',
    props:{
        exportacions: Array
    }

}
</script>

<style>

</style>