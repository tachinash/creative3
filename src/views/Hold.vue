<template>
<div>
  <div class="inHold" v-if="this.$root.$data.hold.length != '0'">
    <h1 class="hold"><u><em>Holds</em></u></h1>
    <div class="books">
    <div class="book" v-for="(book, index) in this.$root.$data.hold" :key="book.id">
      <h1>{{book.book_one}} {{book.book_two}}</h1>
      <h2 id="author">---{{book.author}}</h2>
      <button class="auto" v-on:click="remove(book, index)">Remove from Holds</button>
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
  name: 'Hold',
  computed: {
    books() {
      return this.$root.$data.hold;
    }
  },
  methods: {
    remove(book, index) {
      this.$root.$data.hold.splice(index, 1);
      document.getElementById("error").innerHTML = "<p>{{book.book_one}} {{book.book_two}} has been removed</p>"
    }
  }
}
</script>

<style scoped>
.inHold {
  margin-top: 20px;
}
.hold {
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
  background: #298A9F;
  color: #37C0DE;
  border: none;
}
.books {
  display: flex;
}
.book {
  margin-right: 30px;
  width: 300px;
  color: #16778C;
}
#author {
  text-align: right;
}
</style>
