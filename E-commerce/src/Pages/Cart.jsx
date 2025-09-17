import React from 'react';
import Container from '../Container';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <section className="bg-[#F3F4F6] py-[100px]">
        <Container>
          <div className="flex gap-[50px]">
            <div className="w-[75%]">
              <div className="bg-[#FFF] border border-[#e2e2e2] p-[40px] rounded-[6px] mb-[20px]">
                <h4 className="text-[16px] font-display font-medium text-[#74787C] leading-6">
                  If you want to get Shipping cost then purchase minimum $5000
                  and get discounts when you're total quntity will be 10
                </h4>
              </div>

              <div className="bg-[#FFF] border border-[#e2e2e2] py-[20px] px-[10px] rounded-[6px] ">
                <div className="flex items-center justify-between py-[15px] px-[20px] border-b border-[#e2e2e2]">
                  <h5 className="text-[16px] font-display font-bold text-[#2C3C28]">
                    Products
                  </h5>
                  <h5 className="text-[16px] font-display font-bold text-[#2C3C28]">
                    Price
                  </h5>
                  <h5 className="text-[16px] font-display font-bold text-[#2C3C28]">
                    Quantity
                  </h5>
                </div>
                <div className="overflow-y-scroll h-[480px] ">
                  <div className="flex items-center gap-[150px]  py-[30px] px-[20px] border-b border-[#e2e2e2]">
                    <div className="flex items-center gap-[30px]">
                      <span className="bg-red-500 w-[40px] h-[40px] rounded-full flex justify-center items-center text-white cursor-pointer">
                        <i class="fa-solid fa-xmark"></i>
                      </span>
                      <img
                        className="max-w-[65px] h-auto"
                        src="01.jpg"
                        alt="product"
                      />
                      <h4 className="text-[16px] font-display font-bold text-[#2C3C28] truncate w-[250px]">
                        Netlyfy business makes your profit Lorem ipsum dolor sit
                        amet.
                      </h4>
                    </div>
                    <div className="flex items-center gap-[400px]">
                      <span className="text-[18px] font-bold text-[#2C3C28] ">
                        $500
                      </span>
                      <div className="flex items-center bg-white p-3 rounded-[4px] gap-3 ">
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
                    </div>
                  </div>
                  <div className="flex items-center gap-[150px] py-[30px] px-[20px] border-b border-[#e2e2e2]">
                    <div className="flex items-center gap-[30px]">
                      <span className="bg-red-500 w-[40px] h-[40px] rounded-full flex justify-center items-center text-white cursor-pointer">
                        <i class="fa-solid fa-xmark"></i>
                      </span>
                      <img
                        className="max-w-[65px] h-auto"
                        src="01.jpg"
                        alt="product"
                      />
                      <h4 className="text-[16px] font-display font-bold text-[#2C3C28] truncate w-[250px]">
                        Netlyfy business makes your profit Lorem ipsum dolor sit
                        amet.
                      </h4>
                    </div>
                    <div className="flex items-center gap-[400px]">
                      <span className="text-[18px] font-bold text-[#2C3C28] ">
                        $500
                      </span>
                      <div className="flex items-center bg-white p-3 rounded-[4px] gap-3 ">
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
                    </div>
                  </div>
                  <div className="flex items-center gap-[150px] py-[30px] px-[20px] border-b border-[#e2e2e2]">
                    <div className="flex items-center gap-[30px]">
                      <span className="bg-red-500 w-[40px] h-[40px] rounded-full flex justify-center items-center text-white cursor-pointer">
                        <i class="fa-solid fa-xmark"></i>
                      </span>
                      <img
                        className="max-w-[65px] h-auto"
                        src="01.jpg"
                        alt="product"
                      />
                      <h4 className="text-[16px] font-display font-bold text-[#2C3C28] truncate w-[250px]">
                        Netlyfy business makes your profit Lorem ipsum dolor sit
                        amet.
                      </h4>
                    </div>
                    <div className="flex items-center gap-[400px]">
                      <span className="text-[18px] font-bold text-[#2C3C28] ">
                        $500
                      </span>
                      <div className="flex items-center bg-white p-3 rounded-[4px] gap-3 ">
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
                    </div>
                  </div>
                  <div className="flex items-center gap-[150px] py-[30px] px-[20px] border-b border-[#e2e2e2]">
                    <div className="flex items-center gap-[30px]">
                      <span className="bg-red-500 w-[40px] h-[40px] rounded-full flex justify-center items-center text-white cursor-pointer">
                        <i class="fa-solid fa-xmark"></i>
                      </span>
                      <img
                        className="max-w-[65px] h-auto"
                        src="01.jpg"
                        alt="product"
                      />
                      <h4 className="text-[16px] font-display font-bold text-[#2C3C28] truncate w-[250px]">
                        Netlyfy business makes your profit Lorem ipsum dolor sit
                        amet.
                      </h4>
                    </div>
                    <div className="flex items-center gap-[400px]">
                      <span className="text-[18px] font-bold text-[#2C3C28] ">
                        $500
                      </span>
                      <div className="flex items-center bg-white p-3 rounded-[4px] gap-3 ">
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
                    </div>
                  </div>
                  <div className="flex items-center gap-[150px] py-[30px] px-[20px] border-b border-[#e2e2e2]">
                    <div className="flex items-center gap-[30px]">
                      <span className="bg-red-500 w-[40px] h-[40px] rounded-full flex justify-center items-center text-white cursor-pointer">
                        <i class="fa-solid fa-xmark"></i>
                      </span>
                      <img
                        className="max-w-[65px] h-auto"
                        src="01.jpg"
                        alt="product"
                      />
                      <h4 className="text-[16px] font-display font-bold text-[#2C3C28] truncate w-[250px]">
                        Netlyfy business makes your profit Lorem ipsum dolor sit
                        amet.
                      </h4>
                    </div>
                    <div className="flex items-center gap-[400px]">
                      <span className="text-[18px] font-bold text-[#2C3C28] ">
                        $500
                      </span>
                      <div className="flex items-center bg-white p-3 rounded-[4px] gap-3 ">
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
                    </div>
                  </div>
                </div>

                <div className="py-[30px] px-[30px] flex items-center justify-between">
                  <div className="flex items-center gap-[20px]">
                    <input
                      className="h-[50px] font-medium text-[#6E777D] bg-[#F3F4F6] rounded-[6px] w-[290px] p-[15px]  focus:outline-[#629D23]"
                      type="text"
                      placeholder="Apply Coupon..."
                    />
                    <button className="text-[16px] font-bold font-display text-[#FFF] bg-[#629D23] px-[28px] py-[10px] rounded-[6px] cursor-pointer">
                      Apply Coupon
                    </button>
                  </div>
                  <button className="text-[16px] font-bold font-display text-[#FFF] bg-[#629D23] px-[28px] py-[10px] rounded-[6px] cursor-pointer">
                    Clear All
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[25%]">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-xl font-Poppipns_FONT font-semibold text-gray-900">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-Poppipns_FONT font-normal text-gray-500 ">
                        Original price
                        <span className="ml-2">total items</span>
                      </dt>
                      <dd className="text-base font-Poppipns_FONT  font-medium text-gray-900">
                        $500
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-Poppipns_FONT  font-normal text-gray-500">
                        Additional Fees
                      </dt>
                      <dd className="text-base font-Poppipns_FONT  font-medium text-gray-900">
                        $200
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-Poppipns_FONT  font-normal text-gray-500">
                        Shipping Cost
                      </dt>
                      <dd className="text-base font-Poppipns_FONT  font-medium text-gray-900">
                        $200
                      </dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                    <dt className="text-base font-Poppipns_FONT  font-bold text-gray-600">
                      SubTotal
                    </dt>
                    <dd className="text-base font-Poppipns_FONT  font-medium text-gray-900">
                      $5000
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-Poppipns_FONT  font-normal text-red-400">
                      Discount
                    </dt>
                    <dd className="text-base font-Poppipns_FONT  font-medium text-red-500">
                      <span className="mr-2">(-)</span>$200
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                    <dt className="text-[18px] mt-2 font-Poppipns_FONT  font-bold text-gray-900">
                      Total
                    </dt>
                    <dd className="text-base font-Poppipns_FONT  font-bold text-gray-900">
                      $5000
                    </dd>
                  </dl>
                </div>

                <Link className="flex w-full items-center justify-center rounded-lg px-5 py-2.5  font-medium text-white bg-[#629D23] hover:bg-[#629D23]/80 text-[18px] font-display ">
                  Proceed to Checkout
                </Link>

                <div className="flex items-center justify-center gap-2">
                  <span className="text-[16px] font-display font-normal text-gray-500 dark:text-gray-400">
                    or
                  </span>
                  <Link className="inline-flex items-center gap-2 text-[16px] font-medium text-blue-500 underline hover:no-underline dark:text-blue-600 ">
                    Continue Shopping
                    <span className="w-5 h-5">
                      <i className="fa-sharp fa-regular fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Cart;
