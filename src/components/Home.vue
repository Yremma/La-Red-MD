<template>
    <div id="home" style="overflow:hidden">

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
    import Galeria      from './Galeria.vue';
    import MenuHome     from './MenuHome.vue';
    import Servicios    from './Servicios.vue';


    export default
    {   name: 'Home',

        components:
        {   Cubo,
            Galeria,
            MenuHome,
            Servicios
        },
        
        data()
        {   
        },
    }
</script>



<style>
</style>