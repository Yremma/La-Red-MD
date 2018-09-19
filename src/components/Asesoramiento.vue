<template>
    <div id="asesoramiento">
        <menu-falso style="margin-top:-1%"></menu-falso>        
        <formulario-contacto></formulario-contacto>    
    </div>
</template>


<script>
    import FormularioContacto   from './FormularioContacto.vue';
    import MenuFalso            from './MenuFalso.vue';
    import axios                from 'axios';
    
    
    export default
    {   name: 'Asesoramiento',

        components:
        {   FormularioContacto,
            MenuFalso,
        },
        
        data()
        {   return { };
        }
    }
</script>


<style>   
</style>