<template>
  <div>
      <h1>Registro</h1>
      <label for="nombre">Nombre</label>
      <input id="nombre" type="text" v-model="nombre"> <br>
      <label for="apellido">Apellido</label>
      <input id="apellido" type="text" v-model="apellid"> <br>
      <label for="nombreUsuario">Nombre de usuario</label>
      <input id="nombreUsuario" type="text" v-model="nombreUsuario"> <br>
      <label for="password">Contraseña</label>
      <input id="password" type="password" v-model="contraseña"> <br>
      <label for="passwordRep">Repita Contraseña</label>
      <input id="passwordRep" type="password" v-model="contraseñaRepetida"> <br>
      <button>Registrar</button>
  </div>
</template>

<script>
export default {
    name: 'registro-usuario',
    data(){
        return {
            nombreUsuario:"",
            contraseña:"",
            contraseñaRepetida:""
        };
    }
}
</script>

<style>

</style>