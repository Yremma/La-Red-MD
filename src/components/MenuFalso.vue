<template>
    <div class="menu" id="menufalso">

        <!-- MENU PANTALLAS --> 
        <el-menu class="hidden-xs-only" mode="horizontal" background-color="#545c64" text-color="#E7A905" active-text-color="#E7A905" style="padding-top:10px">
            <el-menu-item index="4" style="float:right" v-on:click="ir_a('footer')"                     >Contacto           </el-menu-item>            
            <el-menu-item index="2" style="float:right"><router-link :to="{ name: 'asesoramiento' }"    >Asesoramiento      </router-link></el-menu-item>
            <el-menu-item index="1" style="float:right"><router-link :to="{ name: 'home' }"             >Inicio             </router-link></el-menu-item>  
        </el-menu>

        <!-- MENU CELULARES -->
        <el-collapse class="hidden-sm-and-up" style="margin-left:0px">
            <el-collapse-item>
                <template slot="title">
                    <i class="el-icon-menu"></i>&nbsp;&nbsp;&nbsp;<strong>Menú</strong>
                </template>
                <div class="el-col el-col-24" style="float:right"><router-link :to="{ name: 'home' }"           >Inicio           </router-link></div>
                <div class="el-col el-col-24" style="float:right"><router-link :to="{ name: 'asesoramiento' }"  >Asesoramiento    </router-link></div>                
                <div class="el-col el-col-24" style="float:right" v-on:click="ir_a('footer')"                   >Contacto         </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>


<script>
    import axios from 'axios';
    
    
    export default
    {   name: 'MenuFalso',

        data()
        {   return { };
        },

        methods: {
            ir_a(id)
            {   document.getElementById(id).scrollIntoView({ 
                    behavior: 'smooth' 
                });
            },
        },
    }
</script>


<style>
    .el-collapse-item__header
    {   background: #545C64;
        color: #E7A905;
        font-weight: bold;
    }
    .el-collapse-item__wrap
    {   background: #6b757f;        
        font-weight: bold;
        padding: 0px;
    }
    .el-collapse-item__wrap div
    {   padding: 0px;
    }
    .el-collapse-item__wrap div div
    {   background: #6b757f;        
        color: #E7A905;
        width: 100%;
        border: none;
        padding-left: 40px !important;
        font-size: 13px;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    .el-collapse-item__wrap div div:hover
    {   background: #545C64;       
        color: #E7A905;
        border-bottom: 2px solid #E7A905;
        padding-left: 60px !important;
        font-size: 15px;
        cursor: pointer;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    .el-collapse-item__wrap div div a 
    {   color: #E7A905;
    }

    .menu 
    {   position: fixed;
        top: 0;
        width: 100%;
        z-index: 9999;
    }

    .el-dialog
    {   margin-left: 0px;
        margin-top: 5% !important;
        margin-bottom: 5% !important;
        background: url("../assets/Fondo.png");
        background-position: bottom;
        background-size: cover;
    }
    .el-dialog__header
    {   text-align: center; 
        font-size: 25px; 
        font-variant: small-caps; 
        font-weight: bold; 
    }
</style>