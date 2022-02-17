<template>
  <div id="nav" class="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
html {
  font-family: sans-serif;
}
.nav {
  background-color: indianred;
  padding: 32px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & a {
    color: inherit;
  }
}

</style>
