import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const MyKline = ({ rawData }) => {
  const chartRef = useRef(null);
  useEffect(() => {
    // rawData = rawData.slice(-40);
    const myChart = echarts.init(chartRef.current);
    // 配置选项
    // console.log(rawData,'傳入MyKline的數據為')
    function formatTimestampToDateString(timestamp) {
      const date = new Date(timestamp);

      // 获取年份、月份、日期、小时和分钟
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份从0开始
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");

      // 格式化为 "YYYY-MM-DD HH:mm:ss"
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }

    const datas = rawData.map((item) => [
      formatTimestampToDateString(item[0]), // 只取日期部分
      item[1],
      item[4],
      item[3],
      item[2],
      item[5],
    ]);
    var data = splitData(datas);
    // 数组处理
    function splitData(rawData) {
      var datas = [];
      var times = [];
      var vols = [];
      for (var i = 0; i < rawData.length; i++) {
        datas.push(rawData[i]);
        times.push(rawData[i].splice(0, 1)[0]);
        vols.push(rawData[i][4]);
      }
      return {
        datas: datas,
        times: times,
        vols: vols,
      };
    }
    // 分段计算
    function fenduans() {
      var markLineData = [];
      var idx = 0;
      var tag = 0;
      var vols = 0;
      for (var i = 0; i < data.times.length; i++) {
        // 初始化数据
        if (data.datas[i][5] !== 0 && tag == 0) {
          idx = i;
          vols = data.datas[i][4];
          tag = 1;
        }
      }
      return markLineData;
    }

    // MA计算公式
    function calculateMA(dayCount) {
      var result = [];
      for (var i = 0, len = data.times.length; i < len; i++) {
        if (i < dayCount) {
          result.push("-");
          continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
          sum += data.datas[i - j][1];
        }
        result.push((sum / dayCount).toFixed(2));
      }
      return result;
    }

    var option = {
      title: {
        text: "圖表",
        left: 0,
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
        },
      },
      legend: {
        data: ["KLine", "MA5"],
      },
      grid: [
        {
          left: "3%",
          right: "1%",
          height: "60%",
        },
        {
          left: "3%",
          right: "1%",
          top: "71%",
          height: "10%",
        },
      ],
      xAxis: [
        {
          type: "category",
          data: data.times,
          scale: true,
          boundaryGap: false,
          axisLine: { onZero: false },
          splitLine: { show: false },
          splitNumber: 20,
          min: "dataMin",
          max: "dataMax",
        },
        {
          type: "category",
          gridIndex: 1,
          data: data.times,
          axisLabel: { show: false },
        },
      ],
      yAxis: [
        {
          scale: true,
          splitArea: {
            show: false,
          },
        },
        {
          gridIndex: 1,
          splitNumber: 3,
          axisLine: { onZero: false },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: true },
        },
      ],
      dataZoom: [
        {
          type: "inside",
          xAxisIndex: [0, 0],
          start: 20,
          end: 100,
        },
        {
          show: true,
          xAxisIndex: [0, 1],
          type: "slider",
          top: "97%",
          start: 20,
          end: 100,
        },
      ],
      series: [
        {
          name: "K线周期图表",
          type: "candlestick",
          data: data.datas,
          itemStyle: {
            normal: {
              color: "#14b143",
              color0: "#ef232a",
              borderColor: "#14b143",
              borderColor0: "#ef232a",
            },
          },
          markArea: {
            silent: true,
            itemStyle: {
              normal: {
                color: "Honeydew",
              },
            },
            data: fenduans(),
          },
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" },
            ],
          },
        },
        {
          name: "MA5",
          type: "line",
          data: calculateMA(5),
          smooth: true,
          lineStyle: {
            normal: {
              opacity: 0.5,
            },
          },
        },
        {
          name: "Volume",
          type: "bar",
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: data.vols,
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList;
                if (
                  data.datas[params.dataIndex][1] >
                  data.datas[params.dataIndex][0]
                ) {
                  colorList = "#14b143";
                } else {
                  colorList = "#ef232a";
                }
                return colorList;
              },
            },
          },
        },
      ],
    };

    //到尼到好啦
    myChart.setOption(option);

    const handleResize = () => {
      myChart.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      myChart.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, [rawData]);

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />;
};

export default MyKline;
