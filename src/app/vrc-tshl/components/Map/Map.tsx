import { LayerPopup, LineLayer, Marker, MarkerLayer, PointLayer, Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';
import Data from './data';

const scene = new Scene({
  id: 'map',
  map: new GaodeMap({
    token: '95ad3b434f34ec113e9dce368309117e',
    center: [112.875624, 28.235057],
    // pitch: 35.210526315789465,
    style: 'dark',
    pitchEnable: false,
    // rotation: -90,
    mapStyle: 'amap://styles/darkblue',
    zoom: 15,
  }),
});

scene.on('loaded', () => {

  Data.line.forEach((item) => {
    scene.addLayer(addLayer(item.data, item.color));
  });
});

const addLayer = (coordinates: number[][], color: string) => {
  const layer = new LineLayer({})
    .source({
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {},
          "geometry": {
            "type": "LineString",
            "coordinates": coordinates
          }
        }
      ]
    })
    .size(3)
    .shape('line')
    .texture('arrow')
    .color(color)
    .animate({
      interval: 1, // 间隔
      duration: 2, // 持续时间，延时
      trailLength: 2, // 流线长度
    })
    .style({
      opacity: 0.6,
      lineTexture: true, // 开启线的贴图功能
      iconStep: 10, // 设置贴图纹理的间距
      borderWidth: 0.4, // 默认文 0，最大有效值为 0.5
      borderColor: '#fff', // 默认为 #ccc
    });
  return layer;
};

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
