<template>
    <div>
        <form @submit="procesarFormulario">
            <p><label for="region">Region</label><select id="region" v-model="region">
                <option v-for="region in regiones" v-bind:value="region.numero" v-bind:key="region.nombre">{{region.nombre}}</option>
                </select></p>
            <p><label for ="cantidad">Cantidad de exportación</label> <input id="cantidad" type="number" v-model.number="cantidad"> </p>
            <p><label for="donacion">Donación</label><input type="checkbox" v-model="donacion"> </p>
            <p><label for="detalle">Detalle</label><textarea id="detalle" v-model="detalle" ></textarea></p>
            <button v-on:enter="procesarFormulario">Aceptar</button>
            <div v-if="errors.length >0">
                <p>Errores:</p>
                <ul>
                  <li v-for="error in errors" :key="error">{{error}}</li>
                </ul>
            </div>
        </form>
        <listado-exp :exportacions="exportaciones"></listado-exp>
    </div>
</template>

<script>
import ListadoExp from './ListaExportaciones.vue';

export default {
    name: 'formulario-alta',
    components: {
        ListadoExp
    },
    data(){
        return{
            region:"",
            cantidad : 0,
            donacion : false,
            detalle :"",
            regiones :[
                {numero:1,nombre:"Local"},
                {numero:2,nombre:"Mercosur"},
                {numero:3,nombre:"Internacional"}
            ],
            errors:[],
            exportaciones:[]
        }
    },
    methods:{
        procesarFormulario(e){
             this.errors=[];
            this.validarFormulario();
            if(this.errors.length==0){
                this.exportaciones.push({region:this.region,cantidad:this.cantidad,donacion:this.donacion,detalle:this.detalle});
                console.log(this.exportaciones);
                this.region="";
                this.cantidad =0;
                this.donacion = false;
                this.detalle="";
            }
            e.preventDefault();
        },
        validarFormulario(){
            if(this.region===''){this.errors.push('Debe ingresar la región')}
            if(this.cantidad ===0){this.errors.push('Debe ingresar la cantidad')}
            if(this.detalle===''){this.errors.push('Debe ingresar el detalle')}
        }
    }

}
</script>

<style>

</style>