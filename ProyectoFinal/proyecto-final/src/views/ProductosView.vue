<template>
  <div>
      <h1>Listado de Productos</h1>
      <listado-productos :productos="productos"></listado-productos>
  </div>
</template>

<script>
import ListadoProductos from '../components/ListadoProductos.vue';

export default {
   name: 'productos-view',
   components:{ListadoProductos},
   data(){
     return{
       productos:[
         {numero:1,titulo:'Manzana', precio:20,descripcion:'Muy rica',
         'imagenes':['https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=',
         'https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=']},
         {numero:2,titulo:'Banana', precio:120,descripcion:'ecuatoriana grande',
         'imagenes':['https://imagenes.elpais.com/resizer/ZDBbevniCA5LT-TvUOLCWgzAZ9E=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/HE3SMC3L7Z7XENXLHLLKE3CDEA.jpg',
         'https://mejorconsalud.as.com/wp-content/uploads/2016/12/bananas-amarillas-500x334.jpg' ]},
         {numero:3,titulo:'Naranja', precio:60,descripcion:'Con mucha vitamina C',
         'imagenes':['https://i0.wp.com/historiasdelahistoria.com/wordpress-2.3.1-ES-0.1-FULL/wp-content/uploads/2015/11/naranja.jpg?ssl=1',
         'https://www.cocinayvino.com/wp-content/uploads/2016/12/51223844_l-e1483037369258.jpg' ]},
       ]
     }
   }
}
</script>

<style>

</style>