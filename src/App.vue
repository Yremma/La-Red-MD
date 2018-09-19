<template>
    <el-container id="app">
        <el-main v-bind:style="{ minHeight: Height + 'px' }" 
        style="padding:0px; margin-top:-8px; margin-right:-8px; margin-left:-8px">
            <router-view></router-view>
        </el-main>
        <el-footer style="padding:0px; margin-right:-8px; margin-left:-8px; height:0px">
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>



<script>
    import Footer   from './components/Footer.vue';

    export default
    {   components:
        {   Footer
        },

    
        data()
        {   return {
                Height: window.innerHeight * 72 / 100,
                Ancho:  window.innerWidth  * 97 / 100,
            }
        },


        methods:
        {   // FUNCION PARA CALCULAR SI SE GIRA EL CELULAR Y HACER REFRESH
            Calcular()
            {   if( (window.innerWidth*97/100)!=this.Ancho )
                {   location.reload();
                }   
            }        
        },
        
        
        beforeMount()
        {   this.Ancho  = window.innerWidth  * 97 / 100;
        },


        mounted()
        {   this.Calcular();
            setInterval(this.Calcular, 300);
        }
    }
</script>



<style>
    /*@import 'element-theme-default';*/
    /*@import 'https://cdn.jsdelivr.net/npm/element-ui/lib/theme-default/index.css';*/
</style>

<style>    
    #app
    {   -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei";*/
        font-family: 'Advent Pro', sans-serif;
    }
    body
    {   background: url("./assets/Fondo.png");
        background-attachment: fixed;
        background-position: bottom;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .titulo
    {   background: #788EDC;
        padding: 30px;
        margin-bottom: -30px;
        color: #fff;
        font-size: large;
        text-align: center;
        -webkit-box-shadow: 0px 2px 10px 0px rgba(50, 50, 50, 0.75);
        -moz-box-shadow:    0px 2px 10px 0px rgba(50, 50, 50, 0.75);
        box-shadow:         0px 2px 10px 0px rgba(50, 50, 50, 0.75);
        z-index: 1;
    }
    .subtitulo
    {   background: #545C64;
        color: #fff;
        padding: 15px;
        text-align: center;
        font-size: 25px;
        font-variant: small-caps;
    }
    .cuerpo
    {   padding: 50px 30px 30px 30px;
        border-radius: 0px;
        background-color: rgba(255, 255, 255, 0.35);
        -webkit-box-shadow: 0px 5px 20px 0px #666;
        -moz-box-shadow: 0px 5px 20px 0px #666;
        box-shadow: 0px 5px 20px 0px #666;
        text-align: justify;
    } 
    .el-col
    {   padding-left: 30px !important;
        padding-right: 30px !important;
    }

    a
    {   text-decoration: none;
    }
    th, tr
    {   text-align: center !important;
    }

    button, button:hover
    {   -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
        padding: 13px;
        border: none;
        font-size: 16px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 5px;
        margin-right: 5px;
        cursor: pointer;
        outline: none;
    }
    .BtnGris
    {   background: #545C64;
        color: #fff;        
    }
    .BtnGris:hover
    {   background: #909399;
    }
    .BtnNaranja 
    {   background: #f7b40c;
        color: #000;        
    }
    .BtnNaranja:hover
    {   background: #f4cc6e;
    }

    .el-message
    {   margin-top: 20%;
    }
    .el-message p
    {   font-size: 22px;
        font-family: 'Advent Pro', sans-serif;
    }



    /** DISPLAY ********************************************************************************************************/

    @media (max-width:767px)
    {	.hidden-xs
        {	display: none !important;
        }
        .visible-xs
        {	display: block !important;
        }
        .visible-sm
        {	display: none !important;
        }
        .visible-md
        {	display: none !important;
        }
        .visible-lg
        {	display: none !important;
        }
    }

    @media (min-width:768px) and (max-width:991px)
    {	.hidden-sm
        {	display: none !important
        }
        .visible-xs
        {	display: none !important;
        }
        .visible-sm
        {	display: block !important;
        }
        .visible-md
        {	display: none !important;
        }
        .visible-lg
        {	display: none !important;
        }
    }

    @media (min-width:992px) and (max-width:1199px)
    {	.hidden-md
        {	display: none !important
        }
        .visible-xs
        {	display: none !important;
        }
        .visible-sm
        {	display: none !important;
        }
        .visible-md
        {	display: block !important;
        }
        .visible-lg
        {	display: none !important;
        }
    }

    @media (min-width:1200px)
    {	.hidden-lg
        {	display: none !important
        }
        .visible-xs
        {	display: none !important;
        }
        .visible-sm
        {	display: none !important;
        }
        .visible-md
        {	display: none !important;
        }
        .visible-lg
        {	display: block !important;
        }
    }
    
</style>