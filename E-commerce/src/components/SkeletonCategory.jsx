import React from 'react';

const SkeletonCategory = () => {
  return (
    <>
      <div className="w-[187px] h-[180px] border border-[#e2e2e2] rounded-[6px] p-2 animate-pulse">
        <div className="w-full h-full bg-[#f1f1f1] rounded-[6px] flex flex-col items-center justify-center">
          <div className="w-[80px] h-[80px] bg-gray-300 rounded mb-4"></div>
          <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
          <div className="w-1/2 h-3 bg-gray-300 rounded"></div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCategory;
