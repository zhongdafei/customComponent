<template>
  <div class="table">
    <slot></slot>
    <tableHeader :list="list">1234</tableHeader>
  </div>
</template>

<script>
import tableHeader from './table_header'
export default {
  name: "xftable",
  components: {tableHeader},
  prop:{
    data:{type:Object}
  },
  data() {
    return {
      list:[1,2,3,4]
    };
  },
  methods: {},
  mounted() {
  },
};
</script>

<style scoped lang="scss">
</style>