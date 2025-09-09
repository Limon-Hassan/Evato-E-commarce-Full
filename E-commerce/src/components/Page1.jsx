import Container from '../Container';
import Page2 from './Page2';

const Page1 = () => {
  return (
    <>
      <section className="bg-[url(/Benner.jpg)] bg-cover ">
        <Container>
          <div className="flex items-center justify-between pt-[60px]">
            <div className="">
              <p className="text-[18px] font-display font-medium text-[#22351E]">
                Get up to -30% off on your purchase
              </p>
              <h1 className="text-[60px] font-display font-bold text-[#22351E] mt-[10px] mb-[15px] w-[634px]">
                Buy From Different Kind of Grocery Store
              </h1>
              <p className="text-[18px] font-display font-medium text-[#22351E] mb-[40px]">
                Don't miss these opportunities...
              </p>
              <button className="text-[18px] font-display font-bold text-[#FFF] bg-[#629D23] py-[12px] px-[24px] rounded-[8px] cursor-pointer hover:bg-[#22351E] ease-in-out duration-300">
                Shop Now
                <span className="ml-[12px]">
                  <i class="fa-regular fa-arrow-right"></i>
                </span>
              </button>
            </div>
            <div>
              <img src="oppart.png" alt="oppart" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page1;
