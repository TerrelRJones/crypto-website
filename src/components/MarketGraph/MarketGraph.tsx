import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import * as d3 from 'd3';
// import { appleData } from 'mocks/apple';
import { mockTrendingPrices } from 'mocks/trending';

interface MarketGraphProps {
  data?: {
    date: string;
    close: number;
  }[];
}

export const MarketGraph = ({}: MarketGraphProps) => {
  const graphRef = useRef(null);

  useEffect(() => {
    // create svg element:
    const svg = d3
      .select(graphRef.current)
      .append('svg')
      .attr('width', 350)
      .attr('height', 200);

    //problem how adjust ranges for varied prices?
    //Xscale
    const XScale = d3.scaleUtc().range([0, 30050]);

    //Yscale
    const YScale = d3.scaleLinear().domain([0, 10]).range([0, 500]);

    // prepare a helper function
    const lineFunc = d3
      .line()
      .x(function (d) {
        console.log(XScale(d[0]));
        return XScale(d[0]) % 100;
      })
      .y(function (d) {
        // console.log(YScale(d[1]));
        return YScale(d[1]);
      });

    // Add the path using this helper function
    svg
      .append('path')
      .attr('d', lineFunc(mockTrendingPrices))
      .attr('stroke', 'white')
      .attr('fill', 'none');
  }, []);

  return (
    <Box maxWidth="100%" height="auto">
      <div ref={graphRef}></div>
    </Box>
  );
};
