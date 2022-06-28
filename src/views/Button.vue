<template>
  <div class="app-container">
    <div class="col">
      type
      <Button>默认按钮</Button>
      <Button type="primary">默认按钮</Button>
      <Button type="success">默认按钮</Button>
      <Button type="info">默认按钮</Button>
      <Button type="warning">默认按钮</Button>
      <Button type="danger">默认按钮</Button>
    </div>
    <div class="col">
      round
      <Button round>默认按钮</Button>
      <Button round type="primary">默认按钮</Button>
      <Button round type="success">默认按钮</Button>
      <Button round type="info">默认按钮</Button>
      <Button round type="warning">默认按钮</Button>
      <Button round type="danger">默认按钮</Button> 
    </div>
    <div class="col">
      plain
      <Button plain>默认按钮</Button>
      <Button plain type="primary">默认按钮</Button>
      <Button plain type="success">默认按钮</Button>
      <Button plain type="info">默认按钮</Button>
      <Button plain type="warning">默认按钮</Button>
      <Button plain type="danger">默认按钮</Button>
    </div> 
    <div class="col">
      icon
      <Button icon="icon-code" plain></Button>
      <Button icon="icon-history" plain type="primary"></Button>
      <Button icon="icon-QRcode" plain type="success"></Button>
      <Button icon="icon-all-fill" type="info"></Button>
      <Button icon="icon-browse" plain type="warning"></Button>
      <Button icon="icon-cut" plain type="danger"></Button>
    </div> 
    <div class="col">
      size
      <Button icon="icon-code" plain></Button>
      <Button icon="icon-history" plain type="primary"></Button>
      <Button icon="icon-QRcode" plain type="success"></Button>
      <Button icon="icon-all-fill" type="info"></Button>
      <Button icon="icon-browse" plain type="warning"></Button>
      <Button icon="icon-cut" plain type="danger"></Button>
    </div> 
  </div>
</template>

<script>
import Button from '@/components/Button/index.vue'
export default {
  components: {Button},
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