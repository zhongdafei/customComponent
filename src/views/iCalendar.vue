<template>
  <div class="calendar-box">
    <el-button @click="changeDate"> 修改时间 </el-button>
    <i-calendar
      v-model="dateType"
      :date="dateTime"
      :taskListOfMonth="taskListOfMonth"
      :taskListOfWeek="taskListOfWeek"
      @nowDate="setNowDate"
    >
      <template #month="{ monthInfo }">
        <div>
          <!-- {{ monthInfo.schedule }} -->
          <TaskList :taskList="monthInfo.schedule"></TaskList>
        </div>
      </template>
      <template #week="{ weekInfo }">
        <div>
          <TaskList :taskList="weekInfo.data.task"></TaskList>
          <!-- {{ weekInfo.data.task }} -->
        </div>
      </template>
      <template #day="{ dayInfo }">
        <div>
          {{ dayInfo }}
          <taskItem :taskList="taskListOfDay"></taskItem>
        </div>
      </template>
    </i-calendar>
  </div>
</template>

<script>
import ICalendar from "../components/ICalendar/index.vue";
import TaskList from "../components/TaskList/index.vue"; 
import taskItem from "../components/TaskList/taskItem.vue"; 
export default {
  components: { ICalendar, TaskList ,taskItem},
  data() {
    return {
      dateTime: new Date(),
      dateType: "month",
      nowDate: "",
      taskListOfMonth: [],
      taskListOfWeek: [],
       taskListOfDay: [
        {
          title: "日程或任务标题文字",
          time: "2022-04-17 8:30",
          desc: "他是个好人他是个好人他是个好人他是个好人他是个好人他是个好人他是个好人",
          clock: "准时提醒",
          name: "张绍刚",
          avatar: require("../assets/logo.png"),
          type: "danger",
          id: 1,
        },
        {
          title: "日程或任务标题文字",
          time: "2022-04-17 8:30",
          desc: "他是个好人他是个好人他是个好人他是个好人他是个好人他是个好人他是个好人",
          clock: "准时提醒",
          name: "张绍刚",
          danger: "primary",
          avatar: require("../assets/logo.png"),
          id: 2,
        },
      ],
    };
  },
  watch:{
    dateType:{
      handler(val){
        this.getTask()
      }
    },
  },
  mounted() {
    this.getTask();
  },
  methods: {
    changeDate() {
      this.dateTime = new Date("2021-05-03");
    },
    setNowDate(val) {
      this.nowDate = val;
      this.getFirstDay();
      this.getTask()
    },
    // 获取日历的第一天
    getFirstDay() {
      let firstDay = null;
      if (this.dateType == "month") {
        let curYear = this.nowDate.getFullYear();
        let curMonth =
          ("" + (this.nowDate.getMonth() + 1)).length == 1
            ? "0" + (this.nowDate.getMonth() + 1)
            : this.nowDate.getMonth() + 1;
        let firstDayOfMonth = new Date(`${curYear}-${curMonth}-01`);
        let week = firstDayOfMonth.getDay() == 0 ? 7 : firstDayOfMonth.getDay();
        firstDay = new Date(
          firstDayOfMonth.getTime() - (week - 1) * 24 * 3600 * 1000
        );
      } else if (this.dateType == "week") {
        // 周一
        let week = this.nowDate.getDay() == 0 ? 7 : this.nowDate.getDay();
        firstDay = new Date(
          this.nowDate.getTime() - (week - 1) * 24 * 3600 * 1000
        );
      }
      return firstDay;
    },
    getTask() {
      let monthTask = [];
      let firstDay = this.getFirstDay();
      let rgbs = [
        "rgb(36, 210, 211)",
        "rgb(254, 192, 61)",
        "rgb(82, 193, 245)",
        "rgb(81, 211, 81)",
        "rgb(255, 122, 140)",
        "rgb(255, 169, 76)",
        "rgb(115, 160, 250)",
      ]; 
      switch (this.dateType) {
        case "month":
          // 生成月的任务数据
          for (let i = 0; i < 42; i++) {
            let schedule = [];
            let len = Math.floor(Math.random() * 5);
            for (let j = 0; j < len; j++) {
              schedule.push({ id: j + 1, title: "任务任务任务呢", rgb: rgbs[len] });
            }
            monthTask.push({
              //第一天
              vacation: 1, //是否放假
              date: new Date(firstDay + i * 24 * 3600 * 1000),
              schedule,
              total: schedule.length,
            });
          } 
          this.taskListOfMonth = monthTask;
          break;

        case "week":
          for (let i = 0; i < 7; i++) {
            let schedule = [];
            let scheduleClock = [];
            let len = Math.floor(Math.random() * 5);
            for (let j = 0; j < len; j++) {
              schedule.push({ id: j + 1, title: "任务任务任务呢", rgb: rgbs[len] });
            }
            for (let t = 0; t < 24; t++) {
              let taskItem = [];
              for (let j = 0; j < len; j++) {
                taskItem.push({ id: j + 1, title: "任务任务任务呢", rgb: rgbs[len] });
              }
              scheduleClock.push(taskItem);
            }
            monthTask.push({
              //第一天
              vacation: 1, //是否放假
              date: new Date(firstDay + i * 24 * 3600 * 1000),
              schedule,
              scheduleClock,
              total: schedule.length,
            });
          } 
          this.taskListOfWeek = monthTask;

          break;
        default:
          break;
      } 
    },
  },
};
</script>

<style lang="scss" scoped>
.calendar-box {
  margin: 20px auto;
}
</style>
