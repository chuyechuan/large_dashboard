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


  // 红绿灯
  const markerData = [
    {
      lng: 112.876531,
      lat: 28.233516
    },
    {
      lng: 112.874413,
      lat: 28.234823
    },
    {
      lng: 112.872359,
      lat: 28.235805
    },
    {
      lng: 112.870353,
      lat: 28.236625
    }
  ]

  const markerLayer = new MarkerLayer();

  markerData.forEach((item) => {
    const marker = addMarker(item.lng, item.lat);
    markerLayer.addMarker(marker);
  });

  scene.addMarkerLayer(markerLayer);

  // 交通事故图片弹出层
  const { layerPopup, pointLayer } = addPoint([
    {
      lng: 112.87685,
      lat: 28.234131,
      value: 34.71314604052238,
      name: '追尾',
    },
    {
      lng: 112.874859,
      lat: 28.237269,
      value: 34.71314604052238,
      name: '追尾',
    },
    {
      lng: 112.869263,
      lat: 28.239633,
      value: 34.71314604052238,
      name: '追尾',
    },
  ]);
  scene.addLayer(pointLayer);
  scene.addPopup(layerPopup);
});

const addMarker = (lng: number, lat: number) => {
  const dom = document.createElement('div');
  dom.style.width = '10px';
  dom.style.height = '20px';
  dom.style.background = 'url(https://cdn.pixabay.com/photo/2013/07/12/15/05/traffic-lights-149388_1280.png) no-repeat center center / 100% 100%';

  const marker = new Marker({
    element: dom,
  }).setLnglat({ lng, lat });

  return marker;
};

const addLayer = (data: any, color: string) => {
  const layer = new LineLayer({})
    .source(data)
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

const addPoint = (data: any) => {
  const pointLayer = new PointLayer({});
  pointLayer
    .source(
      data,
      {
        parser: {
          type: 'json',
          x: 'lng',
          y: 'lat',
        },
      },
    )
    .color('value', ['#FFCCC6', '#CF1421'])
    .size(10)
    .shape('circle');

  const dom = document.createElement('div');
  dom.style.width = '150px';
  dom.style.height = '110px';
  dom.style.background = 'url(https://p2.itc.cn/q_70/images01/20210915/f3e3413e3d954b08b8d0246bad7e382f.jpeg) no-repeat center center / 100% 100%';

  const layerPopup = new LayerPopup({
    items: [
      {
        layer: pointLayer,
        customContent: dom,
        title: ({ name }) => name,
      },
    ],
  });

  return { layerPopup, pointLayer };
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
