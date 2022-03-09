<template>
  <table :class="[colorFondo, colorLetra]" class="table">
            <tr><th>Nombre</th><th>Apellido</th></tr>
            <tr v-for="(item, index) in arreglo" :key="index">
                <td>{{item.nombre}}</td>
                <td>{{item.apellido}}</td>
            </tr>
 </table>
</template>

<script>
export default {
    name: 'hijo-nuestro',
    props:{
        'arreglo':Array,
        'colorLetra': String,
        'colorFondo': String
    }
}
</script>

<style>

</style>


