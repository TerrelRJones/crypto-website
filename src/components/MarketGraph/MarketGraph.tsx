import { useEffect, useRef } from 'react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import { COLORS } from 'const/colors';
import * as d3 from 'd3';
import { useGraphCalculations } from 'hooks/useGraphCalculations';
import { useMobileResponsiveness } from 'hooks/useMobileResponsiveness';
import { PriceResponse } from 'types/coins';

interface LineChartArgs {
  x?: ([]) => number;
  y?: ([]) => number;
  defined?: (item: number[], index: number, arr: number[][]) => boolean;
  curve?: d3.CurveFactory;
  marginTop?: number;
  marginRight?: number;
  marginLeft?: number;
  marginBottom?: number;
  width?: number;
  height?: number;
  xType?: any;
  xDomain?: any;
  xRange?: any;
  yType?: any;
  yDomain?: any;
  yRange?: any;
  yFormat?: any;
  yLabel?: string;
  color?: string;
  strokeLinecap?: string;
  strokeLinejoin?: string;
  strokeWidth?: number;
  strokeOpacity?: number;
}

export const LineChart = (
  data: PriceResponse,
  {
    x = ([x]) => x, // given d in data, returns the (temporal) x-value
    y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
    defined = (d, i) => !isNaN(d[0]) && !isNaN(d[1]), // for gaps in data
    curve = d3.curveBasis, // method of interpolation between points
    marginTop = 20, // top margin, in pixels
    marginRight = 30, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 40, // left margin, in pixels
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    xType = d3.scaleUtc, // the x-scale type
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // the y-scale type
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    color = 'currentColor', // stroke color of line
    strokeLinecap = 'round', // stroke line cap of the line
    strokeLinejoin = 'round', // stroke line join of the line
    strokeWidth = 1.5, // stroke width of line, in pixels
    strokeOpacity = 1, // stroke opacity of line
  }: LineChartArgs = {},
) => {
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);
  // const I: any = d3.range(X.length);

  // yDomain
  // clamp at 0
  // scale at a percentage to account for wide varying in currency values

  // Compute default domains.
  if (xDomain === undefined) xDomain = d3.extent(X);
  if (yDomain === undefined) yDomain = [d3.min(Y), d3.max(Y)];

  // Construct scales and axes.
  const xScale = xType(xDomain, xRange);
  const yScale = yType(yDomain, yRange);
  const xAxis = d3
    .axisBottom(xScale)
    .ticks(width / 80)
    .tickSizeOuter(0);
  const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);

  // Construct a line generator.
  const line = d3
    .line()
    .defined(defined)
    .curve(curve)
    .x(d => {
      return xScale(d[0]);
    })
    .y(d => {
      return yScale(d[1]);
    });

  const svg = d3
    .create('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [0, 0, width, height]);

  //Chart Lines leave for accessibility?

  // svg
  //   .append('g')
  //   .attr('transform', `translate(0,${height - marginBottom})`)
  //   .call(xAxis);

  // svg
  //   .append('g')
  //   .attr('transform', `translate(${marginLeft},0)`)
  //   .call(yAxis)
  //   .call(g => g.select('.domain').remove())
  //   .call(g =>
  //     g
  //       .selectAll('.tick line')
  //       .clone()
  //       .attr('x2', width - marginLeft - marginRight)
  //       .attr('stroke-opacity', 0.1),
  //   )
  //   .call(g =>
  //     g
  //       .append('text')
  //       .attr('x', -marginLeft)
  //       .attr('y', 10)
  //       .attr('fill', 'currentColor')
  //       .attr('text-anchor', 'start')
  //       .text(yLabel),
  //   );

  svg
    .append('path')
    .attr('fill', 'none')
    .attr('stroke', color)
    .attr('stroke-width', strokeWidth)
    .attr('stroke-linecap', strokeLinecap)
    .attr('stroke-linejoin', strokeLinejoin)
    .attr('stroke-opacity', strokeOpacity)
    .attr('d', line(data));

  return svg.node();
};

interface MarketGraphProps {
  prices: PriceResponse;
}

export const MarketGraph = ({ prices }: MarketGraphProps) => {
  const { color, sevenDayPercentageChange } = useGraphCalculations(prices);
  const { isMobile } = useMobileResponsiveness();

  const ref = useRef(null);

  const graph = LineChart(prices, {
    x: d => d[0],
    y: d => d[1],
    yLabel: '↑ Daily close ($)',
    width: 275,
    height: 150,
    color: color,
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.appendChild(graph);
    }
  }, [prices]);

  return (
    <Box
      maxW="100%"
      height="auto"
      display="flex"
      justifyContent="space-between">
      <Box ref={ref} marginLeft={isMobile ? -45 : undefined}></Box>
      <Box height="100%" marginTop="auto">
        <Box color={color} height="100%" display="flex" alignItems="center">
          {color === COLORS.neonGreen ? (
            <TriangleUpIcon color={color} pr={1} />
          ) : (
            <TriangleDownIcon color={color} pr={1} />
          )}
          <Text fontSize={24} fontWeight="medium">
            {sevenDayPercentageChange}%
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
