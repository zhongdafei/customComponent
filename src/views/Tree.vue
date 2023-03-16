<template>
  <div class="tree">
    <tree :data="data"></tree>
  </div>
</template>

<script>
import Vue from "vue";
import tree from "@/components/Tree/tree";
import treeData from "@/components/Tree/tree.json";
export default {
  name: "",
  components: { tree },
  provide() {
    this.hightLight = Vue.observable({
      value: "",
    });
    this.serHightLight = (data) => {
      this.hightLight.value = data;
    };
    return {
      hightLight: this.hightLight,
      serHightLight: this.serHightLight,
    };
  },
  data() {
    return {
      data: this.loop(treeData),
    };
  },
  methods: {
    loop(arr, parent) {
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.allParentId = parent ? parent + "-" + element.id : element.id;
        if (element.children && element.children.length) {
          this.loop(element.children, element.allParentId);
        }
      }
      return arr;
    },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style scoped lang="scss">
.tree  {
  height: 100%;
  overflow-y: auto;
}
</style>