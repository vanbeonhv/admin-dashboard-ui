import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from "../components";
import { earningData } from "../data/dummy";

export const StatIcon = ({ text }) => {
  <div style={{ color: { text } }}></div>;
};

const Ecommerce = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  return (
    <div>
      <div className="">
        <img />
        <Button name="Download" color="white" bgcolor={"blue"} />
      </div>
      <div className="flex flex-wrap justify-between">
        {earningData.map((item) => (
          <div className="w-400 p-5" key={item.title}>
            <div>
              <div
                className="text-3xl p-4 rounded-full inline-block"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
              >
                {item.icon}
              </div>
              <p>
                {item.amount}
                <span className={item.pcColor}> {item.percentage}</span>
              </p>
            </div>
            <p className="text-gray-400 mt-1">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
