<template>
  <v-app>
     <AppHeader/>
     <v-container style="margin-left:201px;margin-top:65px;width:85%; height:88%; position: absolute;">
        <router-view/>
     </v-container>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
  },
  data: () => ({
    //
  }),
};
</script>
