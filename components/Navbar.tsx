import React from 'react';
import Image from 'next/image';
import { logo } from '../public/assets/images/index';
import { logohitam } from '../public/assets/images/index';
import '../styles/globals.css';

const Navbar = () => {
  return (
    <div className="w-full text-Black">
      <div className="w-full bg-BaseLightBlue">
        <div className="max-w-16 mx-auto h-20 px-4 flex items-center gap-2">
          <div className="navBarHover">
            <Image src={logohitam} className="w-40" alt="logo" />
          </div>

          <div className="navBarHover">
            <div className="w-4 grid grid-cols-2 gap-[2px]">
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
            </div>
            <p className="text-black">About</p>
          </div>

          <div className="navBarHover">
            <div className="w-4 grid grid-cols-2 gap-[2px]">
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
            </div>
            <p className="text-black">Competition</p>
          </div>

          <div className="navBarHover">
            <div className="w-4 grid grid-cols-2 gap-[2px]">
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
            </div>
            <p className="text-black">Price</p>
          </div>

          <button className="buttonHover">
            <div></div>
            <p className="text-black items-center ">Login</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
