// import {
//   MdArrowDropUp,
//   MdOutlineCalendarToday,
//   MdBarChart,
// } from "react-icons/md";
// import Card from "../atom/Card";
// import LineChart from "../molecules/LineChart";
// import { getStatus } from "../../features/users";
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect, useState } from 'react'

// const TotalSpent = () => {
//   const dispatch = useDispatch();
//   const { status, loading, user } = useSelector((state) => state.user);
//   const [ch] = useState(!1)

//   useEffect(() => {
//     dispatch(getStatus());
//   }, [ch]);

//   const lineChartDataTotalSpent = [
//     {
//       name: "Earning",
//       data: status.invested,
//       color: "#4318FF",
//     },
//     {
//       name: "Deposit",
//       data: status.deposit,
//       color: "#6AD2FF",
//     },
//   ];

//   const lineChartOptionsTotalSpent = {
//     legend: {
//       show: !!0,
//     },

//     theme: {
//       mode: "light",
//     },
//     chart: {
//       type: "line",

//       toolbar: {
//         show: !!0,
//       },
//     },

//     dataLabels: {
//       enabled: !!0,
//     },
//     stroke: {
//       curve: "smooth",
//     },

//     tooltip: {
//       style: {
//         fontSize: "12px",
//         fontFamily: undefined,
//         backgroundColor: "#000000",
//       },
//       theme: "dark",
//       x: {
//         format: "dd/MM/yy HH:mm",
//       },
//     },
//     grid: {
//       show: !!0,
//     },
//     xaxis: {
//       axisBorder: {
//         show: !!0,
//       },
//       axisTicks: {
//         show: !!0,
//       },
//       labels: {
//         style: {
//           colors: "#A3AED0",
//           fontSize: "12px",
//           fontWeight: "500",
//         },
//       },
//       type: "text",
//       range: undefined,
//       categories: status.months,
//     },

//     yaxis: {
//       show: !!0,
//     },
//   };
//   return (
//     <Card extra="!p-[20px] text-center">
//       <div className="flex justify-between">
//         <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
//           <MdOutlineCalendarToday />
//           <span className="text-sm font-medium text-gray-600">This month</span>
//         </button>
//         <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
//           <MdBarChart className="h-6 w-6" />
//         </button>
//       </div>

//       <div className="flex h-full w-full flex-col justify-between lg:flex-row lg:flex-nowrap 2xl:overflow-hidden">
//         <div className="flex flew-row lg:flex-col justify-between lg:justify-start">
//           <div className="flex flex-row gap-2 lg:flex-col items-center lg:gap-0">
//             <p className="mt-0 lg:mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
//               ${status.invested_sum}
//             </p>
//             <div className="flex flex-col items-start">
//               <p className="mt-2 text-sm text-gray-600">Total Earnings</p>
//               <div className="flex flex-row items-center justify-center">
//                 {/* <MdArrowDropUp className="font-medium text-green-500" /> */}
//                 {/* <p className="text-sm font-bold text-green-500"> +2.45% </p> */}
//                 <p className="text-sm font-bold text-gray-800 text"> 0% </p>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-row gap-2 lg:flex-col items-center lg:gap-0">
//             <p className="mt-0 lg:mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
//               ${status.deposit_sum}
//             </p>
//             <div className="flex flex-col items-start">
//               <p className="mt-2 text-sm text-gray-600">Total Deposit</p>
//               <div className="flex flex-row items-center justify-center">
//                 {/* <MdArrowDropUp className="font-medium text-green-500" /> */}
//                 {/* <p className="text-sm font-bold text-green-500"> +2.45% </p> */}
//                 <p className="text-sm font-bold text-gray-800"> 0% </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="h-[250px] lg:h-full w-full">
//           <LineChart
//             options={lineChartOptionsTotalSpent}
//             series={lineChartDataTotalSpent}
//           />
//         </div>
//       </div>
//     </Card>
//   );
// };

// export default TotalSpent;
