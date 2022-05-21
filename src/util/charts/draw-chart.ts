// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import GoogleChartsNode from 'google-charts-node';
import { randomNumber } from '../helpers';

type Dimensions = {
  width: number;
  height: number;
};
type RenderStrProps = {
  imageDimensions: Dimensions;
};
const toRenderStr = ({ imageDimensions }: RenderStrProps) => `
var data = google.visualization.arrayToDataTable([
    ['Mon', ${randomNumber(10, 22)}, ${randomNumber(23, 30)}, ${randomNumber(
  36,
  39
)}, ${randomNumber(41, 46)}],
    ['Tue', ${randomNumber(20, 27)}, ${randomNumber(30, 36)}, ${randomNumber(
  48,
  56
)}, ${randomNumber(58, 68)}],
    ['Wed', ${randomNumber(41, 46)}, ${randomNumber(52, 58)}, ${randomNumber(
  72,
  75
)}, ${randomNumber(75, 88)}],
    ['Thu', ${randomNumber(65, 70)}, ${randomNumber(75, 79)}, ${randomNumber(
  50,
  60
)}, ${randomNumber(40, 44)}],
    ['Fri', ${randomNumber(60, 65)}, ${randomNumber(50, 55)}, ${randomNumber(
  20,
  25
)}, ${randomNumber(5, 15)}]
   ], true);
  
   var options = {
    width: ${imageDimensions.width + 200},
    height: ${imageDimensions.height + 100},
    legend:'none'
   };
  
   var chart = new google.visualization.CandlestickChart(document.getElementById('point'));
   chart.draw(data, options);
`;

type DrawChartProps = {
  imageDimensions: Dimensions;
};

export const drawChart = async ({ imageDimensions }: DrawChartProps) =>
  await GoogleChartsNode.render(
    toRenderStr({ imageDimensions }),
    imageDimensions
  );
