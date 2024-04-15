<template>
  <div>
    <div class="product-container">
      <div v-for="(item, index) in items" :key="index" class="product-item">
        <img :src="item.url" class="product-image" @click="detail(item)" />
        <div class="product-details">
          <span class="product-name">{{ item.title }}</span>
          <span class="product-price">{{ item.price }}</span>
        </div>
      </div>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span v-for="pageNumber in displayedPageNumbers" :key="pageNumber"
            @click="goToPage(pageNumber)" :class="{ active: pageNumber === currentPage }">
        {{ pageNumber }}
      </span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
      <span class="total-items">共 {{ totalItems }} 条</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: [],
      currentPage: 1,
      itemsPerPage: 8,
      totalItems: 0,
    };
  },
  mounted() {
    this.fetchData();
  },

  methods: {
    
    fetchData() {
      const pageNum = this.currentPage;
      const pageSize = this.itemsPerPage;
      const token = localStorage.getItem("token");
      const config = {
        method: "get",
        url: "http://127.0.0.1:4523/m1/4275135-0-default/item/page?pageNum=${pageNum}&pageSize=${pageSize}",
        headers: {
          Authorization: `Bearer ${token}`,
          // token:
          //   "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoxLCJwaG9uZSI6IjE5ODI5NjY5MzUwIiwibmFtZSI6Im1pem9yZSIsImlkIjoxLCJleHAiOjE2OTkyNDkzOTR9.ph5wDGEcHrina_hFthrER_1noKl_ifopEeOFZZPDQx0",
        },
      };

      axios(config)
        .then((response) => {
          this.items = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    nextPage() {
      this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    detail(item) {
      this.$router.push({ path: "/detail/" + item.id });
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    displayedPageNumbers() {
      const totalPages = this.totalPages;
      if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      } else {
        const currentPage = this.currentPage;
        const firstPage = Math.max(currentPage - 2, 1);
        const lastPage = Math.min(currentPage + 2, totalPages);
        let pages = [];
        for (let i = firstPage; i <= lastPage; i++) {
          pages.push(i);
        }
        return pages;
      }
    },
  },
};
</script>

<style scoped>
.product-container {
  padding: 0 1rem; 
}

.product-item {
  display: inline-block;
  width: 25%; 
  margin-right: 1.25rem; 
  margin-bottom: 1.25rem; 
  box-sizing: border-box;
}

.product-image {
  width: 16rem; 
  height: 18rem; 
}

.product-details {
  margin-top: 0.5rem; 
  text-align: center;
}

.pagination {
  text-align: center; 
  margin-top: 1rem; 
}

.pagination button,
.pagination span {
  margin-right: 0.3125rem; 
  padding: 0.3125rem 0.625rem; 
  border: 0.0625rem solid #ccc; 
  background-color: #fff;
  cursor: pointer;
}

.pagination span.active {
  font-weight: bold;
  color: blue;
}

.total-items {
  display: inline-block; 
  margin-left: 0.625rem; 
}
</style>
