<template>
  <v-app style="overflow-y: hidden;overflow-x: hidden;">
     <AppHeader/>
     <v-container style="margin-left:201px;margin-top:65px;width:calc(100% - 100px); height:calc(100% - 64px); position: absolute;overflow-y: auto;">
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
