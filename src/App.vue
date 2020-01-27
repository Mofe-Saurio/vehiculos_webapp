<template>
  <v-app>  
    <!-- Snackbar -->   
    <Snackbar @statusSnackbar="snackbar = false" :open="snackbar"/>
    <!-- Navbar -->   
    <Navbar @emitting="snackbar = true"/>
    <v-content class="content-wrap">
      <router-view></router-view>
    </v-content>

    <!-- Footer -->
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Snackbar from '@/components/Snackbar';

export default {
  name: 'App',

  components: {
    Navbar, Footer, Snackbar
  },

  data: () => ({    
    multiLine: true,
    snackbar: false,
    text: 'I\'m a multi-line snackbar.',
  }),
};
</script>

<style lang="scss">
 .v-application{
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif !important
 }
 .v-card__subtitle, .v-card__text, .v-card__title{
   padding: 10px !important;
 }
 .v-application--wrap{
   background-color: whitesmoke !important;
 }


</style>