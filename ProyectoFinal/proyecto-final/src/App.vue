<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Frutilandia Logo"
          class="shrink mr-2"
          contain
          src="https://img2.freepng.es/20190125/sio/kisspng-fruits-vegetable-fruits-vegetable-logo-image-guia-hortifrti-campinas-google-play-5c4b8633df03c3.7805490115484534279135.jpg"
          transition="scale-transition"
          width="40"
        />
        <v-app-bar-title>Frutilandia</v-app-bar-title>
        
      </div>

      <v-spacer></v-spacer>
       <v-btn to="/" text>Hello</v-btn> 
      <v-btn to="/productos" text>Listado</v-btn>
      <v-btn to="/producto" text>Info</v-btn>
      <v-btn to="/login" text>Login</v-btn>
      <v-btn to="/registro" text>Registro</v-btn>
      <v-btn to="/carrito" text>Carrito</v-btn>

      
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
