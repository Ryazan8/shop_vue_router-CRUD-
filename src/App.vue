<template>
  <div class="container">
      <div class="nav">
        <router-link class="nav_item" to="/">Главная</router-link>
        <router-link class="nav_item" to="/items">Товары</router-link>
      </div>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style lang="scss">
  *{
    background: #cfa07e;
    padding: 0;
    margin: 0;
  }
  .container{
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
  .nav{
    margin-top: 50px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    &_item{
      text-decoration: none;
      color: #000;
      margin-right: 30px;
      transition: all .3s ease-in-out;
      &:hover{
        text-decoration: underline;
      }
    }
  }

</style>
