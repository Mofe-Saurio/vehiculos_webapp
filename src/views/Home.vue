<template>  
  <v-container>      
    <v-layout row wrap>
      <!-- Columna filtro -->
      <v-flex md3 class="hidden-sm-and-down">
        <Filtro v-on:filtroHome="aplicarFiltro($event)" @cargarHome="cargarData()"/>
      </v-flex>             
      <!-- Columna resultados -->
      <v-flex xs12 md8>
        <v-container fluid>
          <v-layout> 
            <v-flex>
                <v-data-iterator
                    :items="items"
                    :items-per-page.sync="itemsPerPage"
                    :page="page"
                    :search="search"
                    :sort-by="sortBy.toLowerCase()"
                    :sort-desc="sortDesc"
                    hide-default-footer
                >

                  <template v-slot:header>
                    <v-toolbar dark color="teal" class="mb-1">
                        <span class="hidden-sm-and-down"><h2>Los mejores autos de alquiler!</h2></span>
                        <template>
                            <v-spacer></v-spacer>
                            <v-select
                            v-model="sortBy"
                            
                            
                            hide-details
                            :items="keys"
                            prepend-inner-icon="mdi-filter"
                            label="Buscar por"
                            outlined
                            ></v-select>
                            
                            
                        </template>
                    </v-toolbar>
                    </template>

                    <template v-slot:default="props">
                        <v-row>
                            <v-col
                                v-for="(item,i) in props.items"
                                :key="item.name"
                                cols="12"
                                sm="6"
                                md="6"
                                lg="4"
                            >
                                <v-card hover="">
                                   <v-rating disabled :value=i readonly color="amber"></v-rating>
                                    <v-row>
                                      <v-container class="text-center">
                                        <v-col>                                        
                                        <img
                                          src="@/assets/carros/honda1.png" width="150px"                                                                                    
                                        >
                                       
                                      </v-col>

                                      <v-col>
                                          <v-card-title class="subheading font-weight-bold">  {{ item.nombre}} <v-card-subtitle class="font-weight-light subtitle-1"> -- {{item.marca}} </v-card-subtitle></v-card-title>
                                      </v-col>
                                      </v-container>
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
                                        <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                                        <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">{{ item[key.toLowerCase()] }}</v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                    <v-card-actions>
                                        <v-btn block class="white--text teal" :to="{ name: 'reserva', params: { id: item.id } }">Reservar</v-btn>
                                    </v-card-actions>

                                </v-card>
                            </v-col>
                        </v-row>
                    </template>

        
                    <template v-slot:footer>
                        <v-row class="mt-2" justify="center" align="center">

                          <v-flex xs7 md10>
                            <span class="ml-4 grey--text">
                              Pagina {{ page }} de {{ numberOfPages }}
                            </span>
                          </v-flex>
                        
                          <v-flex>
                            <v-btn class="mr-1" fab dark  color="error"  @click="formerPage">
                              <v-icon>mdi-chevron-left</v-icon> 
                            </v-btn>

                            <v-btn fab dark color="error" class="ml-1" @click="nextPage">                          
                              <v-icon>mdi-chevron-right</v-icon>
                            </v-btn>
                          </v-flex>                         
                        
                        </v-row>
                    </template>
                </v-data-iterator>
            </v-flex>
          </v-layout>    
        </v-container>         
      </v-flex> 
    </v-layout>
  </v-container>   
 
</template>

<script>
import db from '../firebase/init'
import Filtro from '@/components/Filtro';

export default {
  components:{
    Filtro
  },

  data () {
      return {       

        itemsPerPageArray: [6, 8],
        search: '',       
        sortDesc: false,
        page: 1,
        itemsPerPage: 6,
        sortBy: 'name',
        keys: [          
          'Tipo',
          'GPS',
          'Pasajeros',
          'Kilometraje',
          'Color',
          'Precio'        
        ],
        items: [],        
        flag: false,
      }
    },
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== `Name`)
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },

      aplicarFiltro(dataFilter){       
        
        this.flag = true    
        this.items = this.items.filter(r=> r.marca == dataFilter)

       
        
        

      },

      cargarData(){    
             
        if(this.items == '' || this.flag){
          this.items = []
                   
          db.collection('autos').onSnapshot(res=>{
            const changes = res.docChanges()
            changes.forEach(change =>{
              if (change.type === 'added') {
                this.items.push({
                  ...change.doc.data(),
                  id:change.doc.id              
                })
              
              }
            })
          })
          this.flag = false
        }        
      }     
    },
    
    created(){

      // Add a new document with a generated id.
      /*
      db.collection("autos").add({
          nombre: "Hyundai Tucson",
          marca: "Hyundai",
          color: "Gris",
          gps: "Si",
          kilometraje: 7000,
          pasajeros: 5,
          precio: 37,
          tipo: "Automatico"
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });

      */
      
      db.collection('autos').onSnapshot(res=>{
       
        const changes = res.docChanges()

        changes.forEach(change =>{
          if (change.type === 'added') {
            this.items.push({
              ...change.doc.data(),
              id:change.doc.id              
            })
           
          }
        })
      })
    }


  
}
</script>