<template>
    <div id="prueba" style="overflow:hidden">


        <!-- Menú -->
        <menu-home style="margin-top:-1%"></menu-home>

        <!-- CUBO que gira con frases célebres -->
        <cubo></cubo>

        <!-- SERVICIOS -->
        <servicios></servicios>

        <!-- GALERIA -->
        <galeria></galeria>

    </div>
</template>



<script>
    import Cubo         from './Cubo.vue';
    import MenuHome     from './MenuHome.vue';
    import Servicios    from './Servicios.vue';
    import Galeria      from './Galeria.vue';


    export default
    {   name: 'Prueba',

        components:
        {   Cubo,
            MenuHome,
            Servicios,
            Galeria
        },
        
        data()
        {   
        },
    }
</script>



<style>
</style>