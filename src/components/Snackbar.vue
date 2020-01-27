  <template>
  <div class="text-center">
    <v-btn
      dark
      color="red darken-2"
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>

    <v-snackbar
        @input="$emit('statusSnackbar')" 
        :value="open"        
        :timeout="timeout"
        right        
    >
      {{ text }}      
    </v-snackbar>
  </div>
</template>

<script>

export default {
    props:['open'],
    data: ()=>({
        text: 'Sesion cerrada !',
        timeout: 3000,        
    }), 
    
}
</script>