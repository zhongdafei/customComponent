<template>
  <div class="waterfall">
    <div class="row" v-for="(item, i) in list" :key="i">
      <div :class="{ col: true }" v-for="(col, j) in list[i]" :key="j">
        {{ col }}
      </div>
    </div>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期"> </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "transfer",
  components: {},
  computed: {},
  data() {
    return {
      value1: "",
      list: [],
    };
  },
  methods: {
    mysort(arr) {
      /*
      如[1234,1234567,1234,12,12,1234567812345,12]; 排序完[[1234,1234],[1234567],[12,12,12],[1234567812345]]
      再如[1,12,1234,3,1314,1234567812345,12];排序完[[1,12,3],[1234,1314],[1234567812345],[12]]
      根据数字长度，实现方法，能够对各元素进行排序，实现瀑布流的展示，数组元素以红块包裹，要求：
      每行最多容纳三个红块（数组元素）
      每行最多容纳8个数字长度，超出需要换行
      每个数组元素有三种宽度形式
      33%宽度，最多容纳2个数字长度，最少容纳2个数字长度
      50%宽度，最多容纳4个数字长度，最少容纳3个数字长度
      100%宽度，最多无限制，最少容纳5个数字长度
    */
      let newArr = [];
      // let arr = [1, 12, 1234, 3, 1314, 1234567812345, 12];
      let i3 = null;
      let i2 = null;
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let len = element.toString().length;
        if (len <= 2) {
          if (i3 === null || newArr[i3].length === 3) {
            i3 = newArr.length;
            newArr[i3] = [element];
          } else {
            newArr[i3].push(element);
          }
        } else if (len > 2 && len < 5) {
          if (i2 === null || newArr[i2].length === 2) {
            i2 = newArr.length;
            newArr[i2] = [element];
          } else {
            newArr[i2].push(element);
          }
        } else if (len >= 5) {
          newArr.push([element]);
        }
      }
      return newArr;
    },
    largest1BorderedSquare() {
      let arr = [
        [1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1],
      ];
      let x = arr[0].length;
      let y = arr.length;
      for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
          console.log([i, j], arr[i][j]);
          if (arr[i][j]) {
            arr[i][j][0] = arr[i - 1][j] + 1;
            arr[i][j][1] = arr[i][j - 1] + 1;
          }
        }
      }
    },
    numberOfPairs(num) {
      let nums =  [1,1];
      if (nums.length === 0) {
        return [0, 0];
      }
      let obj = {};
      nums.map((item) => {
        obj[item] ? obj[item].push(item) : (obj[item] = [item]);
        return item;
      });
      let d = 0;
      let s = 0;

      for (const i in obj) {
        console.log(i, obj[i]);
        d += Math.floor(obj[i].length / 2);
        s += obj[i].length % 2;
      }
      return [d,s] 
    },
  },
  mounted() {
    let arr = [1, 12, 1234, 3, 1314, 1234567812345, 12];
    this.list = this.mysort(arr);
    // this.largest1BorderedSquare();
  },
};
</script>

<style scoped lang="scss">
.waterfall {
  background-color: pink;
  display: inline-block;
  .row {
    display: flex;
    margin: 10px 0;
    .col {
      margin: 0 10px;
      vertical-align: middle;
      flex: 1;
      background-color: hotpink;
      text-align: center;
    }
  }
}
</style>
