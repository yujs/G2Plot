import * as G from '@antv/g';
import BaseColumnLayer from '../../src/plots/column/layer-refactor';
import BasePlot from '../../src/base/plot-refactor';
import { Column } from '../../src';
import DensityLayer from '../../src/plots/density/layer-refactor';
import { Density } from '../../src';

const canvasDiv = document.createElement('div');
canvasDiv.style.width = '400px';
canvasDiv.style.height = '300px';
canvasDiv.id = 'canvas';
document.body.appendChild(canvasDiv);

const canvas = new G.Canvas({
  containerId: 'canvas',
  width: 400,
  height: 300,
});

const data = [
  {
    year: '1991',
    value: 31,
  },
  {
    year: '1992',
    value: 41,
  },
  {
    year: '1993',
    value: 35,
  },
  {
    year: '1994',
    value: 55,
  },
  {
    year: '1995',
    value: 49,
  },
  {
    year: '1996',
    value: 15,
  },
  {
    year: '1997',
    value: 17,
  },
  {
    year: '1998',
    value: 29,
  },
  {
    year: '1999',
    value: 33,
  },
];

const data2 = [
  { value: 1.2 },
  { value: 3.4 },
  { value: 3.7 },
  { value: 4.3 },
  { value: 5.2 },
  { value: 5.8 },
  { value: 6.1 },
  { value: 6.5 },
  { value: 6.8 },
  { value: 7.1 },
  { value: 7.3 },
  { value: 7.7 },
  { value: 8.3 },
  { value: 8.6 },
  { value: 8.8 },
  { value: 9.1 },
  { value: 9.2 },
  { value: 9.4 },
  { value: 9.5 },
  { value: 9.7 },
  { value: 10.5 },
  { value: 10.7 },
  { value: 10.8 },
  { value: 11.0 },
  { value: 11.0 },
  { value: 11.1 },
  { value: 11.2 },
  { value: 11.3 },
  { value: 11.4 },
  { value: 11.4 },
  { value: 11.7 },
  { value: 12.0 },
  { value: 12.9 },
  { value: 12.9 },
  { value: 13.3 },
  { value: 13.7 },
  { value: 13.8 },
  { value: 13.9 },
  { value: 14.0 },
  { value: 14.2 },
  { value: 14.5 },
  { value: 15 },
  { value: 15.2 },
  { value: 15.6 },
  { value: 16.0 },
  { value: 16.3 },
  { value: 17.3 },
  { value: 17.5 },
  { value: 17.9 },
  { value: 18.0 },
  { value: 18.0 },
  { value: 20.6 },
  { value: 21 },
  { value: 23.4 },
];


describe('view layer test', () => {
  it('initialize', () => {
    const column = new BaseColumnLayer({
      title: {
        visible: true,
        text: '先帝创业未半而中道崩殂',
      },
      description: {
        visible: true,
        text: '今天下三分，益州疲弊，此诚危急存亡之秋也',
      },
      width: 400,
      height: 300,
      canvas: canvas,
      padding: 'auto',
      data,
      xField: 'year',
      yField: 'value',
      interactions: [
        {
          type: 'slider',
          cfg: {
            start: 0,
            end: 1,
          },
        },
      ],
    });
    column.render();
  });

  it('base plot', () => {
    const plot = new BasePlot(canvasDiv, {
      forfit: true,
      type: 'column',
      width: 400,
      height: 300,
      canvas: canvas,
      padding: 'auto',
      data,
      xField: 'year',
      yField: 'value',
    });
    plot.render();
  });

  it('plot test', () => {
    const columnPlot = new Column(canvasDiv, {
      width: 400,
      height: 300,
      padding: 'auto',
      data,
      xField: 'year',
      yField: 'value',
    });
    columnPlot.render();
  });

  it('density layer',()=>{
    
    const density = new DensityLayer({
      width: 300,
      height: 300,
      data: data2,
      binField: 'value',
      binWidth: 2,
      responsive: true,
      canvas
    });
    density.render();
  });

  it.only('density plot',()=>{
    const density = new Density(canvasDiv,{
      width: 300,
      height: 300,
      data: data2,
      binField: 'value',
      binWidth: 2,
      responsive: true,
    });
    density.render();
  });

});
