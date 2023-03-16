<template>
  <!-- 当天任务列表 -->
  <ul class="dayCalendar">
    <li
      :class="['taskItem', task.type]"
      v-for="task in taskList"
      :key="task.id"
    >
      <div class="left">
        <div class="title">{{ task.title }}</div>
        <div class="time">
          <i class="el-icon-time"></i>
          <span>{{ task.time }}</span>
        </div>
      </div>
      <div class="right">
        <div class="desc">
          {{ task.desc }}
        </div>
        <div class="clock">
          <i class="el-icon-bell"></i>
          <span>{{ task.clock }}</span>
        </div>
        <div class="user">
          <img :src="task.avatar" alt="" />
          <span>{{ task.name }}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "dayCalendar",
  props: {
    taskList: { type: Array },
  },
  computed: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped lang="scss">
// 日 日历
ul.dayCalendar {
  padding: 0;
  margin: 0;
  li {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 0px 0px 5px rgb(0 0 0 / 10%);
    border-left: 5px solid rgba(36, 210, 211, 1);
    padding: 10px 20px;
    margin-bottom: 20px;
    &.danger {
      border-left: 5px solid #fb6260;
    }
    &.primary {
      border-left: 5px solid #0099ff;
    }
    &.danger {
      border-left: 5px solid #8167f5ff;
    }
    // border
    .left {
      .title {
        font-family: "微软雅黑 Bold", "微软雅黑 Regular", 微软雅黑, sans-serif;
        font-weight: 700;
        color: rgb(102, 102, 102);
        line-height: 35px;
      }
      .time {
        font-family: 微软雅黑, sans-serif;
        font-weight: 400;
        color: rgb(153, 153, 153);
      }
    }
    .right {
      display: flex;
      align-items: center;
      font-size: 12px;
      .desc {
        width: 150px;
        overflow: hidden;
        padding-right: 30px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; /* 超出几行省略 */
      }
      .clock {
        padding-right: 30px;
      }
      .user {
        padding-right: 30px;
        display: flex;
        flex-direction: column;

        img {
          width: 50px;
        }
      }
    }
  }
}
</style>
