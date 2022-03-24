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

const axios = require('axios');

export default {
    name: 'login-usuario',
    data(){
        return {
            nombreUsuario:"",
            contraseña:"",
            mensaje:"",
            usuariosPrueba: [{nombreUsuario:"baldassini@gmail.com",clave:"123"}]
        };
    },
    methods:{
        ingresar(){
            const res;
            axios.get('https://602ee9da4410730017c51705.mockapi.io/api/v1/usuarios')
                .then((response) => {res = response.data})
                .catch((err) => {console.error(`${err}`)})


            const usu = res.find(u=> u.nombreUsuario = this.nombreUsuario && u.clave == this.contraseña); //this.usuariosPrueba.find(u=> u.nombreUsuario = this.nombreUsuario && u.clave == this.contraseña);
            if(usu){
                this.$router.push("/productos");
            }
            this.mensaje="Error";
        }

    }
}
</script>

<style>

</style>