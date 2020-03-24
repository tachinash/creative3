<template>
  <div id="app">
    <div id="menu">
    <div id="brand">
      <router-link to="/"><img src="/images/library_logo.jpg"></router-link> |
    </div>
    <div id="side">
      
      <router-link to="/about" class="item">About</router-link>
      <router-link to="/hold" class="item">Holds</router-link>
      <router-link to="/cart" class="item">Check Out</router-link>
    </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 50px 100px;
}
#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}
#menu a {
  color: #37C0DE;
}
#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}
#brand img {
  height: 200px;
}
#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
  padding: 15px;
}
.item {
  margin-right: 25px;
  font-size: 40px;
  text-decoration: none;
}
.item a {

  color: #7117BD;
}
</style>
