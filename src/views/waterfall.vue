<template>
  <div class="waterfall" id="waterfall">
    <!-- <ul>
      <li v-for="item in list" :key="item.id">
        <img :src="item.img" alt="" />
        <div>{{ item.name }}</div>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: "transfer",
  components: {},
  dicts:['sys_admin'],
  data() {
    return {
      list: [
        {
          id: 8,
          name: "被爱的人不用道歉",
          img: require("../assets/images/0.jpg"),
        },
        {
          id: 1,
          name: "被爱的人不用道歉",
          img: require("../assets/images/1.jpg"),
        },
        {
          id: 2,
          name: "什么特征 人缘还是眼神 也不会预知爱不爱的可能 ",
          img: require("../assets/images/2.jpg"),
        },
        {
          id: 3,
          name: "有过竞争 有过牺牲 被爱筛选过程 学会认真 学会忠诚 适者才能生存 懂得永恒 得要我们 进化成更好的人",
          img: require("../assets/images/3.jpg"),
        },
        {
          id: 4,
          name: "我的青春 有时还蛮单纯 相信幸福取决于爱得深 读进化论 我赞成达尔文 没实力的就有淘汰的可能",
          img: require("../assets/images/4.jpg"),
        },
        {
          id: 5,
          name: "我的一生 有几道旋转门 转到了最后只剩你我没分 有过竞争 有过牺牲 被爱筛选过程",
          img: require("../assets/images/5.jpg"),
        },
        {
          id: 6,
          name: "被爱的人不用道歉",
          img: require("../assets/images/6.png"),
        },
        {
          id: 7,
          name: "被爱的人不用道歉",
          img: require("../assets/images/7.png"),
        },
      ],
    };
  },
  methods: {
    waterfall(col = 2) {
      let waterfallEle = document.getElementById("waterfall");
      let ulList = [];
      for (let i = 0; i < col; i++) {
        let ul = document.createElement("ul");
        ul.className = "ul_" + i;
        ul.style="padding: 0; margin: 0; float: left;"
        ulList.push(ul);
        waterfallEle.appendChild(ul);
      }
      for (let i = 0; i < this.list.length; i++) {
        const element = this.list[i];
        let minHeightEle = this.getMinHeight(ulList);
        let liHtml = `
          <li style=" width: 120px;
              list-style: none;
              padding: 0px;
              margin: 10px;
              border: 1px solid #ccc;
              box-sizing: border-box;">
            <img style="width: 100%;" src="${element.img}" alt="" />
            <div style="   padding: 5px;font-size: 12px;"> ${element.name}</div>
          </li>
        `;
        minHeightEle.innerHTML += liHtml;
      }
    },
    getMinHeight(list) {
      let newList = list.sort((a, b) => {
        return a.offsetHeight - b.offsetHeight;
      });
      return newList[0];
    }, 
  },
  mounted() {
    this.waterfall(3);
  },
};
</script>

<style scoped lang="scss">
.waterfall { 
  background-color: pink;
  display: inline-block;
  // ul {
  //   padding: 0;
  //   margin: 0;
  //   float: left;
  //   li {
  //     width: 120px;
  //     list-style: none;
  //     padding: 0px;
  //     margin: 10px;
  //     border: 1px solid #ccc;
  //     box-sizing: border-box;
  //     img {
  //       width: 100%;
  //     }
  //     > div {
  //       padding: 5px;
  //       font-size: 12px;
  //     }
  //   }
  // }
}
</style>