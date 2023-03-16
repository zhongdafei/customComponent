import Map from "ol/Map.js";
import View from "ol/View.js";
import TileLayer from "ol/layer/Tile.js"; 
import Select from 'ol/interaction/Select.js';
import XYZ from "ol/source/XYZ";
import { Vector as VectorLayer } from "ol/layer";
import VectorSource from 'ol/source/Vector.js';
import GeoJSON from 'ol/format/GeoJSON.js';
import BingMaps from 'ol/source/BingMaps.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import { Circle, Fill, Stroke, Style, Icon } from 'ol/style.js';
import Logo from '../../assets/logo.png'
export default class MyMap {
  constructor({ target, source, view = new View({
    extent: [-179, -74, 179, 79],//设置地图中心范围
    center: [120.205162, 30.25433],
    projection: "EPSG:4326",//设置投影
    zoom: 10,
    minZoom: 5,
    maxZoom: 19,
  }) }) {
    this.map = null
    this.init_map({ target, source, view })
    this.sourceVector = new VectorSource({})
    this.layerVector = new VectorLayer({})
    this.view = this.map.getView()
    // this.map.on('singleclick',function(e){
    //   console.log(e);
    // })
  }


  // 地图初始化
  init_map({ target, source, view = new View({
    center: [120.205162, 30.25433],
    projection: "EPSG:4326",
    zoom: 10,
    maxZoom: 18,
  }) }) {
    this.map = new Map({
      target: target,
      control: {
        attributionOptions: ({
          collapsible: true
        })
      },
      layers: [
        new TileLayer({
          source: new XYZ({
            // url: "http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
            url: source,
          }),
        }),
      ],
      view: view,
    });
    // console.log(this.map.getSize()); 
  }
  // 改变地图中心位
  changeMapCenter(coord) {
    coord = coord instanceof Array ? coord : this.view.getCenter()
    let mapCenter = this.view.getCenter()
    this.view.setCenter(coord)
    this.map.render()
  }
  // 地图放大缩小
  changeZoom(size) {
    this.view.setZoom(this.view.getZoom() + size)
  }
  // 更改图层
  changeLayer() {
    // Bing地图层
    var bingMapLayer = new TileLayer({
      source: new BingMaps({
        key: 'AkjzA7OhS4MIBjutL21bkAop7dc41HSE0CNTR5c6HJy8JKc7U9U9RveWJrylD3XJ',
        imagerySet: 'Road'
      })
    });
    let layers = this.map.getLayers()
    this.map.removeLayer(layers.item(0))
    this.map.addLayer(bingMapLayer)

  }
  // 通过image添加图标
  addImage() {
    let Log = document.createElement('img')
    Log.src = Logo
    let pointLayer = new VectorLayer({
      source: new VectorSource()
    })
    let point = new Feature({
      geometry: new Point([120.205162, 30.25433])
    })
    point.setStyle(new Style({
      image: new Icon({
        img: Log,
        imgSize: [500, 500],
        scale: [0.3, 0.3]
      })
    }))
    pointLayer.getSource().addFeature(point)
    this.map.addLayer(pointLayer)
  }
  // 通过src添加图标 批量使用addFeatures
  addIcon(coordinates) {
    let layerVector = new VectorLayer({
      source: new VectorSource()
    })
    let featureArr = coordinates.map(item => {
      let src = item.type == 1 ? require('../../assets/images/3.jpg') : require('../../assets/images/2.jpg')
      let feature = new Feature({
        geometry: new Point(item.coord)
      })
      feature.setStyle(new Style({
        image: new Icon({
          scale: 0.1,
          src: src
        })
      })) 
      // 将数据值保存到feature对象上
      let keys = Object.keys(item)
      keys.forEach(key =>{
        feature.set(key,item[key])
      }) 
      // 图标点击事件
      let selectSingleClick = new Select({})
      this.map.addInteraction(selectSingleClick)
      selectSingleClick.on('select',(event)=>{
        console.log(event.selected[0].values_);
      })
      
      return feature
    })
    layerVector.getSource().addFeatures(featureArr)
    this.map.addLayer(layerVector)
  }
  // 添加几何图形
  addGeo() {
    this.layerVector.setSource({
      source: new VectorSource({
        url: '../data/geojson/line-samples.geojson',     // 地图来源
        format: new GeoJSON()
      }),
      //设置样式，
      style: new Style({
        color: 'red',
        size: 1
      })
    })
    this.map.addLayer(this.layerVector)
  }

  //////////////////////

  // 画点
  init_point(list) {
    //创建空的矢量容器(point)
    let vectorSource = new VectorSource({});
    //创建图标层
    let vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    this.clearTc();
    this.map.addLayer(vectorLayer);
    let poi = [];
    if (list.length) {
      list.forEach((item, index) => {
        item.coord = item.jwd;
        // fromLonLat像素点转经纬度
        poi.push(new Feature(new Point(item.coord)));
        poi[index].set('name', item.name);
        poi[index].set('value', item.value);
        poi[index].set('id', item.id);
        let bdStyle = new Style({
          image: new Circle({
            fill: new Fill({
              color: [128, 0, 128],
            }),
            radius: 6,
          }),
        });
        poi[index].setStyle(bdStyle);
      });
    }
    //根据业务需求所增加的排序
    poi.sort(function (a, b) {
      return b.get('value') - a.get('value');
    });
    poi.forEach((item, index) => {
      vectorSource.addFeature(item);
    });

  }
}