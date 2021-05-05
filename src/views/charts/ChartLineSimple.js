import React from 'react';
import PropTypes from 'prop-types';
import { getColor, deepObjectsMerge } from '@coreui/utils';
import { CChartLine } from '@coreui/react-chartjs';

const ChartLineSimple = (props) => {
  const {
    borderColor,
    backgroundColor,
    pointHoverBackgroundColor,
    dataPoints,
    label,
    pointed,
    ...attributes
  } = props;

  const pointHoverColor = (() => {
    if (pointHoverBackgroundColor) {
      return pointHoverBackgroundColor;
    } if (backgroundColor !== 'transparent') {
      return backgroundColor;
    }
    return borderColor;
  })();

  const defaultDatasets = (() => [
    {
      data: dataPoints,
      borderColor: getColor(borderColor),
      backgroundColor: getColor(backgroundColor),
      pointBackgroundColor: getColor(pointHoverColor),
      pointHoverBackgroundColor: getColor(pointHoverColor),
      label,
    },
  ])();

  const pointedOptions = (() => ({
    scales: {
      xAxes: [
        {
          offset: true,
          gridLines: {
            color: 'transparent',
            zeroLineColor: 'transparent',
          },
          ticks: {
            fontSize: 2,
            fontColor: 'transparent',
          },
        },
      ],
      yAxes: [
        {
          display: false,
          ticks: {
            display: false,
            // eslint-disable-next-line prefer-spread
            min: Math.min.apply(Math, dataPoints) - 5,
            // eslint-disable-next-line prefer-spread
            max: Math.max.apply(Math, dataPoints) + 5,
          },
        },
      ],
    },
    elements: {
      line: {
        borderWidth: 1,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  }))();

  const straightOptions = (() => ({
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }],
    },
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  }))();

  const defaultOptions = (() => {
    const options = pointed ? pointedOptions : straightOptions;
    return {
      ...options,
      maintainAspectRatio: false,
      legend: {
        display: false,
      },
    };
  })();

  const computedDatasets = (() => deepObjectsMerge(defaultDatasets, attributes.datasets || {}))();

  const computedOptions = (() => deepObjectsMerge(defaultOptions, attributes.options || {}))();

  // render

  return (
    <CChartLine
      {...attributes}
      datasets={computedDatasets}
      options={computedOptions}
      labels={label}
    />
  );
};

ChartLineSimple.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  //
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  pointHoverBackgroundColor: PropTypes.string,
  dataPoints: PropTypes.arrayOf(),
  label: PropTypes.string,
  pointed: PropTypes.bool,
};

ChartLineSimple.defaultProps = {
  borderColor: 'rgba(255,255,255,.55)',
  backgroundColor: 'transparent',
  dataPoints: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
  label: 'Sales',
  tag: '',
  className: '',
  pointHoverBackgroundColor: '',
  pointed: false,
};

export default ChartLineSimple;
