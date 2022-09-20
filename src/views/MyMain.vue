<template>
  <div class="main">
    <ul class="main-a">
      <li class="main-a-a">
        <h1>资产配置达成</h1>
        <div id="myChart-a" style="width: 458.11px; height: 304px"></div>
      </li>
      <li class="main-a-b">
        <h1>年销售统计</h1>
        <div id="myChart-b" style="width: 459px; height: 328px"></div>
      </li>
    </ul>

    <ul class="main-b">
      <li class="main-b-a">
        <h1 class="aa">进行中的项目</h1>
        <h1 class="bb">全部项目</h1>
        <ul class="mation-btm-1-btm">
          <li class="mation-btm-btm-1">
            <div class="mation-btm-img">
              <img src="../assets/aa.png" alt="" align="absmiddle" />
              <span>消息列表体验优化</span>
            </div>
            <p style="width: 201px">
              这是一条描述信息这是一条描述信息这是一条描述信息
            </p>
            <div class="ll">
              <h1 class="cc">蜂鸟项目组</h1>
              <h1 class="dd">5小时前</h1>
            </div>
          </li>
          <li class="mation-btm-btm-1">
            <div class="mation-btm-img">
              <img src="../assets/aa.png" alt="" align="absmiddle" />
              <span>消息列表体验优化</span>
            </div>
            <p style="width: 201px">
              这是一条描述信息这是一条描述信息这是一条描述信息
            </p>
            <div class="ll">
              <h1 class="cc">蜂鸟项目组</h1>
              <h1 class="dd">5小时前</h1>
            </div>
          </li>
          <li class="mation-btm-btm-1">
            <div class="mation-btm-img">
              <img src="../assets/aa.png" alt="" align="absmiddle" />
              <span>消息列表体验优化</span>
            </div>
            <p style="width: 201px">
              这是一条描述信息这是一条描述信息这是一条描述信息
            </p>
            <div class="ll">
              <h1 class="cc">蜂鸟项目组</h1>
              <h1 class="dd">5小时前</h1>
            </div>
          </li>
          <li class="mation-btm-btm-1">
            <div class="mation-btm-img">
              <img src="../assets/aa.png" alt="" align="absmiddle" />
              <span>消息列表体验优化</span>
            </div>
            <p style="width: 201px">
              这是一条描述信息这是一条描述信息这是一条描述信息
            </p>
            <div class="ll">
              <h1 class="cc">蜂鸟项目组</h1>
              <h1 class="dd">5小时前</h1>
            </div>
          </li>
          <li class="mation-btm-btm-1">
            <div class="mation-btm-img">
              <img src="../assets/aa.png" alt="" align="absmiddle" />
              <span>消息列表体验优化</span>
            </div>
            <p style="width: 201px">
              这是一条描述信息这是一条描述信息这是一条描述信息
            </p>
            <div class="ll">
              <h1 class="cc">蜂鸟项目组</h1>
              <h1 class="dd">5小时前</h1>
            </div>
          </li>
          <li class="mation-btm-btm-1">
            <div class="mation-btm-img">
              <img src="../assets/aa.png" alt="" align="absmiddle" />
              <span>消息列表体验优化</span>
            </div>
            <p style="width: 201px">
              这是一条描述信息这是一条描述信息这是一条描述信息
            </p>
            <div class="ll">
              <h1 class="cc">蜂鸟项目组</h1>
              <h1 class="dd">5小时前</h1>
            </div>
          </li>
        </ul>
      </li>
      <li class="main-b-b">
        <!-- <h1>年度收益</h1> -->
        <div id="myChart-c" style="width: 300px; height: 300px"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    drawChartb() {
      let echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart-a"));
      // 基于准备好的dom，初始化echarts实例【这里存在一个问题，请看到最后】
      // let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 指定图表的配置项和数据
      let option = {
        legend: {
          orient: "vertical",
          x: "left",
          data: ["A", "B", "C", "D", "E"],
        },
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
              emphasis: {
                show: true,
              },
            },
            labelLine: {
              show: false,
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            data: [
              { value: 335, name: "A" },
              { value: 310, name: "B" },
              { value: 234, name: "C" },
              { value: 135, name: "D" },
              { value: 1548, name: "E" },
            ],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    // getSummaries(param) {
    //   const { columns, data } = param;
    //   const sums = [];
    //   columns.forEach((column, index) => {
    //     if (index === 0) {
    //       sums[index] = "总价";
    //       return;
    //     }
    //     const values = data.map((item) => Number(item[column.property]));
    //     if (!values.every((value) => isNaN(value))) {
    //       sums[index] = values.reduce((prev, curr) => {
    //         const value = Number(curr);
    //         if (!isNaN(value)) {
    //           return prev + curr;
    //         } else {
    //           return prev;
    //         }
    //       }, 0);
    //       sums[index] += " 元";
    //     } else {
    //       sums[index] = "N/A";
    //     }
    //   });
    //   return sums;
    // },
    drawCharta() {
      let echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart-b"));
      // 基于准备好的dom，初始化echarts实例【这里存在一个问题，请看到最后】
      // let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 指定图表的配置项和数据
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {},
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
        },
        yAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        series: [
          {
            name: "Direct",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: "Mail Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Affiliate Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ad",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [150, 212, 201, 154, 190, 330, 410],
          },
          {
            name: "Search Engine",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    drawChartc() {
      let echarts = require("echarts");
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart-c"));
      // 基于准备好的dom，初始化echarts实例【这里存在一个问题，请看到最后】
      // let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          show: true,
          text: "年度收益",
        },
        series: [
          {
            type: "gauge",
            splitNumber: 4,
            axisLine: {
              lineStyle: {
                width: 20,
                color: [
                  [0.25, "#67e0e3"],
                  [0.5, "#37a2da"],
                  [0.75, "#fd666d"],
                  [1, "green"],
                ],
              },
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 20,
              itemStyle: {
                borderWidth: 5,
              },
            },
            pointer: {
              width: 5,
              length: "50%",
              itemStyle: {
                color: "auto",
              },
            },
            axisTick: {
              distance: -30,
              length: 8,
              lineStyle: {
                color: "#fff",
                width: 2,
              },
              show: false,
            },
            splitLine: {
              distance: -30,
              length: 30,
              lineStyle: {
                color: "#fff",
                width: 4,
              },
            },
            axisLabel: {
              color: "auto",
              distance: 40,
              fontSize: 10,
              show: false,
            },
            detail: {
              valueAnimation: true,
              fontSize: 10,
              formatter: "{value} km/h",
              color: "auto",
            },
            data: [
              {
                value: 70,
              },
            ],
          },
        ],
      };
      setInterval(function () {
        myChart.setOption({
          series: [
            {
              data: [
                {
                  value: +(Math.random() * 100).toFixed(2),
                },
              ],
            },
          ],
        });
      }, 2000);
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
  mounted() {
    this.drawCharta();
    this.drawChartb();
    this.drawChartc();
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
.main-a {
  width: 100%;
  display: flex;
  margin-top: 10px;
  li {
    width: 50%;
    height: 376px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 1);
    margin-right: 15px;
    h1 {
      font-size: 16px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      margin: 20px 0px 0px 20px;
    }
  }
  .main-a-a {
    position: relative;
    #myChart-a {
      position: absolute;
      top: 40px;
      right: 25px;
      // border: 1px solid red;
    }
  }
  .main-a-b {
    position: relative;
    margin-right: 0px;
    #myChart-b {
      position: absolute;
      top: 40px;
      right: 25px;
      // border: 1px solid red;
    }
  }
}
.main-b {
  display: flex;
  margin-top: 10px;
  li {
    background: rgba(255, 255, 255, 1);
    border-radius: 4px;
    margin-right: 15px;
  }
  .main-b-a {
    width: 70%;
    height: 369px;
    > h1 {
      margin: 20px 20px 0px 20px;
    }
    .aa {
      float: left;
      font-size: 16px;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
    }
    .bb {
      float: right;
      font-size: 14px;
      font-weight: 400;
      color: rgba(24, 144, 255, 1);
    }
    .mation-btm-1-btm {
      margin-top: 60px;
      width: 100%;
      height: 300px;
      .mation-btm-btm-1 {
        width: 31%;
        height: 50%;
        border: 0.5px rgba(233, 233, 233, 1) solid;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        float: right;
        p {
          font-size: 14px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.45);
        }
        .ll {
          width: 100%;
          .cc {
            font-size: 12px;
            font-weight: 400;
            color: rgba(24, 144, 255, 1);
            float: left;
            margin-left: 25px;
          }
          .dd {
            float: right;
            font-size: 12px;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.25);
            margin-right: 25px;
          }
        }

        .mation-btm-img {
          width: 82%;
          height: 30px;
          margin-top: 10px;
          img {
            margin-right: 10px;
          }
          span {
            font-size: 14px;
            font-weight: 500;
            color: rgba(24, 144, 255, 1);
          }
        }
      }
    }
  }
  .main-b-b {
    position: relative;
    width: 30%;
    height: 369.66px;
    margin-right: 0px;
    h1 {
      margin: 20px 20px 0px 20px;
    }
    #myChart-c {
      position: absolute;
      top: 30px;
      right: 30px;
      // border: 1px solid red;
    }
  }
}
</style>
