<template>
    <div id="asesoramiento">
        <Menu style="margin-top:-1%"></Menu>        
        <formulario-contacto></formulario-contacto>    
    </div>
</template>


<script>
    import FormularioContacto   from './FormularioContacto.vue';
    import Menu                 from './Menu.vue';
    import axios                from 'axios';
    
    
    export default
    {   name: 'Asesoramiento',

        components:
        {   FormularioContacto,
            Menu,
        },
        
        data()
        {   return { };
        }
    }
</script>


<style>   
</style>