import React from 'react';

const SkeletonProduct = () => {
  return (
    <>
      <div className="cursor-pointer p-[15px] w-[250px] h-[386px] bg-[#F5F6F7] rounded-[6px] animate-pulse">
        <div className="relative bg-white w-[220px] h-[190px] rounded-[6px] overflow-hidden mb-3">
          <div className="w-full h-full bg-gray-300"></div>
          <div className="absolute top-0 left-[40px] w-[35px] h-[55px] bg-gray-400"></div>
        </div>

        <div className="w-[220px] h-4 bg-gray-300 rounded mb-2"></div>

        <div className="w-1/2 h-3 bg-gray-300 rounded mb-3"></div>

        <div className="flex items-center gap-2 mb-3">
          <div className="w-1/4 h-5 bg-gray-300 rounded"></div>
          <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center bg-white p-3 rounded-[4px] gap-3">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="w-[90px] h-[38px] bg-gray-300 rounded"></div>
        </div>
      </div>
    </>
  );
};

export default SkeletonProduct;
