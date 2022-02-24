Vue.component('hijo',
{
    template: //html
    `
        <table :class="[colorFondo, colorLetra]" class="table">
            <tr><th>Nombre</th><th>Apellido</th></tr>
            <tr  v-for="item in arreglo">
                <td>{{item.nombre}}</td>
                <td>{{item.apellido}}</td>
            </tr>
        </table>
    `,
    props:['arreglo','colorLetra','colorFondo']
});