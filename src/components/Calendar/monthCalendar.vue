<template>
  <!-- 日历 -->
  <div class="calendar_body">
    <!-- 周一~周天 -->
    <ul class="tableHeader">
      <li class="thead" v-for="week in top" :key="week">周{{ week }}</li>
    </ul>
    <!-- 每天 -->
    <ul class="tableBody">
      <li
        :class="{
          tbody: true,
          notCurrentMonth: !everyday.isMonth,
          isToday: everyday.isToday,
        }"
        v-for="(everyday, i) in visibleCalendar"
        :key="i"
        @click="changeCurrentDay(everyday.date)"
      >
        <div class="dayNum">{{ everyday.month + "-" + everyday.day }}</div>
        <slot name="task" :day="everyday"></slot> 
      </li>
    </ul>
  </div>
</template>

<script>
import { parseTime } from "@/utils/ruoyi";

export default {
  name: "calendar",
  components: {},
  props: {
    time: {
      type: Object,
      require: true,
      default: () => {
        return {
          year: 2023,
          month: 2,
        };
      },
    },
    taskList: { type: Object },
    currentDay: { type: [String, Date] },
  },
  computed: {
    // 获取当前月份显示日历,共42天
    visibleCalendar: function () {
      let calendarArr = [];
      let currentYear = this.currentDay.getFullYear(); //选中日期的年
      let currentMonth = this.currentDay.getMonth(); //选中日期的月

      let onest = new Date(currentYear, currentMonth, 1); // 获取选中日期的1号
      // 获得每月第一天的周
      let week = onest.getDay() ? onest.getDay() : 7;

      let firstDay = new Date(onest.getTime() - (week - 1) * 24 * 3600 * 1000); // 获取当前日历的第一天

      let Today = new Date(); // 今天的日期
      let todayYear = Today.getFullYear(); //今天的年
      let todayMonth = Today.getMonth(); //今天的月
      let todayDay = Today.getDate(); //今天的日
      // 生成42个数
      for (let i = 0; i < 42; i++) {
        let date = new Date(firstDay.getTime() + i * 24 * 3600 * 1000);
        let dateYear = date.getFullYear(); //每天的年
        let dateMonth = date.getMonth(); //每天的月
        let dateDay = date.getDate(); //每天的日
        calendarArr.push({
          date,
          year: date.getFullYear(),
          month: dateMonth + 1 > 9 ? dateMonth + 1 : "0" + (dateMonth + 1),
          day: dateDay > 9 ? dateDay : "0" + dateDay,
          isMonth: currentMonth == dateMonth, // 是否在当月
          isToday:
            todayYear === dateYear &&
            todayMonth === dateMonth &&
            todayDay === dateDay, // 是否是今天
          id: i, 
        });
      }
      return calendarArr;
    }, 
  },
  data() {
    return {
      parseTime,
      top: ["一", "二", "三", "四", "五", "六", "日"],
    };
  },
  methods: {
    changeCurrentDay(date) {
      this.$emit("update:currentDay", date);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
/* 日历 展示 */
.calendar_body ul {
  padding: 0;
  margin: 0;
  display: inline-block;
  width: 100%;
  li {
    list-style: none;
    float: left;
    width: 13%;
    margin-right: 1%;
    box-sizing: border-box;
  }
}
// 周一~周天
.tableHeader {
  .thead {
    font-weight: 700;
    text-align: left;
    padding: 0 0 4px 6px;
    font-size: 15px;
  }
}
// 每天
.tableBody {
  .tbody {
    height: 130px;
    border-top: 2px solid #e9e9e9;
    padding: 4px 8px;
    text-align: left;
    overflow: hidden;
    &.notCurrentMonth {
      color: #ccc;
    }
    &.isToday {
      border-color: #409eff;
      background-color: #ecf5ff;
      color: #66a9ff;
    }
  }
}
 
</style>
