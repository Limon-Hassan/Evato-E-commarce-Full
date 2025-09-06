import React from 'react';
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Container from '../Container';

const Page6 = () => {
  return (
    <>
      <section className="bg-[#dbe2e9]/30 pb-[50px] pt-[60px]">
        <Container>
          <div>
            <div className="bg-white rounded-[8px] p-[30px] ">
              <div className="flex items-center justify-between border-b border-black/20 pb-[30px]">
                <h4 className="text-[30px] font-display leading-1.5 font-bold text-[#2C3C28] ">
                  Recently Added
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
                  modules={[Navigation]}
                  spaceBetween={16}
                  slidesPerView={6}
                  slidesPerGroup={1}
                  loop={true}
                  speed={800}
                  navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                  }}
                >
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                        500g Pack
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          See Details
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>{' '}
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                        500g Pack
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          See Details
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>{' '}
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                        500g Pack
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          See Details
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>{' '}
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                        500g Pack
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          See Details
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>{' '}
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                        500g Pack
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          See Details
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>{' '}
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                        500g Pack
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          See Details
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>{' '}
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                        500g Pack
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          See Details
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>{' '}
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <p className="text-[14px] font-display font-semibold text-black/30 mt-[10px]">
                        500g Pack
                      </p>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          See Details
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="bg-white rounded-[8px] p-[30px] ">
              <div className="flex items-center justify-between border-b border-black/20 pb-[30px]">
                <h4 className="text-[30px] font-display leading-1.5 font-bold text-[#2C3C28] ">
                  Top Rated
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
                  modules={[Navigation]}
                  spaceBetween={16}
                  slidesPerView={6}
                  slidesPerGroup={1}
                  loop={true}
                  speed={800}
                  navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                  }}
                >
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <span className="flex items-center gap-[4px] mt-[10px]">
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <span className="text-[16px] font-display font-normal text-[#6E777D]">
                          (125 Reviews)
                        </span>
                      </span>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <span className="flex items-center gap-[4px] mt-[10px]">
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <span className="text-[16px] font-display font-normal text-[#6E777D]">
                          (125 Reviews)
                        </span>
                      </span>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <span className="flex items-center gap-[4px] mt-[10px]">
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <span className="text-[16px] font-display font-normal text-[#6E777D]">
                          (125 Reviews)
                        </span>
                      </span>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <span className="flex items-center gap-[4px] mt-[10px]">
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <span className="text-[16px] font-display font-normal text-[#6E777D]">
                          (125 Reviews)
                        </span>
                      </span>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <span className="flex items-center gap-[4px] mt-[10px]">
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <span className="text-[16px] font-display font-normal text-[#6E777D]">
                          (125 Reviews)
                        </span>
                      </span>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <span className="flex items-center gap-[4px] mt-[10px]">
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <span className="text-[16px] font-display font-normal text-[#6E777D]">
                          (125 Reviews)
                        </span>
                      </span>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <span className="flex items-center gap-[4px] mt-[10px]">
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <span className="text-[16px] font-display font-normal text-[#6E777D]">
                          (125 Reviews)
                        </span>
                      </span>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="p-[15px] w-[250px] h-[405px] bg-[#F5F6F7] rounded-[6px]">
                      <div className=" bg-white w-[220px] h-[190px] rounded-[6px]">
                        <img
                          className="w-[100%] h-auto"
                          src="16.jpg"
                          alt="jpg"
                        />
                      </div>
                      <h4 className="text-[16px] font-display font-bold  hover:text-[#629D23] mt-[10px] transition-all ease-in-out duration-300 w-[220px] cursor-pointer ">
                        Details Profitable business makes your profit
                      </h4>
                      <span className="flex items-center gap-[4px] mt-[10px]">
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <i class="fa-solid fa-star text-[14px] text-yellow-500"></i>
                        <span className="text-[16px] font-display font-normal text-[#6E777D]">
                          (125 Reviews)
                        </span>
                      </span>
                      <div className="flex items-center gap-1.5 mt-1 mb-[10px]">
                        <h3 className="text-[20px] font-display font-bold text-[#DC2626]">
                          $29.00
                        </h3>
                        <h3 className="line-through text-[18px] font-display font-semibold text-black/30">
                          $36.00
                        </h3>
                      </div>
                      <div>
                        <button className="text-[18px] font-display font-semibold text-[#629D23] border border-[#629D23] py-[7px] px-3 rounded-[6px] hover:bg-[#629D23] hover:text-white transition-all ease-in-out duration-300 cursor-pointer">
                          ADD TO CART
                        </button>
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

export default Page6;
