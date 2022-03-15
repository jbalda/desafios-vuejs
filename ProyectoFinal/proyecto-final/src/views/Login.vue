<template>
  <div>
      <h1>Login</h1>
       <label for="txtNombre">Nombre de usuario</label>
      <input id="txtNombre" type="text" v-model="nombreUsuario"> <br>
      <label for="txtContr">Contraseña</label>
      <input id="txtContr" type="password" v-model="contraseña"> <br>
      <button v-on:click="ingresar">Ingresar</button>
      <label>{{mensaje}}</label>
  </div>
</template>

<script>
export default {
    name: 'login-usuario',
    data(){
        return {
            nombreUsuario:"",
            contraseña:"",
            mensaje:""
        };
    },
    methods:{
        ingresar(){

        }
    }
}
</script>

<style>

</style>