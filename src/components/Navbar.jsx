'use strict'

import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi' 
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification2Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { avatar } from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.';
//Can import context provider nua nhung chua create

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter"> 
    <button type='button' onClick={customFunc} style={{ color }} className='relative rounded-full hover:bg-light-gray text-xl p-3'>
      {icon}
    </button>
    <span style={{background: dotColor}} 
      className='absolute right-2 top-2 h-2 w-2'>

    </span>
  </TooltipComponent>
)

const Navbar = () => {
  // const { activeMenu, setActiveMenu } = useStateContext();
  const handleClick = () => {};
  return (
    <div className='flex justify-between relative p-2 mx-6'>
      <NavButton 
      title = 'menu' 
      color='blue' 
      icon={<AiOutlineMenu/>}>
      </NavButton>
      <div className='flex'>
         <NavButton 
          title = 'Cart' 
          customFunc={() => handleClick('cart')}
          color='blue' 
          icon={<FiShoppingCart/>}>
        </NavButton>
        <NavButton 
          title = 'Chat' 
          customFunc={() => handleClick('chat')}
          color='blue' 
          icon={<BsChatLeft/>}>
        </NavButton>
        <NavButton 
          title = 'Notification' 
          customFunc={() => handleClick('notification')}
          color='blue' 
          icon={<RiNotification2Line/>}>
        </NavButton>        
      </div>
    </div>
  )
}

export default Navbar