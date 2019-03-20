<template>
  <div class="home">
    <h1>home page</h1>
    
  <v-btn class="pink white--text">click me</v-btn>
  <v-btn depressed color="blue" class="white--text">click me again</v-btn>
  <v-btn flat color="pink">another button</v-btn>
  <!--you can use icon keywords-->
<v-btn depressed small class="pink white--text" ><v-icon left>email</v-icon  ><span>email me</span></v-btn>

<v-btn depressed large class="pink white--text" ><v-icon left>email</v-icon  ><span>email me</span></v-btn>


<v-btn fab flat small dark color="purple white--text" ><v-icon left>favorite</v-icon  ><span>email me</span></v-btn>

  </div>
</template>

<script>
  //import HelloWorld from '../components/HelloWorld'

  export default {
    
  }
</script>
