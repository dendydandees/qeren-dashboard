import dynamic from 'next/dynamic';
import { useState } from 'react';
import { chartOptions, containerOptions, titleOptions } from './ChartLine';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartRadial = (props) => {
  const { chart, title, series } = props.customOptions;
  const [options, setOptions] = useState({
    ...props.customOptions,
    chart: {
      ...chartOptions,
      ...chart,
    },
    title: {
      ...titleOptions,
      ...title,
      margin: 0,
    },
    plotOptions: {
      radialBar: {
        inverseOrder: true,
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 0,
          size: '25%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: true,
          },
          value: {
            show: true,
          },
        },
        track: {
          show: false,
        },
      },
    },
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'left',
      offsetX: 0,
      offsetY: 32,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 4,
      },
    },
    responsive: [
      {
        breakpoint: 425,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
    containerMargin: {
      ...containerOptions,
    },
  });

  return (
    <>
      <Chart options={options} series={series} type='radialBar' />
    </>
  );
};

export default ChartRadial;
