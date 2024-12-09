window.addEventListener("load", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    //分页器
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    // paginationType: 'progress',
    // pagination: '.swiper-pagination',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

var myChart = echarts.init(document.querySelector(".about"));

data = 21.5;
option = {
  backgroundColor: "rgba(20,28,52,0)",
  grid: {
    left: 130,
    right: 0,
    bottom: 0,
    top: 0,
    containLabel: true,
  },
  tooltip: {
    show: false,
  },

  xAxis: {
    show: false,
    type: "value",
  },
  yAxis: {
    type: "category",
    inverse: true,
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
  },
  series: [
    {
      name: "",
      type: "bar",
      zlevel: 1,
      itemStyle: {
        normal: {
          barBorderRadius: 30,
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            {
              offset: 0,
              color: "#6569FF",
            },
            {
              offset: 1,
              color: "#00CCFF",
            },
          ]),
        },
      },
      barWidth: 20,
      data: [data],
      label: {
        show: true,
        position: "right",
        color: "#fff",
        formatter: function (params) {
          return "{a|▼}";
        },
        rich: {
          a: {
            fontSize: 16,
            color: "#FFFB8F",
            lineHeight: 10,
            padding: [50, 0, 0, -14],
            textShadowBlur: 15,
            textShadowColor: "#FFFB8F",
          },
        },
      },
    },
    {
      name: "背景",
      type: "bar",
      barWidth: 20,
      barGap: "-100%",
      data: [22],
      itemStyle: {
        normal: {
          color: "#3B7EAA",
          barBorderRadius: 30,

          opacity: 0.3,
        },
      },
    },
  ],
};

myChart.setOption(option);
