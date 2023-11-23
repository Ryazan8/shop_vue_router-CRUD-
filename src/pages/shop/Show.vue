<template>
  <div>
    <div>
      <router-link class="back_btn" to="/items">🠔</router-link>
    </div>
    <div class="item">
      <div class="item_card" v-if="item">
        <p class="item_card-title">{{ item.title }}</p>
        <p class="item_card-content">{{ item.content }}</p>
        <p class="item_card-price">{{ item.price }} ₽</p>
        <router-link class="edit_btn" :to="{name: 'items.edit'}">Изменить</router-link>
      </div>
    </div>


  </div>
</template>

<script>
 export default {
   data() {
     return{
       item: null,
       id: this.$route.params.id
     }
   },
   mounted() {
     this.getItem()
   },
   methods: {
     getItem() {
       let items = JSON.parse(localStorage.getItem('items'))
       this.item = items.find(storageItem => parseInt(storageItem.id) === parseInt(this.id))
     }
   }
 }
</script>

<style lang="scss" scoped>
.back_btn{
  text-decoration: none;
  color: #000;
  font-weight: 400;
  font-size: 36px;
  margin-left: 150px;
  &:hover{
    text-decoration: underline;
  }
}

.item {
  display: flex;
  margin: 60px auto;

  &_card {
    border: 1px solid #6a6a6a;
    margin: 0 auto;
    text-align: center;
    padding: 15px 30px;
    background-color: #c3c3c3;
    max-width: 500px;
    border-radius: 5px;
    height: 250px;

    &-title {
      font-size: 36px;
      font-weight: 600;
      text-transform: capitalize;
      padding-bottom: 20px;
      background: #c3c3c3;

    }

    &-content {
      padding-bottom: 20px;
      font-size: 24px;
      background: #c3c3c3;
    }

    &-price {
      padding-bottom: 20px;
      font-size: 30px;
      background: #c3c3c3;
      font-weight: 600;
      margin-bottom: 20px;
    }

  }
}

.edit_btn{
  margin-top: 20px;
  background-color: #c3c3c3;
  border: 1px solid #6a6a6a;
  text-decoration: none;
  color: #000;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: #6a6a6a;
    color: #fff;
    cursor: pointer;
  }

}
</style>