<template>
<div class="container">
  <div class="page-wrap">
    <div class="wrapper">
      <div class="search">
        <form class="form">
          <i class="it-search"></i><input v-model="searchText"/>
	</form>
      </div>
    </div>
    <BookList :books="books" />
  </div>
  <footer class="footer">
    <h2 id = "footer-text">Here's a link to my <a href="https://github.com/BattousaiKenshin/creative3">Github</a>account</h2>
  </footer>
</div>
</template>

<script>
// @ is an alias to /src
import BookList from '../components/BookList.vue'

export default {
  name: 'Home',
  components: {
    BookList
  },
  data() {
    return {
      searchText: ''
    }
  },
  computed: {
    books() {
      return this.$root.$data.books.filter(book => book.book_one.toLowerCase().search(this.searchText) >= 0 || book.book_two.toLowerCase().search(this.searchText) >= 0);
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  min-height: 100vh;
}
.page-wrap {
  padding-bottom: 50px;
}
.footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  background:#1B8AA2;
  color: #F9F9F9;
  text-align: center;
  font-size: 10px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.search {
  border: 10px solid #ccc;
  border-radius: 4px;
  width: 50%;
}
form {
  display: table;
  width: 100%;
}
input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
