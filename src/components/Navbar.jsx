'use strict'

import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi' 
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification2Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { avatar } from '../data/avatar.jpg'
//Can import context provider nua nhung chua create

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title}>
    <button></button>
  </TooltipComponent>
)

const Navbar = () => {
  return (
    <div className='flex justify-between relative'></div>
  )
}

export default Navbar