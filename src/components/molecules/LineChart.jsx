import Chart from "react-apexcharts";

const LineChart = (props) => {
  const { series, options } = props;

  return (
    <Chart
    className="h-[150px] lg:h-[360px]"
      options={options}
      type="line"
      width="100%"
      height="100%"
      series={series}
    />
  );
};

export default LineChart;
