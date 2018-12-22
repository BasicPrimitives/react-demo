import PropTypes from 'prop-types';
import primitives from 'basicprimitives';
import ButtonConfig from './ButtonConfig';

const TemplateConfig = () => PropTypes.shape({
  name: PropTypes.string,
  isActive: PropTypes.bool,
  itemSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  itemBorderWidth: PropTypes.number,
  itemTemplate: PropTypes.any,
  minimizedItemShapeType: PropTypes.oneOf(Object.values(primitives.common.ShapeType)),
  minimizedItemSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  minimizedItemCornerRadius: PropTypes.number,
  minimizedItemLineWidth: PropTypes.number,
  minimizedItemBorderColor: PropTypes.string,
  minimizedItemLineType: PropTypes.oneOf(Object.values(primitives.common.LineType)),
  minimizedItemFillColor: PropTypes.string,
  minimizedItemOpacity: PropTypes.number,
  highlightPadding: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
  }),
  highlightBorderWidth: PropTypes.number,
  highlightTemplate: PropTypes.any,
  cursorPadding: PropTypes.shape({
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    right: PropTypes.number.isRequired,
    bottom: PropTypes.number.isRequired,
  }),
  cursorBorderWidth: PropTypes.number,
  cursorTemplate: PropTypes.any,
  buttons: PropTypes.arrayOf(ButtonConfig())
});

export default TemplateConfig;
