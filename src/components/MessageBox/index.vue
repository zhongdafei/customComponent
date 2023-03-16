<template>
  <div :class="[type, 'message']" :style="'top:'+ top + 'px'">
    <div class="icon"></div>
    <div :class="[center, 'text']">{{ message }}</div>
    <div v-show="showClose" class="close" @click="handleClose">×</div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      message: "",
      type: "info",
      showClose: false,
      center: false,
      duration: 2000,
      top:0,
    };
  },
  methods: {
    handleClose() {
      this.close();
    },
  },
  mounted() {
    setTimeout(() => {
      this.close();
    }, this.duration);
  },
};
</script>

<style scoped lang="scss">
.message {
  min-width: 20%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid;
  border-radius: 2px;
  display: flex;
  padding: 10px;
  .text {
    flex: 1;
    padding: 0 10px;
  }
  .center {
    text-align: center;
  }
  .close {
    cursor: pointer;
  }
}
.info {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}
.warning {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #f5dab1;
}
.success {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.error {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fbc4c4;
}
</style>