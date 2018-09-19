<template>
    <div class="menu" id="menuhome">

        <!-- MENU PANTALLAS --> 
        <el-menu class="hidden-xs-only" mode="horizontal" background-color="#545c64" text-color="#E7A905" active-text-color="#E7A905" style="padding-top:10px">
            <el-menu-item index="4" style="float:right" v-on:click="ir_a('footer')"     >Contacto           </el-menu-item>            
            <el-menu-item index="2" style="float:right" v-on:click="dialogVisible=true" >Asesoramiento      </el-menu-item>
            <el-menu-item index="5" style="float:right" v-on:click="ir_a('Trabajos')"   >Portfolio          </el-menu-item>
            <el-menu-item index="3" style="float:right" v-on:click="ir_a('Servicios')"  >Servicios          </el-menu-item>
            <el-menu-item index="1" style="float:right" v-on:click="ir_a('Slide')"      >Inicio             </el-menu-item>  
        </el-menu>

        <!-- MENU CELULARES -->
        <el-collapse class="hidden-sm-and-up" style="margin-left:0px">
            <el-collapse-item>
                <template slot="title">
                    <i class="el-icon-menu"></i>&nbsp;&nbsp;&nbsp;<strong>Menú</strong>
                </template>
                <div class="el-col el-col-24" style="float:right" v-on:click="ir_a('Slide')"      >Inicio           </div>
                <div class="el-col el-col-24" style="float:right" v-on:click="ir_a('Servicios')"  >Servicios        </div>
                <div class="el-col el-col-24" style="float:right" v-on:click="ir_a('Trabajos')"   >Portfolio        </div>
                <div class="el-col el-col-24" style="float:right" v-on:click="dialogVisible=true" >Asesoramiento    </div>                
                <div class="el-col el-col-24" style="float:right" v-on:click="ir_a('footer')"     >Contacto         </div>
            </el-collapse-item>
        </el-collapse>


        <!-- Modal Soporte -->
        <el-dialog
            :visible.sync="dialogVisible"
            width="90%"
            style="background:#545C64">
            <formulario-contacto></formulario-contacto>
        </el-dialog>

    </div>
</template>


<script>
    import FormularioContacto   from './FormularioContacto.vue';
    
    
    export default
    {   name: 'MenuHome',

        components:
        {   FormularioContacto
        },
        
        data()
        {   return { 
                dialogVisible:  false,
            };
        },

        methods: {
            ir_a(id)
            {   document.getElementById(id).scrollIntoView({ 
                    behavior: 'smooth' 
                });
            },

            Cerrar()
            {   this.dialogVisible = false;
            },
        }
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
    }
    .el-dialog__header
    {   text-align: center; 
        font-size: 25px; 
        font-variant: small-caps; 
        font-weight: bold;
    }

    .el-dialog__body #contacto
    {   margin-top: -5%;
    }

    .el-dialog__headerbtn
    {   z-index: 999;
    }

    .el-dialog__headerbtn:hover
    {   padding: 0px;
    }
</style>