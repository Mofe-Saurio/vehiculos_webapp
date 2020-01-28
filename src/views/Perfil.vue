<template>    
    <v-container>
        <v-flex>
            <div class="text-center">
                <h1>Informacion personal</h1>
                <h4>Información básica, como tu nombre y foto, que usas en este sitio web</h4>
            </div>

           

        <!--Contenido del tab -->
            <v-card class="mx-auto my-5" max-width="60%" outlined flat>

                <v-tabs color="teal accent-4">
                    <v-spacer></v-spacer>
                    <v-tab>
                        <v-icon left>mdi-account</v-icon>
                            Informacion personal
                        </v-tab>
                    <v-tab >
                        <v-icon left>mdi-lock</v-icon>
                            Detalles de pedidos
                    </v-tab>
                

                    <v-tab-item>                
                        <v-layout class="d-flex justify-center">
                            <v-flex>
                                <v-card-title>Perfil</v-card-title>
                                <v-card-subtitle>Es posible que cierta información sea visible para otras personas que usan los servicios de Google.</v-card-subtitle>
                                
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

                                                <v-flex md1>
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

                                                <v-flex md1>
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

                                                <v-flex md1>
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

                                                <v-flex md1>
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

                                                <v-flex md1>
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
                         <v-layout class="d-flex justify-center">

                             <v-flex>
                                <v-card-title>Informacion detallada del alquiler del vehiculo</v-card-title>
                                <v-card-subtitle><b>Nota: </b>Puede cancelar la solicitud registrada, tomando en cuenta que se le registrara un monto de 1.00$ en futuros pedidos</v-card-subtitle>
                                
                             <template>
                                <v-simple-table>
                                    <template v-slot:default>
                                    <thead>
                                        <tr>
                                        <th class="text-left">Nombre</th>
                                        <th class="text-left"># Solicitud</th>
                                        <th class="text-left"># Monto</th>
                                        <th class="text-left">Status</th>
                                        <th class="text-left">Accion</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
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
      
        
    </v-container>
</template>

<script>
import db from '../firebase/init'
import firebase from 'firebase'
  export default {
    data: () => ({
      item: 1,
      arrow: 'mdi-pencil-plus-outline',
      items: [
          
      ],
    }),

    created(){
        var user = null
        user = firebase.auth().currentUser         
        db.collection('usuarios').where('correo','==',user.email).onSnapshot(res=>{
            const changes = res.docChanges()
            changes.forEach(change =>{
                if (change.type === 'added') {
                    this.items = []
                    this.items.push({
                    ...change.doc.data(),
                    id:change.doc.id,                    
                    })
                    console.log(this.items)
                }
                if (change.type === 'modified') {
                    this.items = []
                    this.items.push({
                    ...change.doc.data(),
                    id:change.doc.id,                    
                    })
                    console.log(this.items)
                }
            })  
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