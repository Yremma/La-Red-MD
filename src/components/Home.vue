<template>
    <div id="home" style="overflow:hidden">

        <!-- Menú -->
        <Menu style="margin-top:-1%"></Menu>

        <!-- CUBO que gira con frases célebres -->
        <cubo></cubo>

        <!-- SERVICIOS -->
        <servicios></servicios>

        <!-- TRABAJOS -->
        <trabajos></trabajos>

    </div>
</template>



<script>
    import Cubo         from './HomeCubo.vue';
    import Menu         from './Menu.vue';
    import Servicios    from './HomeServicios.vue';    
    import Trabajos     from './HomeTrabajos.vue';


    export default
    {   name: 'Home',

        components:
        {   Cubo,
            Menu,
            Servicios,
            Trabajos
        },
        
        data()
        {   
        },
    }
</script>



<style>
</style>