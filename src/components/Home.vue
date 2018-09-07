<template>
    <div id="home" style="overflow:hidden">
        <menu-home style="margin-top:-1%"></menu-home>

        <div class="hidden-sm-and-up" style="margin-top:15%"></div>
        <el-row class="block" id="Slide" type="flex" justify="center" style="margin-top:3%">
            <el-col :xs="24" :sm="19">
                <swiper :options="swiperOptionHorizontal" dir="rtl">
                    
                    <!-- Logo -->
                    <swiper-slide class="swiper-item">
                        <el-col :span="24" class="principal">
                            <center><img :src="Logo" style="width:100%"></center>
                        </el-col>
                    </swiper-slide>

                    <!-- Diseño Gráfico -->
                    <swiper-slide class="swiper-item padding-0"> 
                        <el-row class="TextoVariable padding-0">
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
                        <el-row class="TextoVariable padding-0">
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
                        <el-row class="TextoVariable padding-0">
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

                </swiper>
            </el-col>
        </el-row>


        <!-- SERVICIOS -->
        <el-row id="Servicios" style="margin-top:50px; padding:0px !important">
            <div class="subtitulo">
                Nuestros Servicios
            </div>

            <swiper :options="swiperOptionVertical" class="swiper-box">
                <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-23%"></div>

                <!-- Diseño Gráfico -->
                <swiper-slide>
                    <el-col :xs="24" :sm="12" style="background:rgba(255,255,255,0.7); text-align:justify">
                        <div class="title" data-swiper-parallax="-1000">
                            <center>Diseño Gráfico</center>
                        </div>
                        <div class="text" data-swiper-parallax="-500">
                            <br>
                            "Lo que no se ve, no se vende" Por eso en la red MD nos apasiona el diseño, buscamos la 
                            originalidad y que tu marca te represente al 100% ya que es lo más importante de tu producto o 
                            servicio. La imagen corporativa es lo que te representa y habla por sí solo. Nuestro objetivo 
                            es que tu Marca provoque interés en tus clientes y transmita tus valores como empresa.<br><br>
                            Para ello contamos con un equipo de profesionales especializados para desarrollar estas tareas 
                            y brindarte el mejor asesoramiento.<br><br>
                            Tu imagen corporativa puede estar compuesta por uno o más elementos, que de manera conjunta o 
                            independiente todos cumplen una misma función: acentuar la gráfica y la solidez de tu marca, 
                            mediante la cual los usuarios puedan reconocer la filosofia de tu empresa.<br><br>
                            Elementos que podés encontrar en La Red MD: Diseño de marca, logo, isologotipo, papelería 
                            institucional: tarjetas personales, volantes, flyers digitales, banner, ilustración digital, 
                            catalogo virtual, etc.<br><br>
                            Nuestro deseo es lograr un impacto positivo de tu marca en la red. Somos una agencia creativa 
                            y moderna que busca adaptar tu imagen al contexto del mercado digital.
                            <br><br>
                        </div>
                    </el-col>
                </swiper-slide>

                <!-- Multimedia -->
                <swiper-slide>
                    <el-col :xs="24" :sm="12" style="background:rgba(255,255,255,0.7); text-align:justify">
                        <div class="title" data-swiper-parallax="-1000">
                            <center>Multimedia</center>
                        </div>
                        <div class="text" data-swiper-parallax="-500">
                            <br>
                            El desarrollo multimedia es una de las herramientas mas potentes para generar un gran impacto 
                            y posicionamiento de tu marca. Sabemos esto y tenemos la solución que buscas.<br><br>
                            En la Red MD creamos tu video institucional y/o promocional de tu marca.<br><br>
                            El mercado digital es un mercado en expansión y muy competitivo por ello para diferenciar 
                            tu marca o producto te brindamos una combinación de videos y animación digital proporcionándote 
                            toda la innovacion y creatividad.<br><br>
                            En el área multimedia nos ocupamos del diseño animado de tu logo creando una intro que te 
                            servira para expandir y fidelizar tu marca en las redes sociales.
                            <br><br>
                        </div>
                    </el-col>
                </swiper-slide>

                <!-- Diseño y Programación Web -->
                <swiper-slide>
                    <el-col :xs="24" :sm="12" style="background:rgba(255,255,255,0.7); text-align:justify">
                        <div class="title" data-swiper-parallax="-1000">
                            <center>Diseño y Programación Web</center>
                        </div>
                        <div class="text" data-swiper-parallax="-500">
                            <br>
                            Otras de las herramientas necesarias para incorporarse en el mercado digital es el sitio web, 
                            en la Red MD diseñamos tu pagina web con todo lo necesario para mantener la conexion las 24 
                            hs con tus clientes. Brindandote herramientas de inteligencia artificial y todo el analisis 
                            del sitio para que evalues el proceso.<br><br>
                            El Diseño Responsive es excluyente para que tu sitio se vea en los diferentes dispositivos 
                            (smathphone, tablets, pc). 
                            <br><br>
                        </div> 
                    </el-col>  
                </swiper-slide>

            </swiper>
        </el-row>

    </div>
</template>



<script>
    import MenuHome from './MenuHome.vue';

    export default
    {   ame: 'Home',

        components:
        {   MenuHome,
        },
        
        data()
        {   return {
                Logo:           'imagenes/Banner.png',
                DiseñoGrafico:  'imagenes/DiseñoGrafico.jpg',
                DiseñoWeb:      'imagenes/DiseñoWeb.jpg',
                Multimedia:     'imagenes/Multimedia.jpg',

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

                swiperOptionVertical: 
                {   slidesPerView: 1,
                    mousewheel: true,
                    speed: 1200,
                    autoplay: {
                        delay: 4000,
                    },                    
                    parallax: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                }
            };
        },
        
        mounted()
        {   var TamanioFuente = window.innerWidth * 40 / 1366;
            var aux = document.getElementsByClassName("TextoVariable");
            var i;
            for (i=0; i<aux.length; i++) 
            {   aux[i].style.fontSize = TamanioFuente + 'px';
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
    }

    .parallax-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 130%;
        height: 100%;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center;
        background-image: url("../assets/DiseñoWeb.jpg");
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