// import Card from "components/card";
import { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import Card from "./Card";
import CardMenu from "./CardMenu";
import { Link } from "react-router-dom";

const Tables = ({ show=!0, title = "Latest Transactions", columnsData, tableData }) => {
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 5;

  return (
    <Card
      extra={"lg:col-span-2 order-last lg:-order-last w-full pb-10 p-4 h-full"}
    >
      {show && (
        <header className="relative flex items-center justify-between">
          <div className="text-xl font-bold text-navy-700">
            {title}
          </div>
          {/* <CardMenu /> */}
        </header>
      )}

      <div className="mt-8 overflow-x-scroll  ">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-14 pb-[10px] text-start dark:!border-navy-700"
                  >
                    <div className="flex w-full justify-between pr-10 text-xs tracking-wide text-gray-700">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data;
                    if (cell.column.Header === "TX_ID") {
                      data = (
                        <Link to={`/dashboard/transaction/${cell.value}`}>
                        <p className="text-sm font-bold text-navy-700 hover:underline ">
                          {cell.value}
                        </p>
                        </Link>
                      );
                    } else if (cell.column.Header === "PLAN") {
                      data = (
                        <p className="mr-[10px] text-sm font-bold text-navy-700">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "TYPE") {
                      data = (
                        <p className="text-sm font-bold text-navy-700">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "AMOUNT") {
                      data = (
                        <p className="text-sm font-bold text-navy-700">
                          ${cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "ROI") {
                      data = (
                        <p className="text-sm font-bold text-navy-700">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "PAYMENT") {
                      data = (
                        <p className="text-sm font-bold text-navy-700">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "CREATED") {
                      data = (
                        <p className="text-sm font-bold text-navy-700">
                          {cell.value}
                        </p>
                      );
                    } else if (cell.column.Header === "STATUS") {
                      data = (
                        <p className={`text-sm font-bold ${!!cell.value==='unfunded'&&'bg-red-500 text-red-700'} ${!!cell.value==='funded'&&'bg-green-500 text-green-700'}`}>
                          {cell.value}
                        </p>
                      );
                    }
                    return (
                      <td
                        className="pt-[14px] pb-[20px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={index}
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Tables;
