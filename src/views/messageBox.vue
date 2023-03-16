<template>
  <div class="app-container">
    <xf-button @click="handleClick">按钮</xf-button>
    <xf-button @click="handleClick2">按钮</xf-button>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  methods: {
    handleClick() { 
      this.$message.success({
        message: "nihao ",
        showClose: true,
      });
    },
    handleClick2() { 
      this.$message.error({
        message: "nihao ",
        showClose: true,
      });
    },
  },
  mounted() { 
  },
};
</script>

<style scoped lang="scss">
</style>