<template>
    <v-container class="my-5">
        <v-card class="mx-auto" max-width="1000">
            <v-layout wrap class="d-flex justify-center">
                    <!-- Detalles del vehiculo -->

                    <v-flex xs12 md6 class="display-registro text-center my-9">
                        <v-layout>
                            <v-flex>
                                <v-card-title class="title justify-center">Detalles de la reserva</v-card-title>
                            </v-flex>                           
                        </v-layout>                       
                        <v-card-subtitle class="caption subtitulo-registro">Es gratis!, para poder realizar el alquiler del vehiculo, es necesario el registro</v-card-subtitle>
                       
                        <v-container>
                            <v-row>
                              <v-col
                                  v-for="item in vehiculo"
                                  :key="item.name"                                  
                                  
                              >
                                  <v-card>
                                      <v-row>
                                          <v-col>
                                              <v-card-title class="subheading font-weight-bold">  {{ item.nombre}} <v-card-subtitle class="font-weight-light subtitle-1"> -- {{item.marca}} </v-card-subtitle></v-card-title>
                                          </v-col>
                                      </v-row>
                                      <v-container>
                                          <v-layout class="d-flex justify-center">
                                              <v-img :src="item.foto" max-width="200px"></v-img>  
                                          </v-layout>
                                          
                                      </v-container> 
                                                              
                                  

                                      <v-divider></v-divider>

                                      <v-list dense>
                                          <v-list-item
                                          v-for="(key, index) in filteredKeys"
                                          :key="index"
                                          >
                                          <v-list-item-content>{{ key }}:</v-list-item-content>
                                          <v-list-item-content>{{ item[key.toLowerCase()] }}</v-list-item-content>
                                          </v-list-item>
                                      </v-list>                                     

                                  </v-card>
                              </v-col>
                          </v-row>

                        </v-container>
                          
                      
                    
                    
                    
                    
                    </v-flex>

                    

                    <!-- Formulario-->
                    <v-flex xs12 md6>
                        <v-card-title class="justify-center">Informacion actual</v-card-title>
                        <v-container>
                            <v-layout>
                                <v-flex md6>
                                    <v-text-field v-for="item in items" 
                                        :key="item.name" 
                                        label="Nombre"                             
                                        v-model="item.nombre"                              
                                        disabled
                                        filled
                                        rounded
                                        dense
                                    ></v-text-field>
                                </v-flex>
                                <v-flex md1>
                                   
                                </v-flex>
                                
                                <v-flex md6>
                                    <v-text-field v-for="item in items"
                                        :key="item.lastname"   
                                        label="Apellido"                           
                                        v-model="item.apellido"                              
                                        disabled
                                        filled
                                        rounded
                                        dense
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout>
                                <v-flex md6>
                                    <v-text-field v-for="item in items"
                                        :key="item.correo" 
                                        label="Correo"                             
                                        v-model="item.correo"                              
                                        disabled
                                        filled
                                        rounded
                                        dense
                                    ></v-text-field>
                                </v-flex>
                                <v-flex md1>
                                   
                                </v-flex>
                                
                                <v-flex md6>
                                    <v-text-field v-for="item in items"
                                        :key="item.telefono"   
                                        label="Telefono"                           
                                        v-model="item.telefono"                              
                                        disabled
                                        filled
                                        rounded
                                        dense
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            
                            

                        </v-container>
                        <v-card-title class="justify-center">Informacion adicional requerida</v-card-title>

                        <form>
                            <v-container>
                                <v-card-subtitle class="caption subtitulo-registro"><b>Nota: </b> Los campos marcados con * son requeridos</v-card-subtitle>

                                <v-text-field
                                    v-model="direccion"                                                                       
                                    label="Direccion *"
                                    required    
                                ></v-text-field>

                                 <v-text-field
                                    v-model="cedula"                                   
                                    label="Cedula *"
                                    required                                  
                                    
                                ></v-text-field>

                                <v-menu
                                    ref="menu1"
                                    v-model="menu1"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="290px"
                                >
                                    <template v-slot:activator="{ on }">
                                        <v-text-field
                                        v-model="fecha_nacimiento"
                                        label="Fecha nacimiento"
                                        hint="MM/DD/YYYY format"                                       
                                        readonly          
                                        v-on="on"
                                        
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker 
                                        v-model="fecha_nacimiento" no-title @input="menu1 = false"                                      
                                        
                                    
                                    ></v-date-picker>
                                </v-menu>

                                <v-layout class="text-center">
                                    <v-flex>
                                        <v-checkbox
                                            v-model="checkbox"                                            
                                            label="Estoy deacuerdo con las condiciones de uso."
                                            required
                                          
                                        ></v-checkbox>
                                    </v-flex>

                                    <v-flex class="d-flex align-center">
                                        <a to="/condiciones" >Condiciones</a>
                                    </v-flex>

                                    
                                </v-layout>
                                <span class="red--text">{{this.errores}}</span>
                                

                                <v-card-actions>
                                    <v-flex>
                                        <v-btn @click="clear" color="error">Limpiar campos</v-btn>
                                    </v-flex>

                                    <v-flex>
                                        <v-btn @click="submit" color="success">Completar reserva</v-btn>
                                    </v-flex>
                                    
                                    
                                </v-card-actions>       

                            </v-container>
                        </form>
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
import db from '../firebase/init'
import firebase from 'firebase'

export default { 

    data: ()=> ({
        id: null, 
        currentUser:null,

        checkbox: false,
        select: null,           
        menu1: false,
        date: new Date().toISOString().substr(0, 10),

        direccion: '',
        cedula: '',
        fecha_retiro: '',
        fecha_devolucion: '',
        fecha_nacimiento: '',       
       

        items:[],
        vehiculo:[],

        keys: [          
          'Tipo',
          'GPS',
          'Pasajeros',
          'Kilometraje',
          'Color',
          'Precio'        
        ],
        errores:''


    }),

    beforeMount(){       
        this.errores = ''
        
    },

    created(){
        this.id = this.$route.params.id
        this.currentUser = firebase.auth().currentUser         


        db.collection('usuarios').where('correo','==',this.currentUser.email).onSnapshot(res=>{
            const changes = res.docChanges()

            changes.forEach(change =>{
                if (change.type === 'added') {
                    this.items = []
                    this.items.push({
                    ...change.doc.data(),
                    id:change.doc.id,                    
                    })
                   
                }                
            })            
        }) 

        db.collection('autos').where(firebase.firestore.FieldPath.documentId(), '==', this.id).get().then(r=>{
            const data = r.docChanges()
            data.forEach(datas =>{
                if (datas.type === 'added') {
                    this.vehiculo = []
                    this.vehiculo.push({
                    ...datas.doc.data(),
                    id:datas.doc.id,                    
                    })                   
                } 
                
            })
        }).then(()=>{
            console.log('Data Cargada')
            console.log(this.items)
                
        }).catch(e=>{
            console.log(e.message)
        }) 
    },
    
    computed:{
       filteredKeys () {
        return this.keys.filter(key => key !== `Name`)
      },
       
    },

    methods:{
        submit () {
            var num_reserva = ''
            num_reserva = Math.floor(Math.random() * (1000 - 5000) ) + 5000 + this.id.slice(0,8)
           
            if (this.direccion && this.cedula && this.fecha_nacimiento) {
                this.errores = ''

                var direccion = this.direccion
                var cedula = this.cedula
                var fecha_nacimiento = this.fecha_nacimiento
                var limpiar = this.clear()

                const reserva = {
                    id_carro: this.id,
                    id_cliente: this.currentUser.uid,
                    num_reserva: num_reserva,
                    

                }

                db.collection('reservas').add(reserva).then(()=>{
                    
                       
                }).then(()=>{
                    var redireccionar = this.toPerfil()
                    db.collection('usuarios').where('correo','==',this.currentUser.email).get()
                    .then(function(query){
                        query.forEach(function(doc){
                            //console.log(doc)
                            
                           db.collection('usuarios').doc(doc.id).update({
                               direccion: direccion,
                               cedula: cedula,
                               fecha_nacimiento: fecha_nacimiento
                           }).then(()=>{
                               redireccionar
                               limpiar                                                                                             
                           })

                        })
                    })
                    
                })
                
            }else{
                this.errores = 'Por favor, rellenar los campos'
            }
            
        },
        clear () {
            

            this.direccion = ''
            this.cedula = ''
            this.fecha_nacimiento = null
            this.checkbox = null            
        },

        toPerfil(){
            this.$router.push({name:'perfil'})
        }
    }



  
    
}
</script>