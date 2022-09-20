<template>
  <el-main>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/about/mymain' }">一级页面</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/about/mytext' }">二级页面</el-breadcrumb-item>
      <el-breadcrumb-item>三级页面</el-breadcrumb-item>
    </el-breadcrumb>
    <router-view></router-view>
  </el-main>
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
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "N/A";
        }
      });
      return sums;
    },
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
    getSummaries(param) {
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总价";
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        if (!values.every((value) => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 元";
        } else {
          sums[index] = "N/A";
        }
      });
      return sums;
    },
  },
  mounted() {
    this.drawCharta();
    this.drawChartb();
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

</style>
