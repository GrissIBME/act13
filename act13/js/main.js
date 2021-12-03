Vue.component('autor',{
    props:['nombre', 'edad'],
    mounted(){
        //las props so  accesibles desde dis
        //console.log(this.nombre);
        console.log( typeof this.edad);
    },
    template: '<div><h1>{{ nombre }}</h1><button @click="cambiarProp">Cambiar Prop</button></div></',
    methods:{
   cambiarProp(){
       this.nombre = this.nombre.toUpperCase();
   },
    }
});
new Vue({
    el: 'main',
    data:{
        autor:'juan andres',
    },
});