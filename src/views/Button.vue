<template>
  <div class="app-container">
    <div class="col">
      type
      <xf-button>默认按钮</xf-button>
      <xf-button type="primary">默认按钮</xf-button>
      <xf-button type="success">默认按钮</xf-button>
      <xf-button type="info">默认按钮</xf-button>
      <xf-button type="warning">默认按钮</xf-button>
      <xf-button type="danger">默认按钮</xf-button>
    </div>
    <div class="col">
      round
      <xf-button round>默认按钮</xf-button>
      <xf-button round type="primary">默认按钮</xf-button>
      <xf-button round type="success">默认按钮</xf-button>
      <xf-button round type="info">默认按钮</xf-button>
      <xf-button round type="warning">默认按钮</xf-button>
      <xf-button round type="danger">默认按钮</xf-button> 
    </div>
    <div class="col">
      plain
      <xf-button plain>默认按钮</xf-button>
      <xf-button plain type="primary">默认按钮</xf-button>
      <xf-button plain type="success">默认按钮</xf-button>
      <xf-button plain type="info">默认按钮</xf-button>
      <xf-button plain type="warning">默认按钮</xf-button>
      <xf-button plain type="danger">默认按钮</xf-button>
    </div> 
    <div class="col">
      icon
      <xf-button icon="icon-code" plain></xf-button>
      <xf-button icon="icon-history" plain type="primary"></xf-button>
      <xf-button icon="icon-QRcode" plain type="success"></xf-button>
      <xf-button icon="icon-all-fill" type="info"></xf-button>
      <xf-button icon="icon-browse" plain type="warning"></xf-button>
      <xf-button icon="icon-cut" plain type="danger"></xf-button>
    </div> 
    <div class="col">
      disabled
      <xf-button disabled icon="icon-code" plain></xf-button>
      <xf-button icon="icon-history" plain type="primary"></xf-button>
      <xf-button icon="icon-QRcode" plain type="success"></xf-button>
      <xf-button icon="icon-all-fill" type="info"></xf-button>
      <xf-button icon="icon-browse" plain type="warning"></xf-button>
      <xf-button icon="icon-cut" plain type="danger"></xf-button>
    </div> 
  </div>
</template>

<script>
// import Button from '@/components/Button/index.vue'
export default {
  // components: {Button},
  data() {
    return {

    }
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
.col{
  display: inline-block;
  padding: 15px;
}
</style>