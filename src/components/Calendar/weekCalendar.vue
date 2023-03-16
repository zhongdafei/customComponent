<template>
  <!-- 周日历 -->
  <ul class="weekCalendar">
    <li class="tableHeader">
      <div class="thItem samediv tbTitle">时间</div>
      <div
        v-for="th in getOneWeek"
        :key="th.day"
        class="thItem tbflex1 samediv"
      >
        周{{ th.week }} {{ th.month + "/" + th.day }}
      </div>
    </li>
    <li class="tableBody" v-for="(tb, index) in twentyFive" :key="tb.key">
      <div class="tbItem samediv tbTitle">
        {{ tb.title }}
      </div>
      <div
        v-for="(tClock, j) in getOneWeek"
        :key="tClock.day"
        class="tbItem tbflex1 samediv"
      > 
        <slot
          name="task"
          :day="{ ...tClock, colIndex: index, rowIndex: j }"
        ></slot>
      </div>
    </li>
  </ul>
</template>

<script> 
export default {
  name: "weekCalendar",
  props: { 
    currentDay: { type: [String, Date] }, 
  },
  computed: {
    getOneWeek: function () {
      let calendarArr = [];
      let week = this.currentDay.getDay();
      week = week ? week : 7;
      let monday = new Date(
        this.currentDay.getTime() - (week - 1) * 24 * 3600 * 1000
      );
      for (let i = 0; i < 7; i++) {
        let date = new Date(monday.getTime() + i * 24 * 3600 * 1000);
        let dateMonth = date.getMonth(); //每天的月
        let dateDay = date.getDate(); //每天的日
        let dateWeek = date.getDay(); //每天的日
        let weekArr = ["日", "一", "二", "三", "四", "五", "六"];
        calendarArr.push({
          date,
          year: date.getFullYear(),
          month: dateMonth + 1 > 9 ? dateMonth + 1 : "0" + (dateMonth + 1),
          day: dateDay > 9 ? dateDay : "0" + dateDay,
          week: weekArr[dateWeek],
        });
      }
      return calendarArr;
    },
    twentyFive() {
      let arr = [];
      for (let i = 0; i < 25; i++) {
        if (i === 0) {
          arr.push({ title: "今天", key: i });
        } else {
          arr.push({ title: i - 1 > 9 ? i - 1 : "0" + (i - 1), key: i });
        }
      }
      return arr;
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
// 周日历
ul.weekCalendar {
  padding: 0;
  margin: 0;
  display: inline-block;
  width: 100%;
  border-right: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  li {
    list-style: none;
    width: 100%;
    display: flex;
    .samediv {
      border-top: 1px solid #e9e9e9;
      border-left: 1px solid #e9e9e9;
      // flex: 1;
    }
    &.tableHeader {
      background-color: #f5f5f5;
      line-height: 30px;
      font-weight: 700;
      // 表头的每一项
      .thItem {
        padding: 5px 0;
      }
    }
    &.tableBody {
      // 表体的每一项
      .tbItem {
        padding: 2px;
        box-sizing: border-box;
      }
    }
    .tbTitle {
      width: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f5f5f5;
    }
    .tbflex1 {
      flex: 1;
    }
  }
  
}
</style>
