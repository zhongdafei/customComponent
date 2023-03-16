<template>
  <div class="tree-container">
    <div class="tree" v-for="item in data" :key="item.id">
      <div v-if="item.children.length > 0">
        <div
          :class="{
            treeGroup: true,
            pink: hightLight.value.toString().includes(item.allParentId),
          }"
          @click="triggerOpen(item)"
        > 
          <!-- {{
            hightLight.value +
            "---" +
            item.allParentId +
            "---" +
            ids[item.allParentId.toString().split("-").length - 1]
          }}  -->
          <span
            :class="[
              'iconfont',
              item.open ? 'icon-sami-select' : 'icon-add-select',
            ]"
          ></span>
          <span>{{ item.deptName }}</span>
        </div>
        <ZTree
          v-show="item.open"
          :data="item.children"
        ></ZTree> 
      </div>
      <template v-else>
        <tree-item
          :data="item"
          @click="leftClick(item)"
          :hightLight="hightLight.value == item.allParentId"
        ></tree-item>
      </template>
    </div>
  </div>
</template>

<script>
import treeItem from "./treeItem.vue";
export default {
  name: "ZTree",
  components: { treeItem },
  props: {
    data: { type: [Object, Array] }, 
  }, 
  data() {
    return {
      open: false, 
    };
  },

  inject: ["hightLight", "serHightLight"], 
  methods: {
    triggerOpen(item) { 
      item.open = !item.open;
      this.serHightLight(item.allParentId);
      // console.log(item.id,item.allParentId, this.hightLight.value,this.hightLight.value.toString().includes(item.allParentId));
    },
    leftClick(item) { 
      this.serHightLight(item.allParentId);
    },
  },
  mounted() { 
  },
};
</script>

<style scoped lang="scss">
.tree-container {
  background-color: #fff;
  .treeGroup {
    line-height: 30px;
  }
  .pink {
    background-color: rgb(247, 217, 156);
  }
}
.tree {
  text-align: left;
  cursor: pointer;
  padding-left: 10px;
}
</style>