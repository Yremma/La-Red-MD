<template>
    <div id="home" style="overflow:hidden">

        <!-- Cargando -->
        <div id="divCargando">
            <center><img src="http://laredmd.com/imagenes/loading.svg"/></center>
            <div>Cargando...</div>
        </div>        
        
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
        
        methods:
        {   NoCargar()
            {   var c = document.getElementById('divCargando').style;
                c.opacity = 1;
                (function fade(){(c.opacity-=.1)<0?c.display="none":setTimeout(fade,40)})();
            }      
        },


        mounted()
        {   setTimeout(this.NoCargar, 8000);
        },
    }
</script>



<style>
    #divCargando
    {   background: #003f3f;
        background: -moz-radial-gradient(center, ellipse cover, #003f3f 1%, #007f7f 60%, #00bfbf 100%);
        background: -webkit-radial-gradient(center, ellipse cover, #003f3f 1%,#007f7f 60%,#00bfbf 100%);
        background: radial-gradient(ellipse at center, #003f3f 1%,#007f7f 60%,#00bfbf 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#003f3f', endColorstr='#00bfbf',GradientType=1 );
        width: 100vw;
        height: 100vh;
        top: 0px;
        z-index: 99999;
        position: fixed;
    }
    #divCargando img
    {   width: 50vh;
        margin-top: 25vh;
    }
    #divCargando div
    {   text-align: center;
        color: #fff;
        font-weight: bold;
        font-size: x-large;
        margin-top: -27vh;
    }
</style>