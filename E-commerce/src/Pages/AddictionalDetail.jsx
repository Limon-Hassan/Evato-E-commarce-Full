import React from 'react';
import Container from '../Container';

const AddictionalDetail = () => {
  return (
    <>
      <section>
        <Container>
          <div>
            <p className="text-[16px] font-display font-normal text-[#74787C] my-[20px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic et
              nostrum nesciunt modi accusamus quisquam dignissimos sequi
              voluptates aspernatur alias.
            </p>
            <div>
              <div className="flex items-center justify-between border border-[#e9ecef]">
                <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                  Kitchen Fade Defy
                </h5>
                <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                  5KG
                </h5>
              </div>
              <div className="flex items-center justify-between border border-[#e9ecef]">
                <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                  PRAN Full Cream Milk Powder
                </h5>
                <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                  3KG
                </h5>
              </div>
              <div className="flex items-center justify-between border border-[#e9ecef]">
                <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                  Net weight
                </h5>
                <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                  8KG
                </h5>
              </div>
              <div className="flex items-center justify-between border border-[#e9ecef]">
                <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                  Product type
                </h5>
                <h5 className="text-[16px] font-normal font-display text-[#2C3C28] p-[15px]">
                  Powder Milk
                </h5>
              </div>
              <div className="flex mt-[20px] gap-3">
                <h5 className="text-[16px] font-display font-medium text-[#6E777D] ">
                  Return/cancellation:
                </h5>
                <p className="text-[16px] font-display font-normal text-[#74787C] ">
                  No change will be applicable which are already delivered to
                  customer. If product quality or quantity problem found then
                  customer can return/cancel their order on delivery time with
                  presence of delivery person.
                </p>
              </div>
              <p className="flex gap-3 mt-[10px] font-bold">
                <span className="text-red-600">Note: </span>
                <span className="text-red-400 font-normal">
                  Product delivery duration may vary due to product availability
                  in stock.
                </span>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AddictionalDetail;
