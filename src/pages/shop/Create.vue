<template>
  <div class="create">
    <input class="create_input" type="text" v-model="title" placeholder="Название">
    <input class="create_input" type="text" v-model="content" placeholder="Описание">
    <input class="create_input" type="number" v-model="price" placeholder="Цена">
    <a @click.prevent="store" class="create_btn" href="#">+</a>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        title: '',
        content: '',
        price: ''
      }
    },
    methods: {
      store() {
        let item = {
          id: 1,
          title: this.title,
          content: this.content,
          price: this.price
        }
        let items = JSON.parse(localStorage.getItem('items'))

        if (!items) {
          let itemsArr = []
          itemsArr.unshift(item)
          localStorage.setItem('items', JSON.stringify(itemsArr))
          localStorage.setItem('item_id', '1')
        } else {
          let itemId = localStorage.getItem('item_id')
          itemId ++
          localStorage.setItem('item_id', itemId)
          item.id = itemId
          items.unshift(item)
          localStorage.setItem('items', JSON.stringify(items))
        }
        this.$router.push({name: 'items.index'})
      }
    }
  }
</script>

<style lang="scss">
.create{
  display: inline-grid;
  margin-top: 25px;
  &_input{
    font-size: 18px;
    border: 1px solid #6a6a6a;
    color: #000;
    padding: 7px 15px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
  &_btn{
    text-decoration: none;
    color: #6A6A6A;
    border: 1px solid #6a6a6a;
    border-radius: 5px;
    padding: 7px 15px;
    transition: all .2s ease-in-out;
    text-align: center;
    &:hover{
      background-color: #6a6a6a;
      color: #ffffff;
    }
  }
}

</style>