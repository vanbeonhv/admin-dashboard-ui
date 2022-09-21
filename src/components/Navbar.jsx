"use strict";

import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative rounded-full hover:bg-light-gray text-xl p-3"
    >
      {icon}
      <span
        style={{ background: dotColor }}
        className="absolute right-2 top-2 h-2 w-2"
      ></span>
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick } =
    useStateContext();

  return (
    <div className="flex justify-between relative p-2 mx-6">
      <NavButton title="menu" color="blue" icon={<AiOutlineMenu />}></NavButton>
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
          dotColor="red"
        ></NavButton>
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color="blue"
          icon={<BsChatLeft />}
          dotColor="red"
        ></NavButton>
        <NavButton
          title="Notification"
          customFunc={() => handleClick("notification")}
          color="blue"
          icon={<RiNotification2Line />}
          dotColor="red"
        ></NavButton>
        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
            <img className="rounded-full w-8 h-8 " src={avatar} />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
