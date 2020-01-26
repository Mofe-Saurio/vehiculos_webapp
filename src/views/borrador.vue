<template>
    <v-container>
        <v-row > 
            <v-col md12></v-col>           
            <v-col>
                <v-container>
                    <v-card class="text-center">
                        <v-layout class="d-flex justify-center">
                            <!-- Display registrar -->
                            <v-flex md8 style="display:none" class="display-registro">
                                <v-layout>
                                    <v-flex md10>
                                        <v-card-title class="title">Crea Tu Cuenta!</v-card-title>
                                    </v-flex>
                                    <v-flex md2>
                                        <v-card-title class="body-1">
                                            <v-btn text class="grey--text">X</v-btn>
                                        </v-card-title>                       
                                    </v-flex>
                                </v-layout>
                                <v-card-subtitle class="caption subtitulo-registro">Es gratis!, para poder realizar el alquiler del vehiculo, es necesario el registro</v-card-subtitle>

                                <v-container>
                                    <v-flex >
                                    <!-- Registro -->
                                        <v-form>
                                            <v-text-field v-model="Registro.name" :rules="[rules.required]" dense label="Ingrese nombre" outlined></v-text-field>  
                                            <v-text-field v-model="Registro.lastname" :rules="[rules.required]" dense label="Ingrese apellido" outlined></v-text-field>   
                                            <v-text-field v-model="Registro.email" :rules="[rules.required, rules.email]" dense label="Ingrese E-mail" outlined ></v-text-field> 

                                            <v-layout>
                                                <v-flex md6>
                                                    <v-text-field :rules="[rules.required, rules.min]" dense label="Contraseña" outlined 
                                                        :type="show ? 'text' : 'password'" hint="Usa 8 o más caracteres con una combinación de letras, números y símbolos"     
                                                        @click:append="show = !show"
                                                        v-model="Registro.password"
                                                    ></v-text-field> 

                                                </v-flex>
                                                <v-flex md1></v-flex>
                                                <v-flex md6>
                                                    <v-text-field :rules="[rules.required, rules.min]" dense label="Confirmación" outlined 
                                                        :type="show ? 'text' : 'password'" hint="Ambas contrasenas deben coincidir" 
                                                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                                        @click:append="show = !show"
                                                        v-model="Registro.password_confirm"                                  
                                                    ></v-text-field>
                                                </v-flex>  
                                            </v-layout>

                                            <v-card-actions>
                                                <v-btn block class="success white--text" @click.prevent="">
                                                    Registrarse
                                                </v-btn>
                                            </v-card-actions>
                                            <div>
                                                Ya tiene una cuenta? <a text class="blue--text" @click="toggleLogin">Inicia sesion</a>
                                            </div>
                                            

                                        </v-form>
                                    </v-flex>
                                </v-container>
                                

                            

                                            
                            
                            </v-flex>

                            <!-- Display login -->
                            <v-flex md3 style="display:block" class="display-login">
                                <v-layout>
                                    <v-flex md10>
                                        <v-card-title class="title">Vamos a iniciar sesion!</v-card-title>
                                    </v-flex>
                                    <v-flex md2>
                                        <v-card-title class="body-1">
                                            <v-btn text class="grey--text" @click="dialog = false">X</v-btn>
                                        </v-card-title>                       
                                    </v-flex>
                                </v-layout>
                                <v-card-subtitle class="caption subtitulo-registro"><b>Recuerda:</b> Los datos de ingreso son de mucha importancia, no los pierdas!</v-card-subtitle>

                                <v-container>
                                    <v-flex >
                                    <!-- Login -->
                                        <v-img :src="require('../assets/avatar.png')" class="img-avatar-login"></v-img>
                                        <v-form>                                
                                            <v-text-field v-model="Login.email" :rules="[rules.required, rules.email]" dense label="Ingrese E-mail" outlined ></v-text-field> 
                                            <v-text-field :rules="[rules.required, rules.min]" dense label="Contraseña" outlined 
                                                        :type="show ? 'text' : 'password'" hint="Recuerda no compartir tu contrasena :)"     
                                                        @click:append="show = !show"
                                                        v-model="Login.password"
                                            ></v-text-field> 
                                            <v-card-actions>
                                                <v-btn block class="success white--text" @click.prevent="">
                                                    Iniciar sesion
                                                </v-btn>
                                            </v-card-actions>
                                            <div>
                                                No tienes una cuenta? <a text class="blue--text" @click="toggleRegistro">Registrate aqui!</a>
                                                
                                            </div>
                                            

                                        </v-form>
                                    </v-flex>
                                </v-container>                   
                            </v-flex>

                            <!-- Imagen derecha del login/register-->
                            <v-flex md2 class="hidden-sm-and-down">
                                <v-img :src="require('../assets/login3.png')" height="100%">

                                <v-row align="center" justify="center">
                                    <v-col class="text-center" cols="12">                                                        
                                        <v-img :src="require('../assets/login-registro.png')" class="img-login-register"></v-img>                            
                                        <h4 class="subheading white--text">Comienza ahora con tu registro!</h4>                                                      
                                    
                                    </v-col>
                                </v-row>


                                <v-row align="center" justify="center" class="white--text font-weight-bold" no-gutters>
                                    <v-col cols="12">
                                        <v-icon color="teal">mdi-home</v-icon>Tramites seguros y rapidos
                                    </v-col>
                                    <v-col cols="12">
                                        <v-icon color="teal">mdi-home</v-icon>Tramites seguros y rapidos
                                    </v-col>
                                    <v-col cols="12">
                                        <v-icon color="teal">mdi-home</v-icon>Tramites seguros y rapidos
                                    </v-col>
                                </v-row>  
                                
                                </v-img>
                                
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-container>
                
            </v-col> 
            <v-col md12></v-col>          
            
        </v-row>
         
    </v-container>
   
</template>



<style lang="scss" scoped>
  .subtitulo-registro{
      padding: 0 !important
  }
  .v-dialog__content{
    height: 70% !important; 
  }
  .img-login-register{
      opacity: .7;
      left: 20%;
      width: 140px;
  }
  .img-avatar-login{
      left: 35%;
      width: 140px;
      margin-bottom: 5px
  }
</style>



<script>
export default {
   
    data(){
        return{
            
            dialog: false,
            show: false,
            Registro:{
                name: '',
                lastname: '',
                email: '',
                password: '',
                password_confirm: '',

            },
            Login:{
                email: '',
                password: ''

            },
            errores:[],
            rules:{
                required: value => !!value || 'Requerido',
                min: v => v.length >= 8  || 'Minimo 8 caracteres',
                email: v => /.+@.+\..+/.test(v) || 'El E-mail es invalido',         
         
            },
        }
    },
   

    methods:{
        toggleRegistro(){            
            document.querySelector('.display-login').style.display = 'none'
            document.querySelector('.display-registro').style.display = 'block'
            
        },
        toggleLogin(){
            document.querySelector('.display-login').style.display = 'block'
            document.querySelector('.display-registro').style.display = 'none'
        },       
       
    },
    
}
</script>