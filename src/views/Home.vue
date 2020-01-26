<template>
  <div class="home">
    <v-container class="my-2">      
      <v-layout row wrap>
        <!-- Columna filtro -->
        <v-flex md3 class="hidden-sm-and-down">
          <Filtro/>
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
                          <span class="hidden-sm-and-down">Los mejores autos de alquiler!</span>
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
                                  v-for="item in props.items"
                                  :key="item.name"
                                  cols="12"
                                  sm="6"
                                  md="6"
                                  lg="4"
                              >
                                  <v-card hover="">
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
                                          <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                                          <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">{{ item[key.toLowerCase()] }}</v-list-item-content>
                                          </v-list-item>
                                      </v-list>
                                      <v-card-actions>
                                          <v-btn block class="white--text teal" to="/reserva">Reservar</v-btn>
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
                              <v-btn class="mr-1" fab dark  color="blue darken-3"  @click="formerPage">
                                <v-icon>mdi-chevron-left</v-icon> 
                              </v-btn>

                              <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">                          
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
    
  </div>
</template>

<script>
import Filtro from '@/components/Filtro';
export default {
  components:{
    Filtro
  },

  data () {
      return {
        itemsPerPageArray: [6, 8],
        search: '',
        filter: {},
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
        items: [
          {
            nombre: 'Hiundai i20',
            marca: 'Hyundai',
            tipo: 'Automatico',
            gps: 'No',
            foto: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            pasajeros: 5,
            kilometraje: 3000,
            color: 'rojo',
            precio: 25
            
          },
          {
            nombre: 'Hiundai i30',
            marca: 'Hyundai',
            tipo: 'Manual',
            gps: 'Si',
            foto: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            pasajeros: 5,
            kilometraje: 3000,
            color: 'azul',
            precio: 7
          },
          {
            nombre: 'Hiundai Santa Fe',
            marca: 'Hyundai',
            tipo: 'Manual',
            gps: 'Si',
            foto: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            pasajeros: 5,
            kilometraje: 3000,
            color: 'rojo',
            precio: 15
          },
          {
            nombre: 'Hiundai i20',
            marca: 'Hyundai',
            tipo: 'Manual',
            gps: 'No',
            foto: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            pasajeros: 5,
            kilometraje: 3000,
            color: 'verde',
            precio: 30
          },
          {
            nombre: 'Hiundai i20',
            marca: 'Hyundai',
            tipo: 'Manual',
            gps: 'Si',
            foto: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            pasajeros: 5,
            kilometraje: 3000,
            color: 'rojo',
            precio: 30
          },
          {
            nombre: 'Hiundai i20',
            marca: 'Hyundai',
            tipo: 'Manual',
            gps: 'Si',
            foto: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            pasajeros: 5,
            kilometraje: 3000,
            color: 'rojo',
            precio: 30
          },
          {
            nombre: 'Hiundai i20',
            marca: 'Hyundai',
            tipo: 'Manual',
            gps: 'Si',
            foto: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            pasajeros: 5,
            kilometraje: 3000,
            color: 'rojo',
            precio: 1
          },
          {
            nombre: 'Hiundai i20',
            marca: 'Hyundai',
            tipo: 'Manual',
            gps: 'Si',
            foto: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            pasajeros: 5,
            kilometraje: 3000,
            color: 'rojo',
            precio: 2
          },
          {
            nombre: 'Hiundai i20',
            marca: 'Hyundai',
            tipo: 'Manual',
            gps: 'Si',
            foto: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            pasajeros: 5,
            kilometraje: 3000,
            color: 'rojo',
            precio: 3
          },
          {
            nombre: 'Hiundai i20',
            marca: 'Hyundai',
            tipo: 'Manual',
            gps: 'Si',
            foto: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
            pasajeros: 5,
            kilometraje: 3000,
            color: 'rojo',
            precio: 37
          },
        ],
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
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    },


  
}
</script>