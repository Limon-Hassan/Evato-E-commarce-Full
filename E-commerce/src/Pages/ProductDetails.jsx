import React, { useState } from 'react';
import Container from '../Container';
import { Navigation, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import ProductDetalisPart1 from './ProductDetalisPart1';
import AddictionalDetail from './AddictionalDetail';
import CustomerReviews from './CustomerReviews';

const ProductDetails = () => {
  let [buttonActive, setButtonActive] = useState({
    a: false,
    b: false,
    c: false,
  });
  let HandleActive = type => {
    setButtonActive({
      a: false,
      b: false,
      c: false,
      [type]: true,
    });
  };
  return (
    <>
      <section className="py-[100px] bg-[#F3F4F6]">
        <Container>
          <div className="flex gap-[50px] bg-white rounded-[6px] p-[60px]">
            <div className="image  ">
              <div className="w-[480px] h-auto flex justify-center items-center mx-auto rounded-[6px] mb-[30px] border-2 border-[#f1f1f1]">
                <img className="w-full h-full" src="16.jpg" alt="product" />
              </div>
              <div className="flex items-center gap-6">
                <div className="cursor-pointer  w-[100px] p-[20px] border border-[#f1f1f1] rounded-[6px]">
                  <img className="w-full h-auto" src="01.jpg" alt="" />
                </div>
                <div className="cursor-pointer  w-[100px] p-[20px] border border-[#f1f1f1] rounded-[6px]">
                  <img className="w-full h-auto" src="01.jpg" alt="" />
                </div>
                <div className="cursor-pointer  w-[100px] p-[20px] border border-[#f1f1f1] rounded-[6px]">
                  <img className="w-full h-auto" src="01.jpg" alt="" />
                </div>
                <div className="cursor-pointer  w-[100px] p-[20px] border border-[#f1f1f1] rounded-[6px]">
                  <img className="w-full h-auto" src="01.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="text_part">
              <span className="flex items-center gap-1.5 mb-[20px]">
                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
                <span className="text-[16px] font-display font-normal text-[#6E777D]">
                  (125 Reviews)
                </span>
              </span>
              <h2 className="text-[26px] font-display font-bold leading-6 text-[#2C3C28] mb-[20px]">
                Details Profitable business makes your profit
              </h2>
              <p className="text-[16px] font-display font-normal text-[#6E777D] leading-7 mb-[30px] max-w-[540px]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
                impedit minima rerum repellat minus neque!
              </p>
              <h3 className="text-[36px] font-display font-bold text-[#DC2626] mb-[15px]">
                $200
              </h3>
              <button className="text-[16px] font-display font-bold text-white bg-[#629D23] px-[48px] py-[12px] rounded-[6px] cursor-pointer mb-[20px]">
                Add To Cart
                <span className="ml-[10px] ">
                  <i class="fa-light fa-cart-shopping"></i>
                </span>
              </button>
              <div className="flex items-center gap-1.5">
                <p className="text-[16px] font-bold text-[#6E777D] font-display mb-1.5">
                  Category :
                </p>
                <p>T-Shirts, Tops, Mens</p>
              </div>
              <div className="flex items-center gap-1.5">
                <p className="text-[16px] font-bold text-[#6E777D] font-display mb-1.5">
                  Tags :
                </p>
                <p>fashion, t-shirts, Men</p>
              </div>
              <div className="flex items-center gap-1.5">
                <p className="text-[16px] font-bold text-[#6E777D] font-display mb-1.5">
                  Type :
                </p>
                <p>Orginal</p>
              </div>
            </div>
          </div>
          <div className="bottom_part bg-white rounded-[6px] p-[60px]">
            <div className="flex items-center gap-4 border-b border-[#dee2e6] pb-[30px]">
              <button
                onClick={() => HandleActive('a')}
                className={`text-[16px] font-display font-bold ${
                  buttonActive.a
                    ? 'bg-[#629D23] text-white'
                    : 'bg-none text-[#495057]'
                } border border-[#dee2e6] hover:bg-[#629D23] transition-all ease-in-out duration-300 rounded-[6px] py-[13px] px-[26px] cursor-pointer hover:text-white`}
              >
                Product Details
              </button>
              <button
                onClick={() => HandleActive('b')}
                className={`text-[16px] font-display font-bold ${
                  buttonActive.b
                    ? 'bg-[#629D23] text-white'
                    : 'bg-none text-[#495057]'
                } border border-[#dee2e6] hover:bg-[#629D23] transition-all ease-in-out duration-300 rounded-[6px] py-[13px] px-[26px] cursor-pointer  hover:text-white`}
              >
                Additional Information
              </button>
              <button
                onClick={() => HandleActive('c')}
                className={`text-[16px] font-display font-bold ${
                  buttonActive.c
                    ? 'bg-[#629D23] text-white'
                    : 'bg-none text-[#495057]'
                } border border-[#dee2e6] hover:bg-[#629D23] transition-all ease-in-out duration-300 rounded-[6px] py-[13px] px-[26px] cursor-pointer hover:text-white`}
              >
                Customer Reviews (01)
              </button>
            </div>
            <div className="mt-[20px] relative">
              {buttonActive.a && <ProductDetalisPart1 />}
              {buttonActive.b && <AddictionalDetail />}
              {buttonActive.c && <CustomerReviews />}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-[8px] p-[30px] ">
              <div className="flex items-center justify-between border-b border-black/20 pb-[30px]">
                <h4 className="text-[30px] font-display leading-1.5 font-bold text-[#2C3C28] ">
                  Related Product
                </h4>
                <span className="flex items-center gap-3">
                  <button className="swiper-button-prev-custom bg-[#fff] hover:bg-[#629D23] w-[33px] h-[33px] border border-[#629D23] hover:text-white rounded-[8px] flex justify-center items-center ease-in-out duration-300 cursor-pointer">
                    <i class="fa-regular fa-arrow-left-from-arc"></i>
                  </button>
                  <button className="swiper-button-next-custom  bg-[#fff] hover:bg-[#629D23] w-[33px] h-[33px] border border-[#629D23] rounded-[8px]  hover:text-white flex justify-center items-center ease-in-out duration-300 cursor-pointer">
                    <i class="fa-regular fa-arrow-right-from-arc"></i>
                  </button>
                </span>
              </div>
              <div className="mt-[50px]">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={6}
                  slidesPerView={6}
                  slidesPerGroup={1}
                  loop={true}
                  speed={800}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                  }}
                >
                  <SwiperSlide>
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
                            <h5 className="text-[14px] font-display font-bold">
                              1
                            </h5>
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
                  </SwiperSlide>
                  <SwiperSlide>
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
                            <h5 className="text-[14px] font-display font-bold">
                              1
                            </h5>
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
                  </SwiperSlide>
                  <SwiperSlide>
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
                            <h5 className="text-[14px] font-display font-bold">
                              1
                            </h5>
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
                  </SwiperSlide>
                  <SwiperSlide>
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
                            <h5 className="text-[14px] font-display font-bold">
                              1
                            </h5>
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
                  </SwiperSlide>
                  <SwiperSlide>
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
                            <h5 className="text-[14px] font-display font-bold">
                              1
                            </h5>
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
                  </SwiperSlide>
                  <SwiperSlide>
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
                            <h5 className="text-[14px] font-display font-bold">
                              1
                            </h5>
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
                  </SwiperSlide>
                  <SwiperSlide>
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
                            <h5 className="text-[14px] font-display font-bold">
                              1
                            </h5>
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
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
