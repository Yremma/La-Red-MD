<template>
    <div id="galeria">
        <swiper :options="swiperOption" dir="ltr">
            <swiper-slide class="swiper-item" v-for="(item,index) in Imagenes" :key="index">
                <center>
                    <img :src="'http://laredmd.com/' + item.URL" style="max-width:90vw; max-height:90vh"/>
                </center>
            </swiper-slide>
        </swiper>

        <div class="swiper-button-prev"><i class="el-icon-arrow-left"></i></div>
        <div class="swiper-button-next"><i class="el-icon-arrow-right"></i></div>
    </div>
</template>


<script>
    import axios    from 'axios';
    
    
    export default
    {   name: 'Galeria',

        data()
        {   return { 
                Categorias:     [],
                Clientes:       [],
                Imagenes:       [],
                IndiceActivo:   '',

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
                  
        },


        mounted()
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
            
            var mySwiper = document.querySelector('.swiper-container').swiper;
            let aux = 10;
            setTimeout(function(){ 
                mySwiper.slideTo(10, 3000, true);
                //mySwiper.activeIndex = 10;
                //console.log(mySwiper.activeIndex);
            }, 3000);            
            
        }
    }
</script>


<style>
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