import React from 'react';
import Container from '../Container';
import Navber2 from './Navber2';
const Navber = () => {
  return (
    <>
      <nav className="bg-white py-8">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[45px]">
              <a href="#">
                <img src="logo-01.svg" alt="" />
              </a>
              <div className="flex">
                <div className="text-2xl px-[16px] py-[8px]  border border-[#e2e2e2] rounded-l-[5px]">
                  <i class="fa-thin fa-location-dot"></i>
                </div>
                <div className=" border border-[#e2e2e2] rounded-r-[5px] px-[16px] py-[8px]">
                  <p className="text-[12px] font-display text-[#74787C]">
                    Your location
                  </p>
                  <a
                    className="text-[14px] font-display text-[#2C3C28] font-semibold"
                    href="#"
                  >
                    Select Location
                  </a>
                </div>
              </div>
              <div class="relative w-[673px] h-[60px]">
                <input
                  type="search"
                  class="w-full h-full bg-slate-400/20 placeholder:text-slate-400 text-slate-700 placeholder:font-display font-display text-[18px] border border-slate-300 outline-[#629D23] rounded-md pl-3 pr-[115px] py-2 transition duration-300 ease-in-out focus:border-[#629D23]  shadow-sm focus:shadow"
                  placeholder="Search for products, categories or brands"
                />
                <button
                  class="absolute right-1 top-[50%] rounded font-display font-bold bg-[#629D23] py-[8px] px-[24px] border border-transparent text-center text-[16px] text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none hover:bg-slate-700 ease-in-out duration-300 cursor-pointer  disabled:opacity-50 disabled:shadow-none translate-y-[-50%] "
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <button className="text-[18px] font-display font-medium border border-[#e2e2e2] rounded-[6px] bg-white hover:bg-[#2C3C28] transition-all ease-in-out duration-300 py-[12px] px-[28px] text-black hover:text-white  cursor-pointer">
                <span className="mr-[8px]">
                  <i class="fa-light fa-user"></i>
                </span>
                Account
              </button>
              <button className="text-[18px] font-display font-medium border border-[#e2e2e2] rounded-[6px] bg-white hover:bg-[#2C3C28] transition-all ease-in-out duration-300 py-[12px] px-[28px] text-black hover:text-white  cursor-pointer">
                <span className="mr-[8px]">
                  <i class="fa-light fa-heart"></i>
                </span>
                Wishlist
              </button>
              <button className="text-[18px] font-display font-medium border border-[#e2e2e2] rounded-[6px] bg-white hover:bg-[#2C3C28] transition-all ease-in-out duration-300 py-[12px] px-[28px] text-black hover:text-white  cursor-pointer">
                <span className="mr-[8px]">
                  <i class="fa-light fa-cart-shopping"></i>
                </span>
                Cart
              </button>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navber;
