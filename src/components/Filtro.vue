<template>
    <v-card
        class="mx-auto "
        max-width="344"
        
    >
        <v-card-title class="titulo-filtro">
        <v-row no-gutters dense >
            <v-col cols="3">
            Filtro
            </v-col>
            
            <v-col cols="9">
            <v-btn  text class="float-right" color="red" @click="reset">Limpiar filtro</v-btn>
            </v-col>
        </v-row>
        </v-card-title>
        
        <v-divider class="mx-4 filtro-divider"
        inset >
        </v-divider>
        

        <v-row no-gutters dense>           
        <v-card-title class="titulo-filtro">
            <v-row no-gutters dense >
            Marcas
            </v-row>
        </v-card-title>
        <v-card-text>
            <v-radio-group v-model="filtro" v-for="(item,i) in marcas_autos" :key="i">
                <v-radio                              
                :label= item.nombre
                color="teal"
                :value=item.nombre
                hide-details
                class="marca-checkbox"
            ></v-radio>
            </v-radio-group>

        </v-card-text>
        
        <v-divider class="mx-4"
        inset >
        </v-divider>             
        </v-row>

               
        <v-divider class="mx-4"
        inset >
        </v-divider>      
        <v-container>
            <span class="red--text">{{this.errores}}</span>   
        </v-container>
             
      
       
    <v-card-actions>
        <v-btn block color="error" @click="filtrar">Filtrar</v-btn>
    </v-card-actions>
    </v-card>
</template>
   


<style scoped>
.titulo-filtro{
  padding-bottom: 0
}
.marca-checkbox{
  margin-top: 0;
  padding: 0
}
.filtro-divider{
  margin:0.5rem 0 
}
</style>

<script>
import db from '../firebase/init'
export default {
    data() {
            return {
                sliderValue: 0,
                marcas_autos:[],
                filtro:'',
                errores:''
                
            }
        },


        created(){
            db.collection('marcas_auto').onSnapshot(res=>{
                const changes = res.docChanges()
                changes.forEach(change =>{
                    if (change.type === 'added') {
                        this.marcas_autos.push({
                            ...change.doc.data(),
                            id:change.doc.id
                        })                      
                   
                    }
                })
            })

        },
            

        
        computed:{
            sliderType(){
                if (this.sliderValue >= 25 && this.sliderValue <= 40){
                    return "is-success";
                } else if (this.sliderValue >= 41 && this.sliderValue <= 50){
                    return "is-warning";
                }
                return "is-danger";
            }
        },

        methods:{
            filtrar(){      
                this.errores = ''
                var filtro = this.filtro 
                if(filtro != ''){
                     this.$emit('filtroHome',filtro)  
                }else{
                    this.errores = 'Seleccionar un filtro!'
                }  
               
            },

            reset(){
                this.filtro = ''
                this.$emit('cargarHome')
            }
        }
}
</script>