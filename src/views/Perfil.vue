<template>    
    <v-container>
        <v-layout>

            <v-flex>


            </v-flex>


            <v-flex md6>
            <div class="text-center">
                <h1>Información personal</h1>
                <h4>Información básica, como tu nombre y foto, que usas en este sitio web</h4>
            </div>

           

        <!--Contenido del tab -->
            <v-card class="mx-auto my-5" outlined flat>

                <v-tabs color="teal accent-4">
                    <v-spacer></v-spacer>
                    <v-tab>
                        <v-icon left>mdi-account</v-icon>
                            Datos
                        </v-tab>
                    <v-tab >
                        <v-icon left>mdi-lock</v-icon>
                            Detalles de pedidos
                    </v-tab>
                

                    <v-tab-item>                
                        <v-layout class="d-flex justify-center">
                            <v-flex>
                                <v-card-title>Perfil</v-card-title>
                                <v-card-subtitle>La informacion mostrada, puede editarse en cualquier momento que desee. " Hello Pear ! "</v-card-subtitle>
                                
                                    <v-list rounded>      
                                        <v-list-item-group v-model="item" >

                                            <v-list-item v-for="(item,i) in items" :key="i">                                
                                                <v-flex>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="text-uppercase">nombre</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-flex>

                                                <v-flex md6>
                                                    <v-list-item-content>
                                                        <v-list-item-title v-text="item.nombre"></v-list-item-title>
                                                    </v-list-item-content>
                                                </v-flex>

                                                <v-flex xs1 md1>
                                                        <v-list-item-icon>
                                                        <v-icon v-text="arrow"></v-icon>
                                                    </v-list-item-icon>
                                                </v-flex>                               

                                            </v-list-item>

                                            <v-list-item v-for="(item) in items" :key="item.apellido">                                
                                                <v-flex>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="text-uppercase">apellido</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-flex>

                                                <v-flex md6>
                                                    <v-list-item-content>
                                                        <v-list-item-title v-text="item.apellido"></v-list-item-title>
                                                    </v-list-item-content>
                                                </v-flex>

                                                <v-flex xs1 md1>
                                                        <v-list-item-icon>
                                                        <v-icon v-text="arrow"></v-icon>
                                                    </v-list-item-icon>
                                                </v-flex>                               

                                            </v-list-item>

                                            <v-list-item v-for="(item) in items" :key="item.correo">                                
                                                <v-flex>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="text-uppercase">correo</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-flex>

                                                <v-flex md6>
                                                    <v-list-item-content>
                                                        <v-list-item-title v-text="item.correo"></v-list-item-title>
                                                    </v-list-item-content>
                                                </v-flex>

                                                <v-flex xs1 md1>
                                                        <v-list-item-icon>
                                                        <v-icon v-text="arrow"></v-icon>
                                                    </v-list-item-icon>
                                                </v-flex>                               

                                            </v-list-item>

                                            <v-list-item v-for="(item) in items" :key="item.sexo">                                
                                                <v-flex>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="text-uppercase">sexo</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-flex>

                                                <v-flex md6>
                                                    <v-list-item-content>
                                                        <v-list-item-title v-text="item.sexo" v-if="item.sexo"></v-list-item-title>
                                                        <v-list-item-title v-else>No especificado</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-flex>

                                                <v-flex xs1 md1>
                                                        <v-list-item-icon>
                                                        <v-icon v-text="arrow"></v-icon>
                                                    </v-list-item-icon>
                                                </v-flex>                               

                                            </v-list-item>

                                            <v-list-item v-for="(item) in items" :key="item.x">                                
                                                <v-flex>
                                                    <v-list-item-content>
                                                        <v-list-item-title class="text-uppercase">telefono</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-flex>

                                                <v-flex md6>
                                                    <v-list-item-content>
                                                        <v-list-item-title v-text="item.telefono" v-if="item.telefono"></v-list-item-title>
                                                        <v-list-item-title v-else>No especificado</v-list-item-title>
                                                    </v-list-item-content>
                                                </v-flex>

                                                <v-flex xs1 md1>
                                                        <v-list-item-icon>
                                                        <v-icon v-text="arrow"></v-icon>
                                                    </v-list-item-icon>
                                                </v-flex>                               

                                            </v-list-item>
                                            
                                            
                                        </v-list-item-group>
                                    </v-list>      
                            </v-flex> 
                        </v-layout>
                    </v-tab-item>

                    <v-tab-item>
                         <v-layout>

                             <v-flex>
                                <v-card-title >Informacion detallada del alquiler del vehiculo</v-card-title>
                                <v-card-subtitle ><b>Nota: </b>Puede cancelar la solicitud registrada, tomando en cuenta que se le registrara un monto de 1.00$ en futuros pedidos</v-card-subtitle>
                                
                             <template>
                                <v-simple-table fixed-header>
                                    <template>
                                    <thead>
                                        <tr>
                                        <th class="text-left">Nombre</th>
                                        <th class="text-left"># Solicitud</th>
                                        <th class="text-left">Total</th>
                                        <th class="text-left">Status</th>
                                        <th class="text-left">Accion</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,i) in pedidos" :key="i">
                                            <td>{{ item.vehiculo }}</td>
                                            <td>{{ item.num_reserva }}</td>
                                            <td>{{ item.precio }} $</td>
                                            <td v-if="item.status" class="green--text">Activo</td>
                                            <td v-else class="red--text">Inactivo</td>
                                            <td><v-btn color="error">Cancelar</v-btn></td>
                                           
                                           
                                        </tr>
                                        
                                    </tbody>
                                    </template>
                                </v-simple-table>
                            </template>
                             </v-flex>


                         </v-layout>
                       
                    </v-tab-item>

                </v-tabs>
            </v-card>        
        </v-flex>

        <!-- Menu -->
        <v-flex>
                
        </v-flex>


        </v-layout>
        
        
      
        
    </v-container>
</template>

<script>
import db from '../firebase/init'
import firebase from 'firebase'
  export default {
    data: () => ({
      item: 1,
      currentUser: null,
      arrow: 'mdi-pencil-plus-outline',
      items: [],
      pedidos:[]
    }),

    created(){
        
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
                if (change.type === 'modified') {
                    this.items = []
                    this.items.push({
                    ...change.doc.data(),
                    id:change.doc.id,                    
                    })
                  
                }
            })  
        })
        //Obtenemos las reservas realizadas x el usuario
        db.collection('reservas').where('id_cliente','==',this.currentUser.uid).onSnapshot(res=>{
           
            var p = []
            res.forEach(function(doc) {
                p.push(doc.data())
            });
            this.pedidos = p           
            
        })


      

        /*
        db.collection('usuarios').where('correo','==',user.email).get().then((res)=>{
            const changes = res.docChanges()
            changes.forEach(change =>{
                if (change.type === 'added') {
                    this.items.push({
                    ...change.doc.data(),
                    id:change.doc.id,                    
                    })
                    console.log(this.items)
                }
            })  
            
        })
        */
        /*
        db.collection('usuarios').onSnapshot(res=>{
       
        const changes = res.docChanges()

            changes.forEach(change =>{
                if (change.type === 'added') {
                    this.items.push({
                    ...change.doc.data(),
                    id:change.doc.id,
                    title:['nombre','apellido']
                    })
                    console.log(this.items)
                }
            })  
        })
        */
    }

  }
</script>

<style lang="scss" scoped>
.v-tab.v-tab{
    color:teal
}
</style>