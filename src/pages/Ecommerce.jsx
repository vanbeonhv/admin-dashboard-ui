import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Button, SparkLine, Stacked } from "../components";
import { earningData, SparklineAreaData, dropdownData } from "../data/dummy";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { GoPrimitiveDot } from "react-icons/go";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex justify-around items-center flex-wrap">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-60 rounded-xl w-full  2xl:w-640 xl:w-full p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-right">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 font-bold">Total Users</p>
              <p className="text-2xl">17,239</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              name="Download"
              color="white"
              bgcolor="blue"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex m-3 gap-1 flex-wrap justify-between lg:justify-around flex-grow items-center">
          {earningData.map((item) => (
            <div
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9"
              key={item.title}
            >
              <button
                type="button"
                className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl ">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expensive</span>
              </p>
              <p className="flex items-center text-green-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$10,000</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer text-xs rounded-full text-white bg-green-400 ml-3">
                    25%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budge</p>
                <div className="mt-8">
                  <p>
                    <span className="text-3xl font-semibold">$5,000</span>
                  </p>
                  <p className="text-gray-500 mt-1">Expense</p>
                </div>
                <div className="mt-5">
                  <SparkLine
                    currentColor="blue"
                    id="line-sparkLine"
                    type="Line"
                    height="80px"
                    width="250px"
                    data={SparklineAreaData}
                    color="blue"
                  />
                </div>
                <div className="mt-10">
                  <Button
                    color="white"
                    bgcolor="blue"
                    name="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>
            </div>
            <div>
              <Stacked currentMode="blue" width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
