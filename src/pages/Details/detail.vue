<template>
    <div class="detail-container">
      <div class="product-image">
        <img :src="product.image" :alt="product.title" />
      </div>
      <div class="product-info">
        <h2>{{ product.name }}</h2>
        <p class="product-price">{{ product.price }}</p>
        <p class="product-price">{{ product.description }}</p>
        <p class="product-price">{{ product.stock }}</p>
        <div class="buttons">
          <button @click="buyNow">立即购买</button>
          <button @click="addToCart">加入购物车</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import axios from 'axios';


  export default {
    data() {
      return {
        product: {} // 商品信息
      };
    },
    mounted() {
      // 从路由参数中获取商品 ID，然后根据 ID 获取商品信息
      const productId = this.$route.params.id;
      this.getProductDetails(productId);
    },
    methods: {
    getProductDetails(productId) {
      // 发起请求获取商品详情
      const url = `http://127.0.0.1:4523/m1/3573397-0-default/staff/dish/${productId}`;

      axios.get(url)
        .then(response => {
          // 成功获取商品详情后更新数据
          this.product = response.data.data;
        })
        .catch(error => {
          // 处理请求失败的情况
          console.error('Error fetching product details:', error);
        });
    },
    buyNow() {
      console.log("立即购买");
    },
    addToCart() {
      console.log("加入购物车");
    }
  }
};
  </script>
  
  <style scoped>
  .detail-container {
    display: flex;
    justify-content: space-between;
  }
  
  .product-image {
    flex: 1;
  }
  
  .product-image img {
    width: 100%;
    height: auto;
  }
  
  .product-info {
    flex: 1;
    padding: 0 20px;
  }
  
  .product-info h2 {
    margin-top: 0;
  }
  
  .product-price {
    font-size: 20px;
    color: #333;
  }
  
  .buttons {
    margin-top: 20px;
  }
  
  .buttons button {
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  .buttons button:last-child {
    margin-right: 0;
  }
  </style>
  