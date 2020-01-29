<template>
    <v-container>
        <v-card shaped class="mx-auto">
            <v-avatar width="90" height="90">
              <img src="https://avatarfiles.alphacoders.com/101/101236.jpg" >
            </v-avatar>
        
            <v-card-title class="d-flex justify-center">De lo que me falto :(</v-card-title>
            <v-card-subtitle class="d-flex justify-center">Por falta de tiempo y algunos problemas fuera de mi alcance no pude realizar bien el trabajo</v-card-subtitle>

           <v-list shaped>
      <v-subheader>REPORTE</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
        </v-card>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      item: 1,
      items: [
        { text: 'El filtro no funciona correctamente, al filtrar por segunda vez no encuentra data - borrar filtro primero y luego buscar data', icon: 'mdi-flag' },
        { text: 'Editar los campos del perfil', icon: 'mdi-flag' },
        { text: 'Manejo de imagenes directamente de firebase', icon: 'mdi-flag' },
      ],
    }),
  }
</script>