<template>
  <div
    :class="[
      'el-message',
      type && !iconClass ? `el-message--${type}` : '',
      center ? 'is-center' : '',
      showClose ? 'is-closable' : '',
      customClass,
    ]"
    v-show="visible"
  :style="handleTop"
  >
  <div>

    <span :class="['iconfont', iconClas]"></span>
    {{ message + id }}
  </div>
    <span
      v-show="showClose"
      class="iconfont icon-close"
      @click="handleclose"
    ></span>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      visible: true,
      message: "",
      iconClass: "",
      center: false,
      type: "info",
      showClose: true,
      customClass: "",
      time:null,
      top:0,
    };
  },
  computed: {
    iconClas() {
      let temObj = {
        success: "icon-success-fill",
        error: "icon-error",
        warning: "icon-warning",
        info: "icon-info",
      };
      return temObj[this.type];
    },
    handleTop(){
      return {top:this.top + 'px'}
    }
  },
  methods: {
    handleclose() { 
      this.onClose()
    },
    startTime(){
    this.time =  setTimeout(()=>{
        this.onClose()
      },3000)
    }
  },
  mounted() { 
    this.startTime()
  },
  beforeDestroy(){
    clearInterval(this.time)
  }
};
</script>

<style scoped lang="scss">
.el-message {
  position: absolute;
  min-width: 280px;
  height: 50px;
  border: 1px solid;
  line-height: 50px;
  padding: 0 20px;
  text-align: left;
  border-radius: 4px;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
}
.el-message--success {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.el-message--info {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
}
.el-message--warning {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #f5dab1;
}
.el-message--error {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fbc4c4;
}
.is-center {
  text-align: center;
}
.icon-close {
  cursor: pointer;
}
</style>