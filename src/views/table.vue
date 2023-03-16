<template>
  <div class="app-container">
    <!-- <xf-table :data="tableData" style="width: 100%">
      <xf-table-column prop="date" label="日期" width="180"> </xf-table-column>
      <xf-table-column prop="name" label="姓名" width="180"> </xf-table-column>
      <xf-table-column prop="address" label="地址"> </xf-table-column>
    </xf-table> -->
    <div id="main" ref="main" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "",
  components: {},
  data() {
    return {
      tableData: {},
    };
  },
  methods: {
    init() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.main);
      let seriesData = [
        [490, 380,380, 240, 360],
        [450, 280,280, 500, 700],
        [400, 200,200, 590, 790],
      ];
      let legendData = ["活期", "三年期以下", "三年期以上"];
      let colors = [
        ["#3D8BF8", "#0545A512"],
        ["#0DF5AB", "#02746312"],
        ["#aaF5AB", "#aa746312"],
      ];
      let series = legendData.map((item, index) => {
        let offset = 25 * (index -1); 
        return [
          {
            //柱底圆片
            name: item,
            yAxisIndex: 0,
            type: "pictorialBar",
            symbolSize: [20, 10], //调整截面形状
            symbolOffset: [offset, 5],
            z: 12,
            tooltip: {
              show: false,
            },
            itemStyle: {
              normal: {
                color: colors[index][0],
              },
            },
            data: seriesData[index],
          },

          {
            name: item,
            type: "bar",
            barWidth: 20,
            yAxisIndex: 0,
            barGap: "25%",
            tooltip: {
              show: true,
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
                  {
                    offset: 1,
                    color: colors[index][0],
                  },
                  {
                    offset: 0,
                    color: colors[index][1],
                  },
                ]),
                opacity: 0.8,
              },
              // barBorderRadius: [30, 30,130, 130],
            },
            data: seriesData[index],
          },
          {
            name: item,
            type: "pictorialBar",
            yAxisIndex: 0,
            symbolSize: [20, 10], //调整截面形状
            symbolOffset: [offset, 0],
            z: 12,
            tooltip: {
              show: false,
            },
            symbolPosition: "end",
            itemStyle: {
              normal: { color: colors[index][0] },
            },
            data: seriesData[index],
          },
        ];
      });
      series = series.flat(1);
      // series = [...series,{
      //   name: "",
      //   // barGap: '-220%',
      //   type: "pictorialBar",
      //   symbol:'rect',
      //   z: 0,
      //   data: [1000,],
      //   barWidth: "100px",
      //   itemStyle: {
      //     normal: {
      //       color: "#fff", // 0% 处的颜色
      //       opacity: 0.1, //透明度
      //     },
      //   },
      // }];
      console.log(series);
      let options = {
        backgroundColor: "#081736",
        legend: {
          top: "5%",
          icon: "roundRect",
          itemHeight: 10,
          data: legendData,
          textStyle: {
            color: "#fff",
          },
          selectedMode: false,
        },
        tooltip: {
          show: true,
          trigger: "axis",
        },
        grid: {
          top: "20%",
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: ["2023年", "2022年", "2021年", "2020年", "2019年"],
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            axisPointer: {
              type: "shadow",
            },
            axisLabel: {
              color: "#fff",
            },
            axisTick: {
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "万元",
            min: 0,
            max: 1000,
            interval: 200,
            nameTextStyle: {
              color: "#fff",
            },
            axisLabel: {
              formatter: "{value}",
              color: "#fff",
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#053c89",
              },
            },
          },
        ],
        series: series,
        // series: [
        //   {
        //     //柱底圆片
        //     name: "活期",
        //     yAxisIndex: 0,
        //     type: "pictorialBar",
        //     symbolSize: [20, 10], //调整截面形状
        //     symbolOffset: [-30, 0],
        //     z: 12,
        //     tooltip: {
        //       show: true,
        //     },
        //     itemStyle: {
        //       normal: {
        //         color: "#3D8BF8",
        //       },
        //     },
        //     data: seriesData[0],
        //   },
        //   {
        //     name: "活期",
        //     type: "bar",
        //     barWidth: 20,
        //     yAxisIndex: 0,

        //     tooltip: {
        //       show: true,
        //     },
        //     itemStyle: {
        //       normal: {
        //         color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
        //           {
        //             offset: 1,
        //             color: "#3D8BF8",
        //           },
        //           {
        //             offset: 0,
        //             color: "#0545A512",
        //           },
        //         ]),
        //         opacity: 0.8,
        //       },
        //       // barBorderRadius: [30, 30,130, 130],
        //     },
        //     data: seriesData[0],
        //   },
        //   {
        //     name: "活期",
        //     type: "pictorialBar",
        //     yAxisIndex: 0,
        //     symbolSize: [20, 10], //调整截面形状
        //     symbolOffset: [-30, 0],
        //     z: 12,
        //     tooltip: {
        //       show: false,
        //     },
        //     symbolPosition: "end",
        //     itemStyle: {
        //       normal: { color: "#3D8BF8" },
        //     },
        //     data: seriesData[0],
        //   },

        //   {
        //     //柱底圆片
        //     name: "三年期以下",
        //     yAxisIndex: 0,
        //     type: "pictorialBar",
        //     symbolSize: [20, 10], //调整截面形状
        //     symbolOffset: [0, 0],
        //     z: 12,
        //     tooltip: {
        //       show: true,
        //     },
        //     itemStyle: {
        //       normal: {
        //         color: "#0DF5AB",
        //       },
        //     },
        //     data: seriesData[1],
        //   },
        //   {
        //     name: "三年期以下",
        //     type: "bar",
        //     barWidth: 20,
        //     yAxisIndex: 0,
        //     // barGap: "50%",
        //     tooltip: {
        //       show: false,
        //     },
        //     itemStyle: {
        //       normal: {
        //         color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
        //           {
        //             offset: 1,
        //             color: "#0DF5AB",
        //           },
        //           {
        //             offset: 0,
        //             color: "#02746312",
        //           },
        //         ]),
        //         opacity: 0.8,
        //       },
        //     },
        //     data: seriesData[1],
        //   },
        //   {
        //     name: "三年期以下",
        //     type: "pictorialBar",
        //     yAxisIndex: 0,
        //     symbolSize: [20, 10], //调整截面形状
        //     symbolOffset: [0, 0],
        //     z: 12,
        //     tooltip: {
        //       show: false,
        //     },
        //     symbolPosition: "end",
        //     itemStyle: {
        //       normal: {
        //         color: "#0DF5AB",
        //       },
        //     },
        //     data: seriesData[1],
        //   },
        //   {
        //     //柱底圆片
        //     name: "三年期以上",
        //     yAxisIndex: 0,
        //     type: "pictorialBar",
        //     symbolSize: [20, 10], //调整截面形状
        //     symbolOffset: [30, 0],
        //     z: 12,
        //     tooltip: {
        //       show: true,
        //     },
        //     itemStyle: {
        //       normal: {
        //         color: "#aaF5AB",
        //       },
        //     },
        //     data: seriesData[2],
        //   },
        //   {
        //     name: "三年期以上",
        //     type: "bar",
        //     barWidth: 20,
        //     yAxisIndex: 0,
        //     // barGap: "50%",
        //     tooltip: {
        //       show: false,
        //     },
        //     itemStyle: {
        //       normal: {
        //         color: new echarts.graphic.LinearGradient(0, 0, 0, 0.7, [
        //           {
        //             offset: 1,
        //             color: "#aaF5AB",
        //           },
        //           {
        //             offset: 0,
        //             color: "#aa746312",
        //           },
        //         ]),
        //         opacity: 0.8,
        //       },
        //     },
        //     data: seriesData[2],
        //   },

        //   {
        //     name: "三年期以上",
        //     type: "pictorialBar",
        //     yAxisIndex: 0,
        //     symbolSize: [20, 10], //调整截面形状
        //     symbolOffset: [30, 0],
        //     z: 12,
        //     tooltip: {
        //       show: false,
        //     },
        //     symbolPosition: "end",
        //     itemStyle: {
        //       normal: {
        //         color: "#aaF5AB",
        //       },
        //     },
        //     data: seriesData[2],
        //   },
        // ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(options);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style scoped lang="scss"></style>
