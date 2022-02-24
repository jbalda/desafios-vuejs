Vue.component('padre',
{
    template: //html
    `
       <hijo :arreglo=arreglo :colorLetra=colorL :colorFondo=colorF ></hijo>
    `,
    
    data(){
        return {'arreglo':[
            {nombre:'Juan',apellido:'Perez'},
            {nombre:'Ana',apellido:'Rodriguez'},
            {nombre:'Ernesto',apellido:'Martinez'},
            {nombre:'María',apellido:'Sartori'}
        ],
            'colorL':'text-success',
            'colorF':'bg-info'};
    }

});