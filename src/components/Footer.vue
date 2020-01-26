<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="teal darken-4 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
 PRICELINE, PRICELINE.COM, NAME YOUR OWN PRICE, EXPRESS DEALS and TONIGHT ONLY DEAL are service marks or registered service marks of priceline.com LLC. All material herein © 1998-2020 priceline.com LLC, all rights reserved. priceline.com LLC is located at 800 Connecticut Ave. Norwalk, CT 06854.

*Priceline Name Your Own Price® and Express Deals® services are different from published price services. Exact hotel, airline and rental car company are shown only after booking. All sales final.

*Savings based on all flight and hotel itineraries booked together as a package, compared to price of same flight and hotel booked separately on priceline.com. Savings vary and may not be available for all packages.       </v-card-text>

      
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>