import React, { useState } from 'react';
import Container from '../Container';
import CheckBox from './CheckBox';
import PaymentStripe from './paymentStripe';

const Checkout = () => {
  let [Selectpayment, setSelectpayment] = useState(null);
  let [SelectpaymentStipe, setSelectpaymentStipe] = useState(false);
  const handlePaymentChange = paymentMethod => {
    setSelectpayment(paymentMethod);
    if (paymentMethod === 'Payment by Stripe') {
      setSelectpaymentStipe(true);
    } else {
      setSelectpaymentStipe(false);
    }
  };

  return (
    <>
      <section className="py-[100px] bg-[#F3F4F6]">
        <Container>
          <div className="flex items-center gap-[50px] mb-[50px]">
            <div className="w-[70%]">
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
              <div className="flex items-center ">
                <h3 className="text-[30px] font-display font-bold text-[#2C3C28]">
                  Your Order
                </h3>
              </div>

              <div class=" mt-[20px] max-w-md ">
                <div class="rounded-[6px] bg-white border-2 border-[#629D23]">
                  <div class="px-4 py-6 sm:px-8 sm:py-10">
                    <div class="flow-root">
                      <ul class="-my-8 overflow-y-scroll h-[270px] mb-[20px]">
                        <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                          <div class="shrink-0 relative">
                            <span class="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                              1
                            </span>
                            <img
                              class="h-24 w-24 max-w-full rounded-lg object-cover"
                              src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                              alt=""
                            />
                          </div>

                          <div class="relative flex flex-1 flex-col justify-between">
                            <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                              <div class="pr-8 sm:pr-5">
                                <p class="text-base font-semibold text-gray-900">
                                  Nike Air Max 2019
                                </p>
                                <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                  36EU - 4US
                                </p>
                              </div>

                              <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                  $1259.00
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                          <div class="shrink-0 relative">
                            <span class="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                              1
                            </span>
                            <img
                              class="h-24 w-24 max-w-full rounded-lg object-cover"
                              src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                              alt=""
                            />
                          </div>

                          <div class="relative flex flex-1 flex-col justify-between">
                            <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                              <div class="pr-8 sm:pr-5">
                                <p class="text-base font-semibold text-gray-900">
                                  Nike Air Max 2019
                                </p>
                                <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                  36EU - 4US
                                </p>
                              </div>

                              <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                  $1259.00
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                          <div class="shrink-0 relative">
                            <span class="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">
                              1
                            </span>
                            <img
                              class="h-24 w-24 max-w-full rounded-lg object-cover"
                              src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                              alt=""
                            />
                          </div>

                          <div class="relative flex flex-1 flex-col justify-between">
                            <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                              <div class="pr-8 sm:pr-5">
                                <p class="text-base font-semibold text-gray-900">
                                  Nike Air Max 2019
                                </p>
                                <p class="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                  36EU - 4US
                                </p>
                              </div>

                              <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                  $1259.00
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div class="mt-6 space-y-3 border-t border-[#e8e8e8] border-b py-8">
                      <div class="flex items-center justify-between">
                        <p class="text-gray-400">Subtotal</p>
                        <p class="text-lg font-semibold text-gray-900">
                          $2399.00
                        </p>
                      </div>
                      <div class="flex items-center justify-between">
                        <p class="text-gray-400">Shipping</p>
                        <p class="text-lg font-semibold text-gray-900">$8.00</p>
                      </div>
                    </div>
                    <div class="mt-6 flex items-center justify-between">
                      <p class="text-sm font-medium text-gray-900">Total</p>
                      <p class="text-2xl font-semibold text-gray-900">
                        <span class="text-xs font-normal text-gray-400">$</span>
                        2499.00
                      </p>
                    </div>
                    <div className="my-[20px]">
                      <CheckBox
                        label="Cash on Delivery"
                        checked={Selectpayment === 'Cash on Devilery'}
                        className="rounded-full mb-2.5"
                        onChange={() => handlePaymentChange('Cash on Devilery')}
                      />
                      <CheckBox
                        label="Payment by Stripe"
                        checked={Selectpayment === 'Payment by Stripe'}
                        className="rounded-full"
                        onChange={() =>
                          handlePaymentChange('Payment by Stripe')
                        }
                      />
                    </div>
                    <div class="mt-6 text-center">
                      <button
                        type="button"
                        class="group inline-flex w-full items-center justify-center rounded-md bg-[#629D23] cursor-pointer px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                      >
                        Place Order
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {SelectpaymentStipe && <PaymentStripe></PaymentStripe>}
        </Container>
      </section>
    </>
  );
};

export default Checkout;
