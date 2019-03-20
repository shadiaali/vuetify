<template>
  <!--root vuetify component. all other components should be nested inside-->
  <v-app>
    <!--a vuetify component. When loaded in the template, it renders some html. Can have props (like classes) added for functionality: eg, light/dark. Different props which have values can also be added. For instance, height, There is also a load of classes that can be added right from material design out of the box, such as colours e.g, indigo-->
    <v-toolbar app dark height="50" class="red">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
