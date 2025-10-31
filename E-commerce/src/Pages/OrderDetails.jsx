import React, { useEffect, useState } from 'react';
import Container from '../Container';
import { format } from 'date-fns';
import api from '../Api/axios';

const OrderDetails = () => {
  let [order, setOrder] = useState([]);

  
  useEffect(() => {
    async function fetchOrder() {
      try {
        let id = JSON.parse(localStorage.getItem('auth-Info')).user.id;
        let response = await api.get(`checkout/getCheckout/${id}`);
        setOrder(response.data.data);
      } catch (error) {
        console.log(error);
        let backendMsg = error.response?.data?.message || ' Please login.!';
        if (backendMsg === 'No token found. Please login.') {
          window.location.href = '/login';
        }
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
              <div className="flex gap-[200px] items-center border-b border-[#e2e2e2]">
                <h5 className="uppercase  text-[16px] font-medium font-display text-[#2C3C28] p-[15px]">
                  Order ID
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
              {order.map((item, index) => (
                <div
                  index={index}
                  className="flex gap-[140px] items-center"
                >
                  <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                    {item.uniqueOrderID}
                  </h5>
                  <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                    {format(new Date(item.createdAt), "MMMM d yyyy 'at' HH:mm")}
                  </h5>
                  <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                    {item.delivery}
                  </h5>
                  <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                    ${item.totalPrice} for
                    <span>{item.cartitem.length} items</span>
                  </h5>
                  <h5 className="text-[16px] hover:underline  font-normal font-display text-[#2C3C28] p-[15px]">
                    <a href="#">View</a>
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OrderDetails;
