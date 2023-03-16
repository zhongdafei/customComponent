<template>
  <div>
    <div class="map" id="map"></div>
    <!-- <div class="map1" id="map1"></div> -->
    <div class="control">
      <button @click="exchangeMap">123</button>
      <button @click="moveMap">去南昌</button>
      <button @click="addZoom">addZoom</button>
      <button @click="changeLayer">changeLayer</button>
      <button @click="addImage">addImage</button>
      <button @click="addIcon">addIcons</button>
      <div>////</div>
      <button @click="addGeo">addGeo</button>
    </div>
  </div>
</template>

<script>
import MyMap from "./index";

export default {
  name: "mapInit",
  components: {},
  data() {
    return {
      map: null,
      map1: null,
      list: [
        { coord: [120.125248, 30.222879], value: "1", id: 1, type: 1 },
        { coord: [120.068332, 30.273794], value: "2", id: 2, type: 2 },
        { coord: [120.299448, 30.176434], value: "3", id: 3, type: 2 },
        { coord: [120.199987, 30.235361], value: "4", id: 4, type: 1 },
        { coord: [120.104551, 30.171938], value: "5", id: 5, type: 2 },
        { coord: [120.120074, 30.213579], value: "6", id: 6, type: 1 },
        { coord: [120.122949, 30.236047], value: "7", id: 7, type: 2 },
        { coord: [120.153994, 30.215202], value: "8", id: 8, type: 1 },
        { coord: [120.095353, 30.213455], value: "9", id: 9, type: 1 },
        { coord: [120.141777, 30.191731], value: "10", id: 10, type: 1 },
      ],
    };
  },
  methods: {
    createMap() {
      this.map = new MyMap({
        target: "map",
        source:
          "http://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}", //高德地图

        // "http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
      });
      // 注册点击事件
      this.map.map.on("singleclick", (evt) => {
        let feature = this.map.map.hasFeatureAtPixel(evt.pixel, {
          layerFilter: (e) => {
            let name = e.get("name");
            console.log(name,e,evt);
            if (name == "point") {
              return true;
            }
          },
        });
        console.log(feature);
      });
      // this.map1 = new MyMap({
      //   target: "map1",
      //   source: "http://192.168.1.40:9527/satellite/{z}/{x}/{y}.jpg",
      // });
      // // this.map.init_point(this.list)
      // console.log(this.map);
    },
    exchangeMap() {
      this.map.map.setTarget(
        this.map.map.getTarget() === "map" ? "map1" : "map"
      );
      this.map1.map.setTarget(
        this.map1.map.getTarget() === "map1" ? "map" : "map1"
      );
    },
    // 地图中心位改变
    moveMap() {
      this.map.changeMapCenter([115.858692, 28.739111]);
    },
    // 地图放大缩小
    addZoom() {
      this.map.changeMapCenter([115.858692, 28.739111]);
      this.map.changeZoom(1);
    },
    // 更改地图图层
    changeLayer() {
      this.map.changeLayer();
    },
    addImage() {
      this.map.addImage();
    },
    // 添加icon
    addIcon() {
      this.map.addIcon(this.list);
    },
    // 画几何图形
    addGeo() {
      this.map.addGeo();
    },
  },
  mounted() {
    this.createMap();
  },
};
</script>

<style scoped lang="scss">
#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  // height: 50%;
}
#map1 {
  position: absolute;
  top: 50%;
  bottom: 0;
  width: 100%;
  height: 50%;
}
.control {
  position: absolute;
  top: 0;
}
</style>
