<template>
  <AppHeader/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
// import HelloWorld from '../components/HelloWorld.vue';
import AppHeader from '../components/AppHeader.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    // HelloWorld,
    AppHeader,
  },
});
</script>
