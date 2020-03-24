<template>
<div class="wrapper">
  <div class="books">
    <div class="book" v-for="book in books" :key="book.id">
      
      <div class="left">
        <h1> {{book.book_one}} {{book.book_two}} </h1>
        <h2> ---{{book.author}} </h2>
        <hr/>
        <p>Publisher: {{book.publisher}}</p>
        <p>Address: {{book.publisher_address}}</p>
        <hr/>
      </div>
      
      <div class="right">
        <button class="check" v-on:click="checkOut(book)">Check out this book</button>
        <div id="error">
        </div>
        <button class="hold" v-on:click="onHold(book)">Put this book on hold</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    books: Array
  },
  methods: {
    checkOut(book) {
      if (!this.$root.$data.checkout.includes(book)  && this.$root.$data.numItems < 7 ) {
        this.$root.$data.checkout.push(book);
	this.$root.$data.numItems++;
      }
    },
    onHold(book) {
      if (!this.$root.$data.hold.includes(book)) {
        this.$root.$data.hold.push(book);
      }
    }
  }
}
</script>

<style scoped>
body {
  color: #237A8E;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.books {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 25px;
}

.book {
  margin: 15px;
  margin-top: 50px;
  width: 400px;
}
button {
  height: 50px;
  background: #237A8E;
  color: white;
  border: none;
}
.check {
  float: left;
}
.hold {
  float: right;
}
.left {
}
.right {
}
</style>
