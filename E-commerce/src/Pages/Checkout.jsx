import React from 'react';
import Container from '../Container';

const Checkout = () => {
  return (
    <>
      <section className="py-[200px] bg-[#F3F4F6]">
        <Container>
          <div>
            <div>
              <h4 className="text-[30px] font-display font-bold leading-[54px] text-[#2C3C28] my-[30px]">
                Billing Details
              </h4>
              <div className="mb-[30px]">
                <label
                  className="text-[16px] font-medium text-[#6E777D] "
                  htmlFor="email"
                >
                  Email Address*
                </label>
                <input
                  className="text-[16px] font-display font-medium text-[#6E777D] bg-transparent border-2 border-[#e8e8e8] h-[50px] outline-none focus:border-[#629D23] transition-all ease-in-out duration-500 mt-[10px] px-[15px] w-full rounded-[6px]"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="mb-[30px]">
                <label
                  className="text-[16px] font-medium text-[#6E777D] "
                  htmlFor="name"
                >
                  Name*
                </label>
                <input
                  className="text-[16px] font-display font-medium text-[#6E777D] bg-transparent border-2 border-[#e8e8e8] h-[50px] outline-none focus:border-[#629D23] transition-all ease-in-out duration-500 mt-[10px] px-[15px] w-full rounded-[6px]"
                  type="name"
                  name="name"
                  id="name"
                />
              </div>
              <div className="mb-[30px]">
                <label
                  className="text-[16px] font-medium text-[#6E777D] "
                  htmlFor="text"
                >
                  Town / City*
                </label>
                <input
                  className="text-[16px] font-display font-medium text-[#6E777D] bg-transparent border-2 border-[#e8e8e8] h-[50px] outline-none focus:border-[#629D23] transition-all ease-in-out duration-500 mt-[10px] px-[15px] w-full rounded-[6px]"
                  type="text"
                  name="text"
                  id="text"
                />
              </div>
              <div className="mb-[30px]">
                <label
                  className="text-[16px] font-medium text-[#6E777D] "
                  htmlFor="phone"
                >
                  Phone*
                </label>
                <input
                  className="text-[16px] font-display font-medium text-[#6E777D] bg-transparent border-2 border-[#e8e8e8] h-[50px] outline-none focus:border-[#629D23] transition-all ease-in-out duration-500 mt-[10px] px-[15px] w-full rounded-[6px]"
                  type="number"
                  name="phone"
                  id="phone"
                />
              </div>
              <div className="mb-[30px]">
                <label
                  className="text-[16px] font-medium text-[#6E777D] "
                  htmlFor="text"
                >
                  Street Address*
                </label>
                <input
                  className="text-[16px] font-display font-medium text-[#6E777D] bg-transparent border-2 border-[#e8e8e8] h-[50px] outline-none focus:border-[#629D23] transition-all ease-in-out duration-500 mt-[10px] px-[15px] w-full rounded-[6px]"
                  type="text"
                  name="text"
                  id="text"
                />
              </div>
            </div>
            <div>
              <h3>Your Order</h3>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Checkout;
