import React from 'react';
import Container from '../Container';

const Page8 = () => {
  return (
    <>
      <section className="bg-[#629D23] pb-[50px] py-[60px]">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[20px]">
              <div className=" w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center">
                <i class="fa-light fa-badge-dollar text-[40px] text-[#629D23]"></i>
              </div>
              <div>
                <h4 className="text-[20px] font-display font-bold text-white leading-1.5 mb-[15px]">
                  Best Prices & Offers
                </h4>
                <p className="text-[16px] font-normal font-display text-[#fff] leading-[23px] w-[305px]">
                  We prepared special discounts you on grocery products.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className=" w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center">
                <i class="fa-light fa-circle-arrow-left  text-[40px] text-[#629D23]"></i>
              </div>
              <div>
                <h4 className="text-[20px] font-display font-bold text-white leading-1.5 mb-[15px]">
                  100% Return Policy
                </h4>
                <p className="text-[16px] font-normal font-display text-[#fff] leading-[23px] w-[305px]">
                  We prepared special discounts you on grocery products.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className=" w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center">
                <img
                  className="w-[50px] text-[#629D23]"
                  src="svgfrom.svg"
                  alt="svgfrom"
                />
              </div>
              <div>
                <h4 className="text-[20px] font-display font-bold text-white leading-1.5 mb-[15px]">
                  Support 24/7
                </h4>
                <p className="text-[16px] font-normal font-display text-[#fff] leading-[23px] w-[305px]">
                  We prepared special discounts you on grocery products.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className=" w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center">
                <i class="fa-light fa-fire text-[40px] text-[#629D23]"></i>
              </div>
              <div>
                <h4 className="text-[20px] font-display font-bold text-white leading-1.5 mb-[15px]">
                  Great Offer Daily Deal
                </h4>
                <p className="text-[16px] font-normal font-display text-[#fff] leading-[23px] w-[305px]">
                  We prepared special discounts you on grocery products.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page8;
