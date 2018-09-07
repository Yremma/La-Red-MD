<template>
    <div class="menu" id="menuhome">

        <!-- MENU PANTALLAS --> 
        <el-menu class="hidden-xs-only" mode="horizontal" background-color="#545c64" text-color="#E7A905" active-text-color="#E7A905" style="padding-top:10px">
            <el-menu-item index="4" style="float:right" v-on:click="ir_a('footer')"     >Contacto           </el-menu-item>            
            <el-menu-item index="2" style="float:right" v-on:click="dialogVisible=true" >Asesoramiento      </el-menu-item>
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
                <div class="el-col el-col-24" style="float:right" v-on:click="dialogVisible=true" >Asesoramiento    </div>                
                <div class="el-col el-col-24" style="float:right" v-on:click="ir_a('footer')"     >Contacto         </div>
            </el-collapse-item>
        </el-collapse>


        <!-- Modal Soporte -->
        <el-dialog
            :visible.sync="dialogVisible"
            :show-close="false"
            width="90%"
            style="background:#545C64">
            <div class="el-dialog__header" style="margin-top:-5%; border-bottom:1px solid #545C64; margin-bottom:30px">
                Asesoramiento
            </div>
            <el-form ref="form" :model="form" :rules="rules">
                <el-row>
                    <el-col :xs="24" :sm="12">
                        <el-form-item prop="Nombre">
                            <el-input v-model="form.Nombre" required @keypress.native="control($event, 't')">
                                <template slot="prepend">Nombre/s <span style="color:#f00">*</span></template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12">
                        <el-form-item prop="Apellido">
                            <el-input v-model="form.Apellido" required @keypress.native="control($event, 't')">
                                <template slot="prepend">Apellido/s <span style="color:#f00">*</span></template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8">
                        <el-form-item prop="Mail">                            
                            <el-input v-model="form.Mail" required>
                                <template slot="prepend">E-mail <span style="color:#f00">*</span></template>
                            </el-input>
                        </el-form-item>                    
                    </el-col>
                    <el-col :xs="24" :sm="8">
                        <el-form-item>
                            <el-input v-model="form.Telefono" maxlength="15" @keypress.native="control($event, 'n')">
                                <template slot="prepend">Teléfono</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="8">
                        <el-form-item>
                            <el-input v-model="form.Empresa">
                                <template slot="prepend">Empresa</template>
                            </el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" style="margin-top:15px; margin-bottom:15px"><hr></el-col>
                    <el-col :span="24" style="font-size:20px">
                        <label style="font-weight:bold; font-variant:small-caps">Estoy Interesado/a en:</label><br><br>
                        <el-switch v-model="form.ChkDiseñoGrafico"></el-switch>&nbsp;&nbsp;Diseño Gráfico<br>
                        <el-switch v-model="form.ChkMultimedia"   ></el-switch>&nbsp;&nbsp;Multimedia<br>
                        <el-switch v-model="form.ChkDiseñoWeb"    ></el-switch>&nbsp;&nbsp;Diseño Web<br>
                    </el-col>
                    <el-col :span="24" style="margin-top:15px; margin-bottom:15px"><hr></el-col>
                    <el-col>
                        <label style="font-size:20px; font-weight:bold; font-variant:small-caps">
                            Consulta <span style="color:#f00">*</span>
                        </label><br><br>
                        <el-form-item prop="Mensaje">
                            <el-input type="textarea" v-model="form.Mensaje" required></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <button class="BtnGris"    @click="Cerrar()">Cerrar</button>
                <button class="BtnNaranja" @click="Enviar()">Enviar</button>
            </span>
        </el-dialog>

    </div>
</template>


<script>
    import axios from 'axios';
    
    
    export default
    {   name: 'MenuHome',

        data()
        {   return { 
                dialogVisible:  false,
                form:           {
                    Nombre              : '',
                    Apellido            : '',
                    Mail                : '',
                    Telefono            : '',
                    Empresa             : '',
                    Mensaje             : '',
                    ChkDiseñoGrafico    : false,
                    ChkMultimedia       : false,
                    ChkDiseñoWeb        : false,
                },
                rules: {
                    Nombre: [
                        { required: true, message: 'Por favor, ingrese su Nombre', trigger: 'blur' }
                    ],
                    Apellido: [
                        { required: true, message: 'Por favor, ingrese su Apellido', trigger: 'blur' }
                    ],
                    Mail: [
                        { required: true, message: 'Por favor, ingrese su e-mail para poder responderle', trigger: 'blur' },
                    ],
                    Mensaje: [
                        { required: true, message: 'Por favor, ingrese un Mensaje o Consulta', trigger: 'blur' },
                    ]
                }
            };
        },

        methods: {
            ir_a(id)
            {   document.getElementById(id).scrollIntoView({ 
                    behavior: 'smooth' 
                });
            },

            control(e, tipo)
            {   if(tipo=='t')
                {   if( (e.which>32  && e.which<65)  || 
                        (e.which>90  && e.which<97)  || 
                        (e.which>123 && e.which<209) || 
                        (e.which>209 && e.which<241) ||
                        (e.which>241)
                    ) 
                    { e.preventDefault(); }                                                 // Campo alfabetico
                }
                else
                {   if( (e.which>31 & e.which<48) || e.which>57) { e.preventDefault(); }    // Campo numerico
                }
            },
            
            Cerrar()
            {   this.dialogVisible                  = false;
                this.form.Nombre                    = '';
                this.form.Apellido                  = '';
                this.form.Mail                      = '';
                this.form.Telefono                  = '';
                this.form.Empresa                   = '';
                this.form.ChkDiseñoGrafico          = false;
                this.form.ChkMultimedia             = false;
                this.form.ChkDiseñoWeb              = false;
                this.form.Mensaje                   = '';
            },

            Enviar()
            {   this.$refs['form'].validate((valid) => {
                    if(valid)
                    {   axios.get('http://laredmd.com/api/soporte_insert.php', {
                            params: {
                               Datos:               JSON.stringify(this.form)
                            } })
                            .then(response => {
                                this.Cerrar();
                                this.$message({
                                    message: 'Su consulta se ha enviado correctamente. ¡Muchas Gracias!',
                                    type: 'success'
                                });   
                            })
                            .catch(e => {
                                this.$message.error('Ha ocurrido un error. Por favor, intente nuevamente.');
                            })
                    }
                });  
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