<template>
    <div id="trabajos">
        <el-row style="padding:0px !important">
            <div class="subtitulo">
                Nuestros Trabajos
            </div>

            <div style="padding:20px" align="center">
                <el-checkbox-button v-for="(item,index) in Categorias" :key="index" 
                v-model="item.Checked" value="item.Checked" checked="item.Checked">
                    {{ item.Categoria }}
                </el-checkbox-button> 
            </div>

            <div id="GridTrabajos">
                <div v-for="(item,index) in Imagenes" :key="index">
                    <div class="Trabajos" v-if="Categorias[item.FkCategoria-1].Checked" 
                    v-scroll-reveal.reset="{ delay: 250 }">
                        <img :src="'http://laredmd.com/' + item.URL" @click="AbrirGaleria(index)"/>
                    </div> 
                </div> 
            </div>

        </el-row>


        <!-- Modal Galeria -->
        <el-dialog :visible.sync="dialogVisible" width="90%" ref="ModalFotos" style="max-height:99vh; overflow:hidden">
            <swiper :options="swiperOption" dir="ltr" ref="mySwiper"> 
                <swiper-slide class="swiper-item" v-for="(item,index) in Imagenes" :key="index">
                    <center>
                        <img :src="'http://laredmd.com/' + item.URL" style="max-width:75vw; max-height:75vh"/>
                    </center>
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev"><i class="el-icon-arrow-left" ></i></div>
            <div class="swiper-button-next"><i class="el-icon-arrow-right"></i></div>   
        </el-dialog>

    </div>
</template>


<script>
    import axios    from 'axios';
    
    
    export default
    {   name: 'Trabajos',

        data()
        {   return { 
                Categorias:     [],
                Clientes:       [],
                Imagenes:       [],
                dialogVisible:  true,
                
                swiperOption: 
                {   slidesPerView: 1,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    effect: 'fade',
                    fadeEffect: {
                        crossFade: true
                    },
                    keyboard: {
                        enabled: true
                    },
                },
            };
        },


        methods: {
            AbrirGaleria(index)
            {   this.dialogVisible = true;
                var aux = this.$refs.mySwiper.swiper;
                aux.slideTo(index,1000,false);
            }          
        },


        beforeMount() 
        {   axios.get('http://laredmd.com/api/trabajos.php')
               .then((response) => {
                    const datos     = response.data;
                    this.Categorias = datos['Categorias'];
                    this.Clientes   = datos['Clientes'];
                    this.Imagenes   = datos['Imagenes'];
                })
                .catch(e => {
                    this.$message.error('Ha ocurrido un error. Por favor, intente nuevamente.');
                })
        },


        mounted() 
        {   this.dialogVisible = false;
            window.scrollTo(0,0);
        }
    }
</script>


<style>
    #trabajos
    {   background: url("./../assets/FondoVerde.jpg");
        background-attachment: fixed;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
    }
    #GridTrabajos 
    {   margin-bottom: 30px;
        margin-left: 3%;
        width: 96%;
        column-count: 5;
    }
    @media screen and (max-width: 900px) 
    {   #GridTrabajos 
        {   column-count: 4;
        }
    }
    @media screen and (max-width: 800px) 
    {   #GridTrabajos 
        {   column-count: 3;
        }
    }
    @media screen and (max-width: 500px) 
    {   #GridTrabajos 
        {   column-count: 2;
        }
    }

    .Trabajos 
    {   display: inline-block;
        padding-right: 10%;
        padding-left: 0%;
        padding-bottom: 10%;
        padding-top: 0%;
    }
    .Trabajos img
    {   width: 100%;
        border: 5px solid #fff;
        -webkit-box-shadow: 0px 10px 10px 0px rgba(50, 50, 50, 0.75);
        -moz-box-shadow:    0px 10px 10px 0px rgba(50, 50, 50, 0.75);
        box-shadow:         0px 10px 10px 0px rgba(50, 50, 50, 0.75);
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out; 
    }
    .Trabajos:hover img
    {   filter: sepia(100%) saturate(6);
        cursor: pointer;
    }


    .el-checkbox-button.is-checked .el-checkbox-button__inner
    {   background-color: #F9B233;
        color: #545C64;
        border: 1px solid #F9B233;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 5, 2, 1);
        -moz-box-shadow:    0px 0px 10px 0px rgba(0, 5, 2, 1);
        box-shadow:         0px 0px 10px 0px rgba(0, 5, 2, 1);
    }
    .el-checkbox-button:hover .el-checkbox-button__inner
    {   color: #fff;
    }
    .el-checkbox-button .el-checkbox-button__inner
    {   background-color: rgba(255,255,255,.5);
        color: #000;
        border: 1px solid #F9B233;
        font-weight: bold;
        font-size: small;
        margin-bottom: 5px;
        margin-right: 5px;
        border-radius: 5px;
        padding: 8px;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 5, 2, 1);
        -moz-box-shadow:    0px 0px 10px 0px rgba(0, 5, 2, 1);
        box-shadow:         0px 0px 10px 0px rgba(0, 5, 2, 1);
    }
    .el-checkbox-button:first-child .el-checkbox-button__inner, 
    .el-checkbox-button:last-child .el-checkbox-button__inner, 
    .el-checkbox-button.is-checked:first-child .el-checkbox-button__inner, 
    .el-checkbox-button.is-checked:last-child .el-checkbox-button__inner
    {   border: 1px solid #F9B233;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 5, 2, 1) !important;
        -moz-box-shadow:    0px 0px 10px 0px rgba(0, 5, 2, 1) !important;
        box-shadow:         0px 0px 10px 0px rgba(0, 5, 2, 1) !important;
    }
    

    .swiper-button-prev, .swiper-button-next
    {   background-color: rgba(0,0,0,.3);
        outline: none;
        background-image: none;
        height: 40px;
        width: 40px;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out; 
        text-align: center;
        vertical-align: middle;
        color: #fff;
        font-weight: bold;
        font-size: 30px;
    }
    .swiper-button-prev:hover, .swiper-button-next:hover
    {   background-color: rgba(0,0,0,.4);
    }
    .swiper-button-prev
    {   padding-top: 10px;
        padding-bottom: 10px;   
        padding-right: 10px;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        margin-left: -10px;
    }
    .swiper-button-next
    {   padding-top: 10px;
        padding-bottom: 10px;   
        padding-left: 10px;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;  
        margin-right: -10px;
    }
</style>