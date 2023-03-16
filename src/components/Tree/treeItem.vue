<template>
  <div
    :class="{ treeItem: true, pink: hightLight }"
    @click="treeItemClick"
  >
    {{ data.deptName }}
  </div>
</template>

<script>
export default {
  name: "treeItem",
  components: {},
  props: {
    data: { type: Object },
    hightLight: { type: Boolean },
  },
  data() {
    return {};
  },
  methods: {
    treeItemClick(){
      this.$emit('click',this.data)
    }
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.treeItem {
  padding-left: 17px;
  cursor: pointer;
  line-height: 30px;
}
.pink {
  background-color:  rgb(208, 222, 255);
}
</style>