import React from 'react';
import Container from '../Container';
import Page4 from './Page4';

const Page3 = () => {
  return (
    <>
      <section className="bg-[#dbe2e9]/30 pt-[60px]">
        <Container>
          <div className="bg-white rounded-[8px] pt-[30px] p-[15px]  border border-[#e2e2e2]">
            <div className="flex items-center justify-between pb-[30px] border-b border-[#e2e2e2]">
              <h2 className="text-[30px] font-display font-bold leading-1.5 text-[#2C3C28]">
                Weekly Best Selling Groceries
              </h2>
              <div className="flex items-center gap-4">
                <button className="text-[16px] font-display font-semibold text-[#FFF] py-[8px] px-[27px] rounded-[100px]   bg-[#629D23]">
                  Frozen Foods
                </button>
                <button className="text-[16px] font-display font-semibold text-[#000] py-[8px] px-[27px] rounded-[100px] transition-all ease-in-out duration-300 hover:text-white hover:bg-[#629D23] bg-white">
                  Diet Foods
                </button>
                <button className="text-[16px] font-display font-semibold text-[#000] py-[8px] px-[27px] rounded-[100px] transition-all ease-in-out duration-300 hover:text-white hover:bg-[#629D23] bg-white">
                  Healthy Foods
                </button>
                <button className="text-[16px] font-display font-semibold text-[#000] py-[8px] px-[27px] rounded-[100px] transition-all ease-in-out duration-300 hover:text-white hover:bg-[#629D23] bg-white">
                  Vitamin Items
                </button>
              </div>
            </div>
            <div className="flex flex-wrap justify-evenly items-center gap-[24px] mt-[50px] mb-[40px]">
              <div className=" p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] ">
                <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                    src="16.jpg"
                    alt="jpg"
                  />
                  <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                    <div
                      className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center
                      [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,0_63%)]"
                    >
                      25% <br></br>Off
                    </div>
                  </div>
                </div>
                <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                  Details Profitable business makes your profit
                </h4>
                <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                  500g Pack
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                    $29.00
                  </h3>
                  <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                    $36.00
                  </h3>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                    <div className="mr-[12px]">
                      <h5 className="text-[14px] font-display font-bold">1</h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                        <i class="fa-solid fa-plus-large"></i>
                      </button>
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                      ADD
                      <span>
                        <i class="fa-light fa-cart-shopping"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] ">
                <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                    src="16.jpg"
                    alt="jpg"
                  />
                  <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                    <div
                      className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center
                      [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,0_63%)]"
                    >
                      25% <br></br>Off
                    </div>
                  </div>
                </div>
                <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                  Details Profitable business makes your profit
                </h4>
                <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                  500g Pack
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                    $29.00
                  </h3>
                  <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                    $36.00
                  </h3>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                    <div className="mr-[12px]">
                      <h5 className="text-[14px] font-display font-bold">1</h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                        <i class="fa-solid fa-plus-large"></i>
                      </button>
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                      ADD
                      <span>
                        <i class="fa-light fa-cart-shopping"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] ">
                <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                    src="16.jpg"
                    alt="jpg"
                  />
                  <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                    <div
                      className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center
                      [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,0_63%)]"
                    >
                      25% <br></br>Off
                    </div>
                  </div>
                </div>
                <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                  Details Profitable business makes your profit
                </h4>
                <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                  500g Pack
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                    $29.00
                  </h3>
                  <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                    $36.00
                  </h3>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                    <div className="mr-[12px]">
                      <h5 className="text-[14px] font-display font-bold">1</h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                        <i class="fa-solid fa-plus-large"></i>
                      </button>
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                      ADD
                      <span>
                        <i class="fa-light fa-cart-shopping"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] ">
                <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                    src="16.jpg"
                    alt="jpg"
                  />
                  <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                    <div
                      className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center
                      [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,0_63%)]"
                    >
                      25% <br></br>Off
                    </div>
                  </div>
                </div>
                <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                  Details Profitable business makes your profit
                </h4>
                <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                  500g Pack
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                    $29.00
                  </h3>
                  <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                    $36.00
                  </h3>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                    <div className="mr-[12px]">
                      <h5 className="text-[14px] font-display font-bold">1</h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                        <i class="fa-solid fa-plus-large"></i>
                      </button>
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                      ADD
                      <span>
                        <i class="fa-light fa-cart-shopping"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] ">
                <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                    src="16.jpg"
                    alt="jpg"
                  />
                  <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                    <div
                      className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center
                      [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,0_63%)]"
                    >
                      25% <br></br>Off
                    </div>
                  </div>
                </div>
                <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                  Details Profitable business makes your profit
                </h4>
                <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                  500g Pack
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                    $29.00
                  </h3>
                  <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                    $36.00
                  </h3>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                    <div className="mr-[12px]">
                      <h5 className="text-[14px] font-display font-bold">1</h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                        <i class="fa-solid fa-plus-large"></i>
                      </button>
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                      ADD
                      <span>
                        <i class="fa-light fa-cart-shopping"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] ">
                <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                    src="16.jpg"
                    alt="jpg"
                  />
                  <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                    <div
                      className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center
                      [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,0_63%)]"
                    >
                      25% <br></br>Off
                    </div>
                  </div>
                </div>
                <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                  Details Profitable business makes your profit
                </h4>
                <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                  500g Pack
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                    $29.00
                  </h3>
                  <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                    $36.00
                  </h3>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                    <div className="mr-[12px]">
                      <h5 className="text-[14px] font-display font-bold">1</h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                        <i class="fa-solid fa-plus-large"></i>
                      </button>
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                      ADD
                      <span>
                        <i class="fa-light fa-cart-shopping"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] ">
                <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                    src="16.jpg"
                    alt="jpg"
                  />
                  <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                    <div
                      className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center
                      [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,0_63%)]"
                    >
                      25% <br></br>Off
                    </div>
                  </div>
                </div>
                <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                  Details Profitable business makes your profit
                </h4>
                <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                  500g Pack
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                    $29.00
                  </h3>
                  <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                    $36.00
                  </h3>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                    <div className="mr-[12px]">
                      <h5 className="text-[14px] font-display font-bold">1</h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                        <i class="fa-solid fa-plus-large"></i>
                      </button>
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                      ADD
                      <span>
                        <i class="fa-light fa-cart-shopping"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] ">
                <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                    src="16.jpg"
                    alt="jpg"
                  />
                  <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                    <div
                      className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center
                      [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,0_63%)]"
                    >
                      25% <br></br>Off
                    </div>
                  </div>
                </div>
                <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                  Details Profitable business makes your profit
                </h4>
                <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                  500g Pack
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                    $29.00
                  </h3>
                  <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                    $36.00
                  </h3>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                    <div className="mr-[12px]">
                      <h5 className="text-[14px] font-display font-bold">1</h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                        <i class="fa-solid fa-plus-large"></i>
                      </button>
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                      ADD
                      <span>
                        <i class="fa-light fa-cart-shopping"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] ">
                <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                    src="16.jpg"
                    alt="jpg"
                  />
                  <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                    <div
                      className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center
                      [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,0_63%)]"
                    >
                      25% <br></br>Off
                    </div>
                  </div>
                </div>
                <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                  Details Profitable business makes your profit
                </h4>
                <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                  500g Pack
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                    $29.00
                  </h3>
                  <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                    $36.00
                  </h3>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                    <div className="mr-[12px]">
                      <h5 className="text-[14px] font-display font-bold">1</h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                        <i class="fa-solid fa-plus-large"></i>
                      </button>
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                      ADD
                      <span>
                        <i class="fa-light fa-cart-shopping"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] ">
                <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                    src="16.jpg"
                    alt="jpg"
                  />
                  <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                    <div
                      className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center
                      [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,0_63%)]"
                    >
                      25% <br></br>Off
                    </div>
                  </div>
                </div>
                <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                  Details Profitable business makes your profit
                </h4>
                <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                  500g Pack
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                    $29.00
                  </h3>
                  <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                    $36.00
                  </h3>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                    <div className="mr-[12px]">
                      <h5 className="text-[14px] font-display font-bold">1</h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                        <i class="fa-solid fa-plus-large"></i>
                      </button>
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                      ADD
                      <span>
                        <i class="fa-light fa-cart-shopping"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] ">
                <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                    src="16.jpg"
                    alt="jpg"
                  />
                  <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                    <div
                      className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center
                      [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,0_63%)]"
                    >
                      25% <br></br>Off
                    </div>
                  </div>
                </div>
                <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                  Details Profitable business makes your profit
                </h4>
                <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                  500g Pack
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                    $29.00
                  </h3>
                  <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                    $36.00
                  </h3>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                    <div className="mr-[12px]">
                      <h5 className="text-[14px] font-display font-bold">1</h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                        <i class="fa-solid fa-plus-large"></i>
                      </button>
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                      ADD
                      <span>
                        <i class="fa-light fa-cart-shopping"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] ">
                <div className=" relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden">
                  <img
                    className="w-[100%] h-auto hover:scale-120 ease-in-out duration-300  cursor-pointer"
                    src="16.jpg"
                    alt="jpg"
                  />
                  <div className="Bedge absolute top-0 left-[40px]  w-[35px] ">
                    <div
                      className="bg-yellow-400 text-green-900 font-display font-bold text-center text-[12px] h-[55px] flex items-center justify-center
                      [clip-path:polygon(0%_0%,100%_0%,100%_61%,100%_100%,50%_80%,0_100%,0_63%)]"
                    >
                      25% <br></br>Off
                    </div>
                  </div>
                </div>
                <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                  Details Profitable business makes your profit
                </h4>
                <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                  500g Pack
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                    $29.00
                  </h3>
                  <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                    $36.00
                  </h3>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
                    <div className="mr-[12px]">
                      <h5 className="text-[14px] font-display font-bold">1</h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-green-500">
                        <i class="fa-solid fa-plus-large"></i>
                      </button>
                      <button className="transition-all ease-in-out duration-300  text-[12px] font-display font-bold text-black bg-white border border-[#e2e2e2] cursor-pointer py-1  flex items-center justify-center px-2.5 hover:text-[#FFF] hover:bg-red-500">
                        <i class="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div>
                    <button className="text-[18px] font-display font-bold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300">
                      ADD
                      <span>
                        <i class="fa-light fa-cart-shopping"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page3;
