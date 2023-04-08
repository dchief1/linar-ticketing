import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SidebarItem = ({ item, isOpen }) => {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <Link href={item.path}>
      <div className="block">
        <div
          onClick={toggleClass}
          className={`
            flex  items-center  font-normal px-6 py-2 rounded-r-full 
            ${isOpen ? 'bg-[#ED9534]' : 'bg-transparent, rounded-none'}
            
            `}
        >
          <span
            className={`
            flex gap-2  items-center  text-xl text-white
            ${router.pathname == item.path ? 'bg-[ED7C00]  ' : 'bg-[ED9534]'}
            `}
          >
            {item.icon && (
              <div className={isOpen ? 'text-white' : '  text-[#ED7C00]'}>
                {item.icon}
              </div>
            )}
            {isOpen && <div>{item.title}</div>}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SidebarItem;
