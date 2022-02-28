import { useState } from 'react';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const chartOptions = {
  fontFamily: 'Raleway',
};

export const titleOptions = {
  align: 'center',
  margin: 60,
  style: {
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'Raleway',
  },
};

export const containerOptions = {
  left: 0,
  top: 0,
};

const ChartLine = (props) => {
  const { chart, title, xaxis, series } = props.customOptions;
  const [options, setOptions] = useState({
    ...props.customOptions,
    chart: {
      ...chartOptions,
      ...chart,
    },
    title: {
      ...titleOptions,
      ...title,
    },
    stroke: {
      width: 8,
      curve: 'smooth',
    },
    fill: {
      type: 'gradient',
      gradient: {
        colorStops: [
          [
            {
              offset: 0,
              color: '#84B5BC',
              opacity: 1,
            },
            {
              offset: 100,
              color: '#1C7EC2',
              opacity: 1,
            },
          ],
        ],
      },
    },
    markers: {
      colors: ['#0C848C'],
      size: 12,
      hover: {
        sizeOffset: 2,
      },
    },
    xaxis: {
      ...xaxis,
      labels: {
        style: {
          fontSize: '16px',
        },
      },
    },
    yaxis: [
      {
        tickAmount: 1,
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            fontSize: '16px',
          },
        },
      },
    ],
    containerMargin: {
      ...containerOptions,
    },
    responsive: [
      {
        breakpoint: 425,
        options: {
          markers: {
            size: 4,
          },
          xaxis: {
            labels: {
              style: {
                fontSize: '12px',
              },
            },
          },
          yaxis: [
            {
              labels: {
                style: {
                  fontSize: '12px',
                },
              },
            },
          ],
        },
      },
    ],
  });

  return (
    <>
      <Chart options={options} series={series} type='line' />
    </>
  );
};

export default ChartLine;
