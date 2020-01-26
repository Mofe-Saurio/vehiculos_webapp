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
            <v-btn small text class="float-right" color="red">Reset</v-btn>
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
            <v-checkbox              
            label="Honda"
            color="red"
            value="honda"
            hide-details
            class="marca-checkbox"
        ></v-checkbox>

        <v-checkbox              
            label="Kia"
            color="red"
            value="honda"
            hide-details
            class="marca-checkbox"
        ></v-checkbox>

        <v-checkbox              
            label="Hiundai"
            color="red"
            value="honda"
            hide-details
            class="marca-checkbox"
        ></v-checkbox>
        </v-card-text>
        
        <v-divider class="mx-4"
        inset >
        </v-divider>             
        </v-row>

        <v-row no-gutters dense>           
        <v-card-title class="titulo-filtro">
            <v-row no-gutters dense >
            Tipo de vehiculo
            </v-row>
        </v-card-title>
        <v-card-text>
            <v-checkbox              
            label="Sedan"
            color="red"
            value="honda"
            hide-details
            class="marca-checkbox"
        ></v-checkbox>

        <v-checkbox              
            label="SUV"
            color="red"
            value="honda"
            hide-details
            class="marca-checkbox"
        ></v-checkbox>

        <v-checkbox              
            label="Van"
            color="red"
            value="honda"
            hide-details
            class="marca-checkbox"
        ></v-checkbox>
        </v-card-text>
        
        <v-divider class="mx-4"
        inset >
        </v-divider>             
        </v-row>
       
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
  margin-top: 10px;
  padding: 5px
}
.filtro-divider{
  margin:0.5rem 0 
}
</style>

<script>
export default {
    data() {
            return {
                sliderValue: 0
            }
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
                console.log('filtro')
            }
        }
}
</script>