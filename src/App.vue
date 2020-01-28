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
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
  
   line-height: 1.231 !important;
   font-size: 16px !important;
 }

 .v-card__subtitle, .v-card__text, .v-card__title{
   padding: 10px !important;
 }
 .v-application--wrap{
   
 }


</style>