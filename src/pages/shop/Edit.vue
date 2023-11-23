<template>
  <div>
    <div>
      <router-link class="back_btn" to="/items">🠔</router-link>
    </div>
    <div v-if="item">
      <div class="create">
        <input class="create_input" type="text" v-model="item.title">
        <input class="create_input" type="text" v-model="item.content">
        <input class="create_input" type="number" v-model="item.price">
        <a class="create_btn" @click.prevent="update" href="#">Сохранить</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      item: {
        title: '',
        content: '',
        price: '',
      },
      id: this.$route.params.id
    }
  },
  mounted() {
    this.getItems()
  },
  methods: {
    getItems() {
      this.items = JSON.parse(localStorage.getItem('items'))
      this.item = this.items.find(storageItem => parseInt(storageItem.id) === parseInt(this.id))
    },
    update() {
      this.items.forEach(item => {
        if (item.id === this.item.id) {
          item.title = this.item.title
          item.content = this.item.content
          item.price = this.item.price
        }
        localStorage.setItem('items', JSON.stringify(this.items))
        this.$router.push({name: 'items.index'})
      })
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
  &:hover{
    text-decoration: underline;
  }
}

.create{
  display: inline-grid;
  margin-top: 50px;
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