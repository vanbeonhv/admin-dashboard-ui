import React from 'react';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel} from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';

const Sidebar = () => {
  const activeMenu = true;

  return (
    <div className='ml-3 h-screen bg-slate-300'>
      {activeMenu && (<React.Fragment>
        <div className='flex justify-start items-center'>
          <links to='/' onclick={() => {}} className='items-center flex m-4 ml-3'>
            <SiShopware className='text-xl'/>
            <span className='pl-3'>Shoppy</span>
          </links>
          </div> 
          </React.Fragment>)}
      </div>
  )
}

export default Sidebar