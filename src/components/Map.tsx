import { LineLayer, PolygonLayer, Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';

const scene = new Scene({
  id: 'map',
  map: new GaodeMap({
    token: '95ad3b434f34ec113e9dce368309117e',
    center: [112.875624,28.235057],
    // pitch: 35.210526315789465,
    style: 'dark',
    pitchEnable: false,
    // rotation: -90,
    mapStyle: 'amap://styles/darkblue',
    zoom: 15,
  }),
});

scene.on('loaded', () => {
  const data = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [112.863298, 28.23199],
            [112.867108, 28.240574],
            [112.876914, 28.244068],
            [112.887157, 28.240079],
            [112.887126, 28.230614],
            [112.880817, 28.225827],
            [112.863298, 28.23199]
          ]
        }
      }
    ]
  }

  const layer = new LineLayer({})
    .source(data)
    .size(3)
    .shape('line')
    .texture('arrow')
    .color('rgb(22,119,255)')
    .animate({
      interval: 1, // 间隔
      duration: 10, // 持续时间，延时
      trailLength: 2, // 流线长度
    })
    .style({
      opacity: 0.6,
      lineTexture: true, // 开启线的贴图功能
      iconStep: 10, // 设置贴图纹理的间距
      borderWidth: 0.4, // 默认文 0，最大有效值为 0.5
      borderColor: '#fff', // 默认为 #ccc
    });
  scene.addLayer(layer);
});

// after:content-['']
// after:text-red-500 
// after:z-10 
// after:absolute 
// after:top-0 
// after:left-0 
// after:w-full 
// after:h-full 
// after:shadow-innerBlack

export default () => (
  <div className="w-full 
  h-full 
  justify-center 
  relative 
  " id="map" />
);
