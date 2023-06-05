// import BarChart from "components/charts/BarChart";
import { useState } from "react";
import { MdBarChart } from "react-icons/md";
import Card from "../atom/Card";
import Trade from "../molecules/Trade";

const TradeChart = ({ id, coin }) => {

  let [h, setH] = useState(0)
  let [w, setW] = useState(0)

  setTimeout(() => {
    setH(document.getElementById("tablex").offsetHeight)
    setW(document.getElementById("tablex").offsetWidth)
  }, 3000);

  h-=10
  w -= 20

  
  const size = { h, w };

  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <h2 className="text-lg font-bold text-navy-700 dark:text-white">
          {coin} Trade Chart
        </h2>
        {/* <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button> */}
      </div>

      <div className="md:mt-16 lg:mt-0">
        <div
          id="tablex"
          className="h-[250px] w-full xl:h-[350px] py-3"
        >
          {(h > 0 && w > 0) && (<Trade theme="light" size={size} id={id} coin={coin} />)}
        </div>
      </div>
    </Card>
  );
};

export default TradeChart;
