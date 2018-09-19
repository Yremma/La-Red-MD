<template>
    <div id="cubo"> 
        <div class="hidden-sm-and-up" style="margin-top:15%"></div>
        <el-row class="block" id="Slide" type="flex" justify="center" style="margin-top:3%">
            <el-col :xs="24" :sm="19">
                <swiper :options="swiperOptionHorizontal" dir="rtl">
                    
                    <!-- Logo -->
                    <swiper-slide class="swiper-item" :class="ClaseLogo">
                        <el-col :span="24" class="principal">
                            <center><img :src="Logo" style="width:100%"></center>
                        </el-col>
                    </swiper-slide>

                    <!-- Diseño Gráfico -->
                    <swiper-slide class="swiper-item padding-0"> 
                        <el-row class="padding-0">
                            <el-col :span="24" class="fondo">
                                <img :src="DiseñoGrafico"/>
                            </el-col>
                            <el-col :span="24" class="frase">
                                <center><h2 style="font-variant:small-caps; font-family:'Advent Pro', sans-serif">Diseño Gráfico</h2></center>
                                <hr>
                                <center>El diseño es el embajador<br>silencioso de tu marca<br><br></center>
                                Paul Brand
                            </el-col>
                        </el-row>
                    </swiper-slide>

                    <!-- Multimedia -->
                    <swiper-slide class="swiper-item padding-0"> 
                        <el-row class="padding-0">
                            <el-col :span="24" class="fondo">
                                <img :src="Multimedia"/>
                            </el-col>
                            <el-col :span="24" class="frase">
                                <center><h2 style="font-variant:small-caps; font-family:'Advent Pro', sans-serif">Multimedia</h2></center>
                                <hr>
                                <center>La creatividad es contagiosa<br>Pásala<br><br></center>
                                Albert Einstein
                            </el-col>
                        </el-row>
                    </swiper-slide>

                    <!-- Diseño Web -->
                    <swiper-slide class="swiper-item padding-0"> 
                        <el-row class="padding-0">
                            <el-col :span="24" class="fondo">
                                <img :src="DiseñoWeb"/>
                            </el-col>
                            <el-col :span="24" class="frase">
                                <center><h2 style="font-variant:small-caps; font-family:'Advent Pro', sans-serif">Diseño Web</h2></center>
                                <hr>
                                <center>El Internet es tan grande, tan poderoso y sin sentido que para algunas personas es un sustituto completo para toda la vida<br><br></center>
                                Andrew Brown
                            </el-col>
                        </el-row>
                    </swiper-slide>

                    <!-- Community Manager -->
                    <swiper-slide class="swiper-item padding-0"> 
                        <el-row class="padding-0">
                            <el-col :span="24" class="fondo">
                                <img :src="SocialMedia"/>
                            </el-col>
                            <el-col :span="24" class="frase">
                                <center><h2 style="font-variant:small-caps; font-family:'Advent Pro', sans-serif">Community Manager</h2></center>
                                <hr>
                                <center>En el pasado, eras lo que tenías. Ahora eres lo que compartes<br><br></center>
                                Godfried Bogaard
                            </el-col>
                        </el-row>
                    </swiper-slide>

                </swiper>
            </el-col>
        </el-row>
    </div>
</template>



<script>
    export default
    {   name: 'Cubo',
        
        data()
        {   return {
                Logo:           'imagenes/Banner.png',
                DiseñoGrafico:  'imagenes/DiseñoGrafico.jpg',
                DiseñoWeb:      'imagenes/DiseñoWeb.jpg',
                Multimedia:     'imagenes/Multimedia.jpg',
                SocialMedia:    'imagenes/CommunityManager.jpg',
                Alto:           '',
                Ancho:          '',
                ClaseLogo:      '',

                swiperOptionHorizontal: 
                {   /*direction: 'vertical',  */
                    slidesPerView: 1,
                    mousewheel: true,
                    speed: 1200,
                    loop: true,
                    autoplay: {
                        delay: 3000,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    effect: 'cube',
                    cubeEffect: {
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94
                    },
                },
            };
        },
        

        beforeMount()
        {   this.Alto   = window.innerHeight;
            this.Ancho  = window.innerWidth;
            if(this.Alto>this.Ancho)  
            {    this.ClaseLogo = 'padding-0';
            }
        }
    }
</script>



<style>
    .principal
    {   padding: 5%; 
        -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 1);
        -moz-box-shadow:    0px 0px 20px 0px rgba(0, 0, 0, 1);
        box-shadow:         0px 0px 20px 0px rgba(0, 0, 0, 1);
    }

    .swiper-item 
    {   display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        color: #fff !important;
        background-size: cover;
        color:#000;
        font-weight: bold;
        text-shadow: 0px 5px 10px rgba(0,0,0,1);
    }

    .swiper-slide 
    {   -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 40px 60px;
        background-color: transparent!important;
        justify-content: space-around!important;
    }

    .fondo
    {   padding: 0px !important;
    }
    .fondo img
    {   width: 100%;
        opacity: 0.7;
    }
    .frase
    {   position: absolute;
        height: 100%;
        font-weight: 300;
        background-color: rgba(84,92,100,0.3);
        font-family: 'Pacifico', cursive;
        font-size: 3vw;
    }
    
    .swiper-slide .title {
        font-size: 41px;
        font-weight: 700;
        font-variant: small-caps;
    }
    .swiper-slide .text {
        font-size: 16px;
        line-height: 1.3;
    }

    .padding-0
    {   padding: 0px !important;
    }
</style>