<template>
  <my-header></my-header>
</template>

<script>
import MyHeader from './components/MyHeader.vue'

export default {
  components: { MyHeader },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans';
  font-size: 11px;
  color: #1B1F3B;
  text-decoration: none;
}
</style>
