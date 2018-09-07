<template>
    <div id="asesoramiento">
        <Menu style="margin-top:-1%"></Menu>
        
        <el-col :span="24" style="margin-top:5%; border-bottom:1px solid #545C64; margin-bottom:30px; text-align:center; font-size:25px; font-variant:small-caps; font-weight:bold">
            Asesoramiento
        </el-col>
        <el-form ref="form" :model="form" :rules="rules">
            <el-row>
                <el-col :xs="24" :sm="8">
                    <el-form-item prop="Nombre">
                        <el-input v-model="form.Nombre" required @keypress.native="control($event, 't')">
                            <template slot="prepend">Nombre/s <span style="color:#f00">*</span></template>
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="8">
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
                <el-col :span="24" style="margin-top:15px; margin-bottom:15px"><hr></el-col>
                <el-col :span="24" style="font-size:20px">
                    <label style="font-weight:bold; font-variant:small-caps">Estoy Interesado/a en:</label><br><br>
                    <el-switch v-model="form.ChkDiseñoGrafico"></el-switch>&nbsp;&nbsp;Diseño Gráfico<br>
                    <el-switch v-model="form.ChkMultimedia"   ></el-switch>&nbsp;&nbsp;Multimedia<br>
                    <el-switch v-model="form.ChkDiseñoWeb"    ></el-switch>&nbsp;&nbsp;Diseño Web<br>
                    <el-switch v-model="form.ChkCManager"     ></el-switch>&nbsp;&nbsp;Community Manager<br>
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
        <span slot="footer" class="dialog-footer" style="float:right; margin-bottom:30px">
            <button class="BtnNaranja" @click="Enviar()">Enviar</button>
        </span>
    </div>
</template>


<script>
    import Menu     from './Menu.vue';
    import axios    from 'axios';
    
    
    export default
    {   name: 'Asesoramiento',

        components:
        {   Menu,
        },
        
        data()
        {   return { 
                form:           {
                    Nombre              : '',
                    Apellido            : '',
                    Mail                : '',
                    Mensaje             : '',
                    ChkDiseñoGrafico    : false,
                    ChkMultimedia       : false,
                    ChkDiseñoWeb        : false,
                    ChkCManager         : false,
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
            {   this.form.Nombre                    = '';
                this.form.Apellido                  = '';
                this.form.Mail                      = '';
                this.form.ChkDiseñoGrafico          = false;
                this.form.ChkMultimedia             = false;
                this.form.ChkDiseñoWeb              = false;
                this.ChkCManager                    = false;
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
</style>