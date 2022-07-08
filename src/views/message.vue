<template>
  <div class="app-container">
    <xf-button plain @click="handleClick">默认按钮</xf-button>
    <!-- <Message></Message> -->
  </div>
</template>

<script>
import Message from "../components/Message";
export default {
  name: "",
  // components: {Message},
  data() {
    return {};
  },
  methods: {
    handleClick() {
      console.log(1, "----->1");
      // Message("成功啦！");
      // Message.success('耶✌！')
      Message({
        message:'成功！✌',
        type:'warning',
      })
       
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
</style>