<template>
    <v-container>
        <v-card class="mx-auto" max-width="1000">
            <v-layout class="d-flex justify-center">

                    <!-- Acceso al login-->
                    <v-flex md6 style="display:block" class="display-login text-center my-9">
                        <v-layout>
                            <v-flex>
                                <v-card-title class="title justify-center"><h3>Hello Pear Fan !</h3></v-card-title>
                            </v-flex>                           
                        </v-layout>
                         <v-layout class="d-flex justify-center">
                            <v-img :src="require('../assets/avatar.png')" max-width="150px"></v-img>
                        </v-layout>
                        <v-card-subtitle class="caption subtitulo-registro"><b>Recuerda:</b> Los datos de ingreso son de mucha importancia, no los pierdas!</v-card-subtitle>
                        
                        <v-form @submit.prevent="login"> 
                            <v-card-text>
                                <v-text-field v-model="Login.email" :rules="[rules.required, rules.email]" dense label="Ingrese E-mail" outlined ></v-text-field> 
                                <v-text-field :rules="[rules.required, rules.min]" dense label="Contraseña" outlined 
                                            :type="show ? 'text' : 'password'" hint="Recuerda no compartir tu contrasena :)"     
                                            @click:append="show = !show"
                                            v-model="Login.password"
                                ></v-text-field> 
                            </v-card-text>                               
                            
                            <v-card-actions>
                                <v-btn block class="success white--text" type="submit">
                                    Iniciar sesion
                                </v-btn>
                            </v-card-actions>
                            <div>
                                No tienes una cuenta? <a text class="blue--text" @click="toggleRegistro">Registrate aqui!</a>                                
                            </div>     
                            <span class="red--text">{{this.errores}}</span>      
                        </v-form>
                    </v-flex>

                    <!-- Registrarse -->

                    <v-flex md6 style="display:none" class="display-registro text-center my-9">
                        <v-layout>
                            <v-flex>
                                <v-card-title class="title justify-center">Crea Tu Cuenta!</v-card-title>
                            </v-flex>                           
                        </v-layout>
                        <!--
                         <v-layout class="d-flex justify-center">
                            <v-img :src="require('../assets/avatar.png')" max-width="150px"></v-img>
                        </v-layout> -->
                        <v-card-subtitle class="caption subtitulo-registro">Es gratis!, para poder realizar el alquiler del vehiculo, es necesario el registro</v-card-subtitle>
                        
                        <v-form @submit.prevent="registrar"> 
                            <v-card-text>
                                <v-text-field v-model="Registro.name" :rules="[rules.required]" dense label="Ingrese nombre" outlined></v-text-field>  
                                <v-text-field v-model="Registro.lastname" :rules="[rules.required]" dense label="Ingrese apellido" outlined></v-text-field>   
                                <v-text-field v-model="Registro.email" :rules="[rules.required, rules.email]" dense label="Ingrese E-mail" outlined ></v-text-field> 

                                <v-layout>
                                    <v-flex xs12 md6>
                                        <v-text-field :rules="[rules.required, rules.min]" dense label="Contraseña" outlined 
                                            :type="show ? 'text' : 'password'" hint="Usa 8 o más caracteres con una combinación de letras, números y símbolos"     
                                            @click:append="show = !show"
                                            v-model="Registro.password"
                                        ></v-text-field> 

                                    </v-flex>
                                    <v-flex xs1 md1></v-flex>
                                    <v-flex xs12 md6>
                                        <v-text-field :rules="[rules.required, rules.min]" dense label="Confirmación" outlined 
                                            :type="show ? 'text' : 'password'" hint="Ambas contrasenas deben coincidir" 
                                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                            @click:append="show = !show"
                                            v-model="Registro.password_confirm"                                  
                                        ></v-text-field>
                                    </v-flex>  
                                </v-layout>
                            
                            
                            </v-card-text>                               
                            
                            <v-card-actions>
                                <v-btn block class="success white--text" type="submit" :loading="loading">
                                    Registrarse
                                </v-btn>
                            </v-card-actions>
                            <div>
                                Ya tiene una cuenta? <a text class="blue--text" @click="toggleLogin">Inicia sesion</a>                                                              
                            </div>        
                            <span class="red--text">{{this.errores}}</span>    
                        </v-form>
                    </v-flex>

                    

                    <!-- Imagen a la derecha-->
                    <v-flex md6 class="hidden-sm-and-down text-center">
                        <v-img :src="require('../assets/login3.png')" max-height="550px">
                            <v-layout class="d-flex justify-center my-9">
                                <v-img :src="require('../assets/login-registro.png')" max-width="150px"></v-img> 
                            </v-layout>
                            <v-layout>   
                                <v-flex>
                                     <h4 class="subheading white--text">Comienza ahora con tu registro!</h4> 
                                </v-flex>                  
                            </v-layout>
                            
                            <v-layout class="my-9 d-flex justify-center">
                                <v-flex md12>
                                    <h4 class="subheading white--text"><v-icon color="teal">mdi-message-text-lock</v-icon>Tramites seguros y rapidos</h4> 
                                </v-flex>

                                <v-flex md12>
                                    <h4 class="subheading white--text"><v-icon color="teal">mdi-home</v-icon>Desde la comodidad de tu casa !</h4> 
                                </v-flex>
                            </v-layout>

                            <v-layout class="my-9 d-flex justify-center">
                                <v-flex md12>
                                    <h4 class="subheading white--text"><v-icon color="teal">mdi-credit-card-remove-outline</v-icon>Sin tarjeta de credito</h4> 
                                </v-flex>

                                <v-flex md12>
                                    <h4 class="subheading white--text"><v-icon color="teal">mdi-database-check</v-icon>Informacion actualizada !</h4> 
                                </v-flex>
                            </v-layout>                            
                        </v-img>                      

                    </v-flex>

                
                
            </v-layout>
        </v-card>

     
         
    </v-container>
   
</template>



<style lang="scss" scoped>
  .subtitulo-registro{
      padding: 0 !important
  }
</style>



<script>

import firebase from 'firebase'
import db from '../firebase/init'


export default {
   
    data(){
        return{
            
            dialog: false,
            show: false,
            loading: false,
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
            errores:'',
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
        
        registrar(){
            var user = null
            if(this.Registro.name && this.Registro.lastname && this.Registro.email && this.Registro.password && this.Registro.password_confirm){
                this.loading = true
                firebase.auth().createUserWithEmailAndPassword(this.Registro.email, this.Registro.password)
                .then(()=>{
                    const usuario = {
                        nombre: this.Registro.name,
                        apellido: this.Registro.lastname, 
                        sexo:'',                       
                        correo: this.Registro.email,
                        telefono:''

                    }
                    db.collection('usuarios').add(usuario).then(()=>{
                        console.log('add to db')
                        user = firebase.auth().currentUser                    
                        user.updateProfile({
                            displayName: this.Registro.name + ' ' +this.Registro.lastname
                        }).then(()=>{
                            console.log('Success')
                            this.loading = false
                            this.$router.push({name:'home'})
                        }).catch((e)=>{
                            this.errores = e.message
                            console.log(e.message)
                        })
                    })    
                }).catch(e=>{
                    this.loading = false
                    console.log(e.message)
                    this.errores = e.message
                })
                console.log('registrando...')
            }
            
            
        },

        login(){
            if(this.Login.email && this.Login.password){    
                this.loading = true            
                firebase.auth().signInWithEmailAndPassword(this.Login.email, this.Login.password)
                .then(user=>{
                    if(user){
                        this.Login.email = ''
                        this.Login.password = ''
                        this.loading = false
                        this.$router.push({name:'home'})
                    }  
                }).catch(e=>{
                    this.loading = false 
                    this.errores = e.message
                    console.log(e.message)
                })
            }else{
                this.loading = false 
                this.errores = 'Outch! Por favor, rellenar los campos'
            }
            
        }
       
    },
    
}
</script>