
<template>
    <v-app-bar
      app
      color="teal darken-4"
      dark
      dense
      flat
      
      
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      
      <v-divider
      class="mx-4"
      inset
      vertical
    ></v-divider>

      <!-- Menu de opciones -->
      <v-toolbar-items class="hidden-sm-and-down navbar-list">
        <v-btn to='/' text color="white" small>Vehiculos</v-btn>
              
                            
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <!-- Area log in registro -->
      <v-toolbar-items class="hidden-sm-and-down navbar-list">
        <v-btn to='/test' color="white" text small="">Test</v-btn>
        <v-btn to='/about' color="white" text small="">Nosotros</v-btn>

        <!-- Al iniciar sesion-->  
        <v-menu offset-y v-if="user">
          <template  v-slot:activator="{ on }">
            <v-btn
              color="teal"
              small
              v-on="on"
            >
              {{user.email}}
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
             
              <v-btn depressed small text block to="/perfil"> <v-icon color="teal">mdi-account</v-icon>Perfil</v-btn>
            </v-list-item>
            <v-spacer></v-spacer>
            <v-divider></v-divider>
            <v-list-item>
              <v-btn depressed small text block @click="logout"> <v-icon color="red">mdi-logout</v-icon>Cerrar sesion</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Al no estar logeado-->
        <v-btn to='/login' color="teal" small v-else>Iniciar sesion</v-btn> 
      </v-toolbar-items>

      <!-- Al minimizar el navegador-->
        <v-menu bottom left>
            <template v-slot:activator="{ on }">
                <v-btn style="float:right" class="hidden-md-and-up" dark icon v-on="on">
                    <v-icon color="white">mdi-menu</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item-group> 
                    <v-list-item>
                    <v-btn  to='/' text small>Home</v-btn>
                    </v-list-item>  

                    <v-list-item>
                    <v-btn  to='/about' text small>About</v-btn>  
                    </v-list-item>   


                    <v-list-item>
                    <v-btn  to='/test' text small>Test</v-btn>  
                    </v-list-item>          
                               
                        
                            
                </v-list-item-group>
                
                
                <v-list-item-group>             
                    <v-list-item>
                    <v-btn to='/login' small color="tea" outlined text>Iniciar sesion</v-btn>   
                    </v-list-item>             
                                        
                </v-list-item-group>
            </v-list>
        </v-menu>   

    </v-app-bar>
</template>

<script>
import firebase from 'firebase/app'
export default {
  data(){
    return{
      user: null,

    }  
  },

  methods:{
    logout(){
      firebase.auth().signOut().then(()=>{        
        this.$router.push('/')
        this.$emit('emitting')
      }).catch((e)=>{
        console.log(e.message)
      })
    },

  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.user = user
      }else{
        this.user = null
      }
    })
  }
  
}
</script>
