import React from 'react';
import Container from '../Container';

const TrackOrder = () => {
  return (
    <>
      <section>
        <Container>
          <div>
            <h3 className="text-[30px] font-bold font-display leading-0.5 text-[#2C3C28] mb-[40px]">
              Orders tracking
            </h3>
            <p className="text-[16px] font-normal font-display text-[#6E777D] leading-3 mb-[40px]">
              To keep up with the status of your order, kindly input your
              OrderID in the designated box below and click the "Track" button.
            </p>
            <div className="w-[930px]">
              <label className="text-[16px] font-medium font-display text-[#6E777D] ">
                Order Id
              </label>
              <input
                className="w-full h-[60px] rounded-[4px] font-medium font-display text-[16px] text-[#6E777D] placeholder:text-[16px] placeholder:font-display placeholder:font-medium placeholder:text-[#6E777D] transition duration-300 ease-in-out focus:border-[#629D23] border border-[#ececec] outline-none px-[20px] mt-[10px] mb-[30px]"
                placeholder="Found in your order confirmation email"
                type="text"
              />
            </div>
            <div className="w-[930px]">
              <label className="text-[16px] font-medium font-display text-[#6E777D] ">
                Billing Email
              </label>
              <input
                className="w-full h-[60px] rounded-[4px] font-medium font-display text-[16px] text-[#6E777D] placeholder:text-[16px] placeholder:font-display placeholder:font-medium placeholder:text-[#6E777D] transition duration-300 ease-in-out focus:border-[#629D23] border border-[#ececec] outline-none px-[20px] mt-[10px]"
                placeholder="Email You use during checkout"
                type="text"
              />

              <button className="text-[16px] font-bold font-display text-[#FFF] bg-[#629D23] py-[12px] px-[24px] rounded-[6px] cursor-pointer mt-[30px]">
                Track
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TrackOrder;
