import Text from "../atom/Text";

const Transactions = () => {
  return (
    <>
      <section className="container px-4 mx-auto my-14">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <Text
            type="h2"
            className="max-w-2xl mx-auto text-3xl lg:text-5xl font-semibold tracking-tight text-gray-800"
          >
            Latest Deposits & Withdrawals
          </Text>
          <Text type="p" className="max-w-2xl mt-6 text-center text-gray-500">
            Get live transaction history
          </Text>
        </div>

        <div className="flex flex-col mt-6">
          <div className="mx-2 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="flex flex-col gap-5 lg:flex-row justify-between w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td className="px-4 py-4 text-sm text-center font-bold whitespace-nowrap">
                        <Text
                          type="h2"
                          className="mx-4 text-lg text-center w-full font-semibold text-gray-800"
                        >
                          Latest Deposit
                        </Text>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            Catalog Catalog
                          </h2>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            $4,555
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            2023-03-01 22:55:20
                          </h2>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            Catalog Catalog
                          </h2>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            $4,555
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            2023-03-01 22:55:20
                          </h2>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            Catalog Catalog
                          </h2>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            $4,555
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            2023-03-01 22:55:20
                          </h2>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            Catalog Catalog
                          </h2>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            $4,555
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            2023-03-01 22:55:20
                          </h2>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    <tr>
                      <td className="px-4 py-4 text-sm text-center font-bold whitespace-nowrap">
                        <Text
                          type="h2"
                          className="mx-4 text-lg text-center w-full font-bold text-gray-800"
                        >
                          Latest Withdrawal
                        </Text>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            Catalog
                          </h2>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            $4,555
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            2023-03-01 22:55:20
                          </h2>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            Catalog
                          </h2>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            $4,555
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            2023-03-01 22:55:20
                          </h2>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            Catalog
                          </h2>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            $4,555
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            2023-03-01 22:55:20
                          </h2>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            Catalog
                          </h2>
                        </div>
                      </td>
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            $4,555
                          </h2>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div>
                          <h2 className="font-medium text-gray-800 dark:text-white ">
                            2023-03-01 22:55:20
                          </h2>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transactions;
