<template>
  <!-- 任务 列表 -->
  <div :class="{ taskList: true }">
    <div
      v-for="(task, j) in partTaskList"
      :key="j"
      class="taskItem"
      :style="{ 'border-color': task.rgb }"
    >
      {{ task.title }}
    </div>
    <el-button v-if="taskList && taskList.length > 3" type="text" size="mini"
      >更多10个日程 &nbsp;<i class="el-icon-circle-plus-outline"></i
    ></el-button>
  </div>
</template>

<script> 

export default {
  name: "taskList",
  components: {},
  props: {
    taskList: { type: Array },
  },
  computed: {
    // 只展示前三条任务
    partTaskList: function () {
      let newTaskList = {};

      if (this.taskList?.length > 3) {
        newTaskList = this.taskList.slice(0, 3);
      } else {
        newTaskList = this.taskList;
      }
      return newTaskList;
    },
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
// 任务列表
.taskList {
  display: block;
  padding:15px 10px;
  .taskItem {
    color: #333;
    font-size: 14px;
    border-left: 2px solid;
    box-sizing: border-box;
    margin-bottom: 3px;
    padding: 2px 0 2px 4px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &.danger {
      border-color: #fb6260;
      background-color: #fff0ef;
    }
    &.primary {
      border-color: #0099ff;
      background-color: #e6f5ff;
    }
    &.success {
      border-color: #8167f5ff;
      background-color: #f3f0fe;
    }
  }
  &.outOfDate .taskItem {
    border-color: #cccccc;
    background-color: #f5f5f5;
    color: #cccccc;
  }
}
</style>
