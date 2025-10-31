import React, { useEffect, useState } from 'react';
import Container from '../Container';

const OrderDetails = () => {
  let [order, setOrder] = useState({});
  useEffect(() => {
    async function fetchOrder() {
      try {
        let id = JSON.parse(localStorage.getItem('auth-Info')).user.id;
        let response = await api.get(`Order/readOrder/${id}`);
        setOrder(response.data);
      } catch (error) {
        console.log(error);
        let backendMsg = error.response?.data?.message || ' Please login.!';
        enqueueSnackbar(backendMsg, { variant: 'error' });
      }
    }
    fetchOrder();
  }, []);

  return (
    <>
      <section>
        <Container>
          <div>
            <h3 className="text-[30px] font-bold font-display leading-0.5 text-[#2C3C28] mb-[40px]">
              Your Orders
            </h3>
            <div className="border border-[#e2e2e2]">
              <div className="flex justify-between items-center border-b border-[#e2e2e2]">
                <h5 className="uppercase  text-[16px] font-medium font-display text-[#2C3C28] p-[15px]">
                  Order
                </h5>
                <h5 className="uppercase  text-[16px] font-medium font-display text-[#2C3C28] p-[15px]">
                  Date
                </h5>
                <h5 className="uppercase  text-[16px] font-medium font-display text-[#2C3C28] p-[15px]">
                  Status
                </h5>
                <h5 className="uppercase  text-[16px] font-medium font-display text-[#2C3C28] p-[15px]">
                  Total
                </h5>
                <h5 className="uppercase  text-[16px] font-medium font-display text-[#2C3C28] p-[15px]">
                  Actions
                </h5>
              </div>
              <div className="flex justify-between items-center">
                <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                  #1357
                </h5>
                <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                  March 45, 2020
                </h5>
                <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                  Processing
                </h5>
                <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                  $364.00 for <span>5 items</span>
                </h5>
                <h5 className="text-[16px] hover:underline  font-normal font-display text-[#2C3C28] p-[15px]">
                  <a href="#">View</a>
                </h5>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OrderDetails;
