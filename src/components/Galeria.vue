<template>
    <div id="galeria">
        <el-row id="Trabajos" style="padding:0px !important">
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
                    <div class="Trabajos" v-if="Categorias[item.FkCategoria-1].Checked">
                        <img :src="'http://laredmd.com/' + item.URL"/>
                    </div> 
                </div> 
            </div>

        </el-row>
    </div>
</template>


<script>
    import axios    from 'axios';
    
    
    export default
    {   name: 'Galeria',

        data()
        {   return { 
                Categorias: [],
                Clientes:   [],
                Imagenes:   []
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
        }
    }
</script>


<style>
    #galeria
    {   background-color: rgba(255, 255, 255, 0.3);
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
    {  filter: grayscale(100%);
        cursor: pointer;
    }


    .el-checkbox-button.is-checked:first-child .el-checkbox-button__inner, .el-checkbox-button.is-checked:last-child .el-checkbox-button__inner
    {   border: 1px solid #00ADAD;
    }
    .el-checkbox-button:first-child .el-checkbox-button__inner, .el-checkbox-button:last-child .el-checkbox-button__inner
    {   border: 1px solid #545C64;
        border-radius: 5px;
    }
    .el-checkbox-button.is-checked .el-checkbox-button__inner
    {   background-color: #00ADAD;
        color: #fff;
        border: 1px solid #00ADAD;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    .el-checkbox-button .el-checkbox-button__inner
    {   background-color: rgba(0,0,0,0);
        color: #545C64;
        border: 1px solid #545C64;
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
    }
</style>