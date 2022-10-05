import Chart from 'react-google-charts'
const LineData = [
  ['x', 'name', 'name2'],
  [0, 0, 0],
  [1, 10, 5],
  [2, 23, 15],
  [3, 17, 9],
  [4, 18, 10],
  [5, 9, 5],
  [6, 11, 3],
  [7, 27, 19],
]
const LineChartOptions = {
  hAxis: {
    title: 'Another x dimesion parameter',
  },
  vAxis: {
    title: 'Some Paramter',
  },
  series: {
    1: { curveType: 'function' },
  },
}

function Charts(){
return(
    <div className="">
        <Chart
          width={'700px'}
          height={'350px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
)
}
export default Charts;