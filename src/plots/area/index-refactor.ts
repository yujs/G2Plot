import * as _ from '@antv/util';
import BasePlot, { PlotCfg } from '../../base/plot-refactor';
import AreaLayer, { AreaLayerConfig } from './layer-refactor';

export interface AreaConfig extends AreaLayerConfig, PlotCfg {}

export default class Area<T extends AreaConfig = AreaConfig> extends BasePlot<T> {
  public static getDefaultProps = AreaLayer.getDefaultOptions;

  public createLayers(props) {
    const layerProps = _.deepMix({}, props);
    layerProps.type = 'area';
    super.createLayers(layerProps);
  }
}