import React from 'react';
import Link from 'next/link';

const HomeHead = () => {
  return (
    <div className="p-12">
      <div className="flex justify-between items-center font-monts">
        <h3 className="text-[#3A3A3A] font-bold  text-xl ">
          <span>Welcome back </span>
          <span>michael,</span>
        </h3>
        <div className="flex items-center gap-4">
          <img src="/profile.svg" alt="avatar" />
          <Link href="/admin/addVehicle" className="text-white ">
            <button className="bg-[#ED7C00] font-bold flex gap-2 items-center rounded-md px-4 py-2">
              <span className='uppercase'>buy ticket</span>
              <img src="/archive.svg" alt="" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeHead;
