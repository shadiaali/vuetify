<template>
  <nav>
    <v-toolbar absolute flat dark color="transparent">
      <v-toolbar-side-icon @click="drawer = !drawer" class="red--text hidden-md-and-up"></v-toolbar-side-icon>
       <img src="http://shadiaali.ca/images/organs.svg" height="65px" >
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/learnMore">Learn More</v-btn>
        <v-btn flat to="/ball">Recycla-Ball</v-btn>
      </v-toolbar-items>

      <v-btn flat class="hidden-sm-and-down">
        <span>Facebook</span>
        <v-icon right>thumb_up_alt</v-icon>
      </v-btn>

<v-btn flat class="hidden-sm-and-down">
        <span>Instagram</span>
        <v-icon right>favorite</v-icon>
      </v-btn>

    </v-toolbar>

    <v-navigation-drawer absolute temporary app v-model="drawer" class="white">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="red--text darken-4">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="red--text darken-4">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "apps", text: "Home", route: "/" },
        { icon: "sms", text: "Learn More", route: "/learnMore" },
        { icon: "wc", text: "Recycla-Ball", route: "/ball" },
        { icon: "thumb_up_alt", text: "Facebook Feed", route: "/" },
        { icon: "favorite", text: "Instagram Feed", route: "/" },
        { icon: "build", text: "Admin", route: "/admin" }



      ]
    };
  }
};
</script>

<style>
</style>