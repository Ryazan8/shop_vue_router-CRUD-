<template>
  <div>
    <div class="div_create_btn">
      <router-link class="index_btn" :to="{name: 'items.create'}">Добавить</router-link>
    </div>
    <div class="item" v-if="items">
      <div class="item_card" v-for="(item, index) in items">
        <p class="item_card-title">{{ item.title }}</p>
        <p class="item_card-content">{{ item.content }}</p>
        <p class="item_card-price">{{ item.price }} ₽</p>

        <router-link class="item_card-btn-look" :to="{name: 'items.show', params:{id: item.id}}">Посмотреть
        </router-link>

        <button class="item_card-btn-delete" @click="remove(index)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.getItems()
  },
  methods: {
    getItems() {
      this.items = JSON.parse(localStorage.getItem('items'))
    },
    remove(index) {
      this.items.splice(index, 1)
      localStorage.setItem('items', JSON.stringify(this.items))
    }
  }
}
</script>

<style lang="scss">
.div_create_btn {
  margin-top: 50px;
  text-align: center;
}

.index_btn {
  text-decoration: none;
  color: #6A6A6A;
  border: 1px solid #6a6a6a;
  border-radius: 5px;
  padding: 7px 15px;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: #6a6a6a;
    color: #ffffff;
  }
}

.item {
  display: flex;
  margin: 100px auto;

  &_card {
    border: 1px solid #6a6a6a;
    margin-right: 50px;
    text-align: center;
    padding: 15px 30px;
    background-color: #c3c3c3;
    max-width: 200px;
    border-radius: 5px;

    &-title {
      font-size: 24px;
      font-weight: 600;
      text-transform: capitalize;
      padding-bottom: 10px;
      background: #c3c3c3;

    }

    &-content {
      padding-bottom: 10px;
      font-size: 16px;
      background: #c3c3c3;
    }

    &-price {
      padding-bottom: 10px;
      font-size: 20px;
      background: #c3c3c3;
      font-weight: 600;
    }

    &-btn-look {
      margin-bottom: 10px;
      background-color: #c3c3c3;
      border: 1px solid #6a6a6a;
      text-decoration: none;
      color: #000;
      padding: 5px 10px;
      border-radius: 5px;
      margin-right: 10px;
      transition: all .2s ease-in-out;

      &:hover {
        background-color: #6a6a6a;
        color: #fff;
      }
    }

    &-btn-delete {
      margin-top: 10px;
      background-color: #c3c3c3;
      border: 1px solid #6a6a6a;
      text-decoration: none;
      color: #000;
      padding: 5px 10px;
      border-radius: 5px;
      margin-right: 10px;
      transition: all .2s ease-in-out;

      &:hover {
        background-color: #6a6a6a;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>