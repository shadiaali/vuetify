<template>
  <v-app class="black lighten-4">
    <Navbar/>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: { Navbar },
  name: "App",
  data() {
    return {};
  }
};
</script>
