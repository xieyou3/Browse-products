<template>
  <div class="group_1 page">
    <img @click="gotohome" class="image_4" src="/public/image/s12.png" />
    <div>
      <div v-for="store in data" :key="store.sellerId" class="store">
        <span class="font_1">{{ store.sellerName }}</span>
        <div v-for="item in store.content" :key="item.itemId" class="item">
          <div class="items">
            <input type="checkbox" @change="updateSelection(item, $event)" />
            <img :src="item.img" :alt="item.title" class="item-image" />
            <div class="infor">     
              <span class="font_2">{{ item.description }}</span>
              <div class="group_2">
                <span class="font_3">￥{{ item.price }}</span>
                <Counter
                  ref="counter"
                  class="font_4"
                  :initialQuantity="item.quantity"
                  @update:quantity="updateResult(item, $event)"
                ></Counter>
              </div>
            </div>
            <img src="/public/image/y1.png" class="image_5" @click="removeCart(item)">
          </div>
        </div>
      </div>
      <div class="group_3"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Counter from "@/components/counter.vue";
export default {
  components: {
    Counter,
  },
  data() {
    return {
      data: [],
      result: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    gotohome() {
      this.$router.push({ path: "/home" });
    },
    fetchData() {
      const token = localStorage.getItem("token");
      const config = {
        method: "get",
        url: `http://127.0.0.1:4523/m1/4275135-0-default/cart/display/all`,
        headers: {
          token: `${token}`,
        },
      };
      axios(config)
        .then((response) => {
          this.data = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateSelection(item, event) {
      if (event.target.checked) {
        this.result.push({ itemId: item.itemId, quantity: item.quantity });
      } else {
        this.result = this.result.filter(
          (resultItem) => resultItem.itemId !== item.itemId
        );
      }
      console.log(this.result);
    },
    updateResult(item, newQuantity) {
      item.quantity = newQuantity;
      const index = this.result.findIndex(
        (resultItem) => resultItem.itemId === item.itemId
      );
      // 如果商品已经在 result 数组中
      if (index !== -1) {
        // 更新该商品的数量为新数量
        this.result[index].quantity = newQuantity;
      }
      console.log(this.result);
    },
    removeCart(item){
        const token = localStorage.getItem("token");
      const config = {
        method: "post",
        url: `http://127.0.0.1:4523/m1/4275135-0-default/cart/remove/${item.itemId}`,
        headers: {
          token: `${token}`,
        },
      };
      axios(config)
        .then((response) => {
          this.data = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    },
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: columns;
  background-color: rgb(235, 235, 235);
}
.group_1 {
  display: flex;
  flex-direction: column;
}
.group_2 {
  display: flex;
  flex-direction: column;
}
.group_3 {
  height: 5rem;
background-color:white ;
position: fixed;
		width: 100%;
			right:0px;
	bottom:3rem;
}
.image_4 {
  width: 140px;
  height: 33px;
  margin-top: 50px;
}
.image_5 {
  width: 30px;
  height: 30px;
  margin-left: 3rem;;
}
.store {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 3rem;
  margin-top: 1rem;
  /* width:92%; */
  /* margin-left: 3rem; */
}
.font_1 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  font-size: 1.2rem;
  font-family: HarmonyOS Sans SC;
}
.font_2 {
  font-size: 1rem;
  margin-top: 1rem;
  font-family: HarmonyOS Sans SC;
}
.font_3 {
  color: red;
  font-size: 1rem;
  margin-top: 1rem;
  font-family: HarmonyOS Sans SC;
  font-weight: 800;
}
.font_4 {
  font-size: 1rem;
  margin-top: 1rem;
  font-family: HarmonyOS Sans SC;
}
.item {
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
  /* margin-top:1rem; */
}
.items {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
}
.infor {
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  width: 80%;
}
.item-image {
  width: 8rem;
  height: 8rem;
  margin-left: 1.2rem;
}
</style>