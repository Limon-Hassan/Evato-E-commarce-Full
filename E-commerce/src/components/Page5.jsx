import React from 'react';
import Container from '../Container';
import TimeForSale from './TimeForSale';
import Page6 from './Page6';

const Page5 = () => {
  return (
    <>
      <section className="bg-[#dbe2e9]/30 pb-[50px] pt-[60px]">
        <Container>
          <div className="bg-white">
            <div className="flex items-center justify-between bg-[#629D23] rounded-t-lg py-[20px] px-[30px]">
              <h3 className="text-[24px] font-display font-semibold leading-1.5 text-[#fff]">
                Hand Picked Products for 10% Offer
              </h3>

              <TimeForSale deathline={'2025-10-28T12:00:00'} />
            </div>
            <div className="bg-white flex items-center flex-wrap gap-[30px] p-[30px]">
              <div className="flex group items-center border border-[#e2e2e2] bg-[#FFFFFF] p-[15px] rounded-[6px] gap-[18px] cursor-pointer">
                <div className=" w-[230px] h-[220px] flex items-center justify-center border border-[#eaeaea] rounded-[6px] ">
                  <img
                    className="group-hover:scale-110 ease-in-out duration-300"
                    src="2208.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <span className="flex items-center gap-1.5">
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <span className="text-[16px] font-display font-normal text-[#6E777D]">
                      (125 Reviews)
                    </span>
                  </span>

                  <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[235px] cursor-pointer ">
                    Pastine Mellin Filid Angelo 100% Di Grano Tenero
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
                </div>
              </div>
              <div className="flex group items-center border border-[#e2e2e2] bg-[#FFFFFF] p-[15px] rounded-[6px] gap-[18px] cursor-pointer">
                <div className=" w-[230px] h-[220px] flex items-center justify-center border border-[#eaeaea] rounded-[6px] ">
                  <img
                    className="group-hover:scale-110 ease-in-out duration-300"
                    src="0001.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <span className="flex items-center gap-1.5">
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <span className="text-[16px] font-display font-normal text-[#6E777D]">
                      (125 Reviews)
                    </span>
                  </span>

                  <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[235px] cursor-pointer ">
                    Pastine Mellin Filid Angelo 100% Di Grano Tenero
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
                </div>
              </div>
              <div className="flex group items-center border border-[#e2e2e2] bg-[#FFFFFF] p-[15px] rounded-[6px] gap-[18px] cursor-pointer">
                <div className=" w-[230px] h-[220px] flex items-center justify-center border border-[#eaeaea] rounded-[6px] ">
                  <img
                    className="group-hover:scale-110 ease-in-out duration-300"
                    src="22206.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <span className="flex items-center gap-1.5">
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <span className="text-[16px] font-display font-normal text-[#6E777D]">
                      (125 Reviews)
                    </span>
                  </span>

                  <h4 className="text-[16px] font-display font-bold mt-[10px] hover:text-[#629D23] transition-all ease-in-out duration-300 w-[235px] cursor-pointer ">
                    Pastine Mellin Filid Angelo 100% Di Grano Tenero
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
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page5;
