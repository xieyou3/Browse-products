<template>
  <div class="counter">
    <span class="font_1">num:</span>
    <button class="buttonl" @click="deNum()">-</button>
    <span>{{ num }}</span>
    <button class="buttonr" @click="inNum()">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    inNum() {
      this.num++;
    },
    deNum() {
      if (this.num > 1) {
        this.num--;
      }
    },
  },
};
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: row;
  font-size: 20px;
}
.buttonl {
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.buttonr {
  width: 1.4rem;
  height: 1.4rem;
  margin-left: 1rem;
}
</style>