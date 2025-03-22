import { Scene, CityBuildingLayer, LineLayer, PolygonLayer, PointLayer } from "@antv/l7";
import { GaodeMap, Map } from "@antv/l7-maps";


const map = new Map({
  viewMode: '3D',
  mapStyle: 'amap://styles/darkblue',
  center: [121.435159, 31.256971],
  zoom: 14.89,
  minZoom: 10,
});

const scene = new Scene({
  id: "map",
  map: new GaodeMap({
    mapInstance: map,
    // center: [120.145, 30.238915],
    // pitch: 60,
    // zoom: 13.2,
    // style: "dark",
  }),
});

// scene.setBgColor('#000');

scene.on('loaded', () => {
  fetch('https://gw.alipayobjects.com/os/basement_prod/893d1d5f-11d9-45f3-8322-ee9140d288ae.json')
    .then((res) => res.json())
    .then((data) => {
      const pointLayer = new PointLayer()
        .source(data, {
          parser: {
            type: 'json',
            x: 'longitude',
            y: 'latitude',
          },
        })
        .shape('name', [
          'circle',
          'triangle',
          'square',
          'pentagon',
          'hexagon',
          'octogon',
          'hexagram',
          'rhombus',
          'vesica',
        ])
        .size('unit_price', [10, 25])
        .color('name', ['#5B8FF9', '#5CCEA1', '#5D7092', '#F6BD16', '#E86452'])
        .style({
          opacity: 0.3,
          strokeWidth: 2,
        });
      scene.addLayer(pointLayer);
    });
});

export default () => (
  <div className="w-full h-full justify-center relative" id="map" />
);
