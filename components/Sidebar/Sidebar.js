import menu from '@/contents/sidebarData';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import SidebarItem from './SidebarItem';
import LogoutModel from '../Models/LogoutModel';
import { BiLogOut } from 'react-icons/bi';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  // logout model
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="">
      <div
        className="
          fixed h-screen py-12  bg-white shadow-lg shadow-[#ED9534]
          flex-col gap-8 z-20 md:flex hidden w-full px-6
          "
        style={{
          width: isOpen ? '230px' : '60px',
          alignItems: isOpen ? '' : 'center',
        }}
      >
        <div className="flex items-center justify-between  ">
          <Link href="/">
            <img
              src="/logo.png"
              className={`cursor-pointer ${isOpen ? 'block' : 'hidden'} `}
              alt=""
            />
          </Link>
          <div
            className={`
            cursor-pointer transition-all duration-300 text-[#ED7C00]
            ${isOpen ? 'ml-[40px]' : 'ml-[0px]'}
            `}
          >
            <HiMenuAlt3 onClick={toggle} />
          </div>
        </div>
        {menu.map((item, index) => {
          return <SidebarItem key={index} item={item} isOpen={isOpen} />;
        })}
        <button
          className={`
        flex  items-center  font-normal py-2 rounded-r-full text-white gap-2 px-6
        ${isOpen ? 'bg-[#ED9534]' : 'bg-transparent, rounded-none'}
        
        `}
          onClick={() => setShowModel(true)}
        >
          <BiLogOut
            className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-[#ED7C00]'} `}
          />
          <span className={`text-xl ${isOpen ? 'flex' : 'hidden'}`}>
            Logout
          </span>
        </button>
      </div>
      <main
        className={`
        w-full shrink-0 overflow-auto bg-[#fff6eb]
        ${isOpen ? 'md:pl-[230px]' : 'md:pl-[60px]'}
        `}
        style={{ transition: 'all .5s' }}
      >
        {children}
      </main>
      <LogoutModel visible={showModel} onClose={() => setShowModel(false)}>
        <div className="flex flex-col items-center gap-4">
          <span className="text-[#19202C] font-bold text-3xl">
            {' '}
            Logout Confirmation{' '}
          </span>
          <p className="text-[#676869] font-normal text-2xl ">
            Are you sure you want to logout from your account?
          </p>
        </div>
      </LogoutModel>
    </div>
  );
};

export default Sidebar;
