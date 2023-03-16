<template>
  <div class="app-container">
    <!-- 日历头 -->
    <div class="calendar_header">
      <!-- 搜索 -->
      <div class="calendar_search">
        <el-input
          size="mini"
          placeholder="请输入日程关键字"
          suffix-icon="el-icon-search"
          v-model="keyword"
        >
        </el-input>
      </div>
      <!-- 日期范围 -->
      <div class="calendar_ranger">
        <i class="el-icon-arrow-left" @click="rangerLeft"></i>
        <span> {{ title }}</span>
        <i class="el-icon-arrow-right" @click="rangerRight"></i>
      </div>
      <!-- 月周日切换 -->
      <div class="calendar_ranger_control">
        <slot name="defaultOperate"></slot>
        &nbsp;
        <el-radio-group v-model="ranger" size="mini">
          <el-radio-button label="month">月</el-radio-button>
          <el-radio-button label="week">周</el-radio-button>
          <el-radio-button label="day">日</el-radio-button>
        </el-radio-group>
        &nbsp;
        <el-button size="mini" @click="today" :disabled="isToday"
          >今天</el-button
        >
      </div>
    </div>
    <!-- 月日历 -->
    <MonthCalendar
      v-show="ranger == 'month'"
      :time="time"
      :currentDay.sync="currentDay"
    >
      <template #task="{ day }">
        <!-- {{ day }} -->
        <slot name="month" :monthInfo="day"></slot>
      </template>
    </MonthCalendar>
    <!-- :taskList="taskList" -->
    <!-- 周日历 -->
    <WeekCalendar
      v-show="ranger == 'week'"
      :time="time"
      :title="title"
      :currentDay.sync="currentDay"
    >
      <template #task="{ day }">
        <slot name="week" :weekInfo="day"></slot>
      </template>
    </WeekCalendar>
    <!-- 当天任务列表 -->
      <!-- :taskList="taskListOfDay" -->
    <DayCalendar
      v-show="ranger == 'day'"
    >
     <template #task >
        <slot name="day" ></slot>
      </template></DayCalendar>
  </div>
</template>

<script>
import MonthCalendar from "./monthCalendar.vue";
import WeekCalendar from "./weekCalendar.vue";
import DayCalendar from "./dayCalendar.vue";
import { parseTime } from "@/utils/ruoyi";
export default {
  name: "Calendar",
  components: { MonthCalendar, WeekCalendar, DayCalendar },
  props: {},
  computed: {
    // 范围展示
    title: function () {
      let data = new Date(this.currentDay);
      let monday, sunday, week, mon, sun, firstTitle, title;
      switch (this.ranger) {
        case "month":
          title = parseTime(data, "{y}年{m}月");
          break;
        case "week":
          week = data.getDay() === 0 ? 7 : data.getDay();
          monday = new Date(data.getTime() - (week - 1) * 24 * 3600 * 1000);
          sunday = new Date(data.getTime() - (week - 7) * 24 * 3600 * 1000);
          mon = parseTime(monday, "{y}-{m}-{d}").split("-");
          sun = parseTime(sunday, "{y}-{m}-{d}").split("-");
          firstTitle = parseTime(monday, "{y}年{m}月{d}日");
          if (mon[0] !== sun[0]) {
            title = firstTitle + "-" + parseTime(sunday, "{y}年{m}月{d}日");
          } else if (mon[1] !== sun[1]) {
            title = firstTitle + "-" + parseTime(sunday, "{m}月{d}日");
          } else {
            title = firstTitle + "-" + parseTime(sunday, "{d}日");
          }
          break;
        case "day":
          title = parseTime(data, "{y}年{m}月{d}日");
          break;
      }
      return title;
    },
    isToday() {
      let today = parseTime(new Date(), "{y}-{m}-{d}");
      let currentDay = parseTime(this.currentDay, "{y}-{m}-{d}");
      return today == currentDay;
    },
  },
  data() {
    return {
      taskList: {
        20230130: [
          { label: "任务1", type: "danger" },
          { label: "任务2", type: "success" },
          { label: "任务3", type: "primary" },
        ],
        20230131: [
          { label: "任务1", type: "danger", time: "01:12" },
          { label: "任务2", type: "success", time: "06:12" },
          { label: "任务3", type: "primary", time: "15:12" },
          { label: "任务4", type: "primary", time: "23:12" },
          { label: "任务5", type: "primary", time: "23:12" },
        ],
        20230227: [
          { label: "任务1", type: "danger" },
          { label: "任务2", type: "success" },
          { label: "任务3", type: "primary" },
          { label: "任务4", type: "primary" },
          { label: "任务5", type: "primary" },
        ],
        20230228: [
          { label: "任务1", type: "danger" },
          { label: "任务2", type: "success" },
        ],
        20230304: [
          { label: "任务1", type: "danger" },
          { label: "任务2", type: "success" },
          { label: "任务3", type: "primary" },
          { label: "任务4", type: "primary" },
          { label: "任务5", type: "primary" },
        ],
      },
     
      time: { year: 2023, month: 3 },
      currentDay: new Date("2023-01-22"),
      ranger: "week",
      keyword: "",
    };
  },
  methods: {
    today() {
      this.currentDay = new Date();
      let dataArr = parseTime(this.currentDay, "{y}-{m}-{d}").split("-");
      this.time = {
        year: dataArr[0],
        month: dataArr[1],
      };
    },
    rangerLeft() {
      let lastDay = this.getLastMonthDate(this.currentDay); //上月最后一天
      let lastDayArr = lastDay.split("-");
      let curDayArr = parseTime(this.currentDay, "{y}-{m}-{d}").split("-");
      switch (this.ranger) {
        case "month":
          if (lastDayArr[2] < curDayArr[2]) {
            //2月的28 会小于 3月31
            this.currentDay = new Date(lastDay);
          } else {
            if (curDayArr[1] === "01") {
              // 跨年
              curDayArr[1] = 12;
              curDayArr[0] -= 1;
            } else {
              curDayArr[1] -= 1;
            }
            this.currentDay = new Date(curDayArr.join("-"));
          }
          // 更改time的值，调用计算属性visibleCalendar
          if (this.time.month == 1) {
            this.time = {
              month: 12,
              year: --this.time.year,
            };
          } else {
            this.time.month -= 1;
          }
          break;
        case "week":
          this.currentDay = new Date(
            this.currentDay.getTime() - 7 * 24 * 3600 * 1000
          );
          break;
        case "day":
          this.currentDay = new Date(
            this.currentDay.getTime() - 1 * 24 * 3600 * 1000
          );
          break;
      }
    },
    rangerRight() {
      let curDayArr = parseTime(this.currentDay, "{y}-{m}-{d}").split("-");
      let a = [...curDayArr];
      if (curDayArr[1] == 12) {
        a = [+curDayArr[0] + 1, "01"];
      } else {
        a = [curDayArr[0], +curDayArr[1] + 1];
      }
      let lastDay = this.getLastMonthDate(a.join("-"), "last"); //下月最后一天
      let lastDayArr = lastDay.split("-");
      switch (this.ranger) {
        case "month":
          if (lastDayArr[2] < curDayArr[2]) {
            //2月的28 会小于 3月31
            this.currentDay = new Date(lastDay);
          } else {
            let data = [...a, curDayArr[2]];
            this.currentDay = new Date(data.join("-"));
          }
          // 跨年 更改time的值，调用计算属性visibleCalendar
          if (this.time.month == 12) {
            this.time = { month: 1, year: ++this.time.year };
          } else {
            this.time.month += 1;
          }
          break;
        case "week":
          this.currentDay = new Date(
            this.currentDay.getTime() + 7 * 24 * 3600 * 1000
          );
          break;
        case "day":
          this.currentDay = new Date(
            this.currentDay.getTime() + 1 * 24 * 3600 * 1000
          );
          break;
      }
    },
    // 获取上 / 下月的最后一天
    getLastMonthDate(date, prop = "before") {
      var nowdays = new Date(date);
      var year = nowdays.getFullYear();
      var month = nowdays.getMonth();
      if (prop == "last") {
        if (month == 11) {
          month = 1;
          year = year + 1;
        } else {
          month += 1;
        }
      } else {
        if (month == 0) {
          month = 12;
          year = year - 1;
        }
      }
      if (month < 10) {
        month = "0" + month;
      }
      var myDate = new Date(year, month, 0);
      // var startDate = year + '-' + month + '-01 00:00:00' //上个月第一天
      var endDate = year + "-" + month + "-" + myDate.getDate(); //上个月最后一天
      return endDate;
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
/* 日历 控制 */
.calendar_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 20px;
  .calendar.ranger {
    flex: 1;
  }
  .calendar_ranger {
    font-weight: 700;
    span {
      padding: 0 20px;
    }
  }
}
</style>
