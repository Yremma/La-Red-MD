<template>
    <div id="servicios" style="overflow:hidden">
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

                <!-- Community Manager -->
                <swiper-slide>
                    <el-col :xs="24" :sm="12" style="background:rgba(255,255,255,0.7); text-align:justify">
                        <div class="title" data-swiper-parallax="-1000">
                            <center>Community Manager</center>
                        </div>
                        <div class="text" data-swiper-parallax="-500">
                            <br>
                            En esta era digital, no es suficiente estar sólo presente en el mundo offline. Hace 
                            tiempo, el Marketing en las Redes Sociales es una pieza fundamental de cualquier 
                            estrategia de ventas y desgraciadamente, no cualquier usuario de internet posee el 
                            conjunto de habilidades y destrezas necesarias para trabajar en ello.<br><br>
                            Por eso, en La Red MD contamos con un equipo de profesionales con la empatía, creatividad 
                            e ingenio necesarias para poder impulsar tu marca y alzarla al éxito en las Redes Sociales.
                            <br><br>
                        </div> 
                    </el-col>  
                </swiper-slide>

            </swiper>
        </el-row>
    </div>
</template>



<script>

    export default
    {   name: 'Servicios',

        data()
        {   return {
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
    }
</script>



<style>
    .swiper-slide 
    {   -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 40px 60px;
        background-color: transparent!important;
        justify-content: space-around!important;
    }

    .parallax-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 130%;
        height: 100%;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: top;
        background-image: url("../assets/Manos.png");
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
</style>