import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Container from '../Container';
import { useEffect, useState } from 'react';
import api from '../Api/axios';

const Page2 = () => {
  let [category, setCategory] = useState([]);

  useEffect(() => {
    async function FetchCategory() {
      try {
        let response = await api.get('category/getCategory');
        setCategory(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    FetchCategory();
  }, []);

  return (
    <>
      <section className="bg-[#dbe2e9]/30 pt-[60px] pb-[60px]">
        <Container>
          <div className="bg-white rounded-[8px] p-[30px] ">
            <div className="flex items-center justify-between border-b border-black/20 pb-[30px]">
              <h4 className="text-[30px] font-display leading-1.5 font-bold text-[#2C3C28] ">
                Featured Categories
              </h4>
              <span className="flex items-center gap-3">
                <button className="swiper-button-prev-custom bg-[#fff] hover:bg-[#629D23] w-[33px] h-[33px] border border-[#629D23] hover:text-white rounded-[8px] flex justify-center items-center ease-in-out duration-300 cursor-pointer">
                  <i class="fa-regular fa-arrow-left-from-arc"></i>
                </button>
                <button className="swiper-button-next-custom  bg-[#fff] hover:bg-[#629D23] w-[33px] h-[33px] border border-[#629D23] rounded-[8px]  hover:text-white flex justify-center items-center ease-in-out duration-300 cursor-pointer">
                  <i class="fa-regular fa-arrow-right-from-arc"></i>
                </button>
              </span>
            </div>
            <div className="mt-[50px]">
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={8}
                slidesPerGroup={1}
                loop={true}
                speed={800}
                navigation={{
                  nextEl: '.swiper-button-next-custom',
                  prevEl: '.swiper-button-prev-custom',
                }}
              >
                {category?.map(cat => (
                  <SwiperSlide key={cat._id}>
                    <div className=" w-[187px] h-[180px]  bg-white border border-[#e2e2e2] hover:border-[#629D23] transition-all ease-in-out duration-300 rounded-[6px] p-2 cursor-pointer">
                      <div className=" w-full h-full bg-[#ededed]/30 rounded-[6px] ">
                        <img
                          className="max-w-[80px] max-h-[80px] min-h-[60px] mx-auto pt-[16px] mb-[16px]"
                          src={cat.image || 'ww05.jpg'}
                          alt="Organic Vegetable"
                        />
                        <h3 className="text-[16px] font-bold font-display text-[#2C3C28] text-center mb-[8px] ">
                          {cat.name}
                        </h3>
                        <p className="text-[#629D23] text-center">
                          {cat.totalProducts} ITEMS
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page2;
