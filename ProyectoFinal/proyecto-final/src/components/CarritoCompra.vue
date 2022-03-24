<template>
  <div>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Numero
          </th>
          <th class="text-left">
            Titulo
          </th>
          <th class="text-left">
            Precio
          </th>
          <th class="text-left">
            Cantidad
          </th>
          <th class="text-left">
            Subtotal
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.name"
        >
          <td>{{ item.numero }}</td>
          <td>{{ item.titulo }}</td>
            <td>{{ item.precio}}</td>
            <td>{{ item.cantidad }}</td>
             <td>{{ item.subtotal }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <label>TOTAL</label><label>   {{total}}</label>
  <div>
       <v-btn
      depressed
      color="primary"
    >
    Comprar
    </v-btn>
  </div>
  </div>
</template>

<script>
export default {
    name: 'carrito-compra',
    data(){
      return{
        items: [
         {numero:1,titulo:'Manzana', precio:20,descripcion:'Muy rica', cantidad:3, subtotal:60,
         'imagenes':['https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=',
         'https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=']},
         {numero:2,titulo:'Banana', precio:120,descripcion:'ecuatoriana grande', cantidad:1, subtotal:120,
         'imagenes':['https://imagenes.elpais.com/resizer/ZDBbevniCA5LT-TvUOLCWgzAZ9E=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/HE3SMC3L7Z7XENXLHLLKE3CDEA.jpg',
         'https://mejorconsalud.as.com/wp-content/uploads/2016/12/bananas-amarillas-500x334.jpg' ]},
         {numero:3,titulo:'Naranja', precio:60,descripcion:'Con mucha vitamina C', cantidad:4, subtotal:240,
         'imagenes':['https://i0.wp.com/historiasdelahistoria.com/wordpress-2.3.1-ES-0.1-FULL/wp-content/uploads/2015/11/naranja.jpg?ssl=1',
         'https://www.cocinayvino.com/wp-content/uploads/2016/12/51223844_l-e1483037369258.jpg' ]},
       ],
       total: 500
      }
    },
}
</script>

<style>

</style>