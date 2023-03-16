<template>
  <!-- 任务 列表 -->
  <div v-if="partTaskList" class="taskList">
    <!-- outOfDate: everyday.beforeToday  -->
    <div
      v-for="(task, j) in partTaskList"
      :key="j"
      class="taskItem"
      :style="{ 'border-color': task.flag, 'background': task.flag +'25' }"
    >
      {{ task.title }}
    </div>
    <el-button v-if="taskList && taskList.length > 3" type="text" size="mini"
      >更多日程 &nbsp;<i class="el-icon-circle-plus-outline"></i
    ></el-button>
  </div>
</template>

<script>
// import { parseTime } from "@/utils/ruoyi";

export default {
  name: "taskList",
  components: {},
  props: {
    taskList: { type: Array },
  },
  computed: {
    // 只展示前三条任务
    partTaskList: function () {
      let newTaskList = [];
      newTaskList =
        this.taskList.length > 3 ? this.taskList.slice(0, 3) : this.taskList;
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
  .taskItem {
    color: #333;
    font-size: 14px;
    border-left: 2px solid;
    margin-bottom: 3px;
    padding: 2px 0 2px 4px;
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
