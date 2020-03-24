<template>
<div>
  <div class="inCart" v-if="this.$root.$data.checkout.length != '0'">
    <h1 class="cart"><u><em>Check Out</em></u></h1>
    <div class="books">
    <div class="book" v-for="(book, index) in this.$root.$data.checkout" :key="book.id">
      <h1>{{book.book_one}} {{book.book_two}}</h1>
      <h2 id="author">---{{book.author}}</h2>
      <button class="auto" v-on:click="remove(book, index)">Remove from Cart</button>
      <div class="error"></div>
    </div>
    </div>
  </div>
  <div class="empty" v-else>
    <h1>Go back and pick out some books!</h1>
  </div>
</div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
    }
  },
  computed: {
    books() {
      return this.$root.$data.checkout;
    }
  },
  methods: {
    remove(book, index) {
      this.$root.$data.checkout.splice(index, 1);
      document.getElementById("error").innerHTML = "<p>{{book.book_one}} {{book.book_two}} has been removed</p>"
      --this.$root.$data.numItems;
    }
  }
}
</script>

<style scoped>
.inCart {
  margin-top: 20px;
}
.cart {
  color: #37C0DE;
  font-size: 50px;
  text-align: center;
  border-bottom: 5px;
}
.empty {
  text-align: center;
  margin-top: 50px;
  font-size: 50px;
}
button {
  height: 50px;
  background: #16778C;
  color: #37C0DE;
  border: none;
}
.books {
 display: flex; 
}
.book {
  margin-right: 30px;
  width: 300px;
}
#author {
  text-align: right;
}
</style>
