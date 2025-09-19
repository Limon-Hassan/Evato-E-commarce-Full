import { Link } from 'react-router-dom';
import Container from '../Container';

const Registration = () => {
  
  return (
    <>
      <section className="bg-[#F3F4F6] py-[60px]">
        <Container>
          <div>
            <div className="max-w-[800px] rounded-[20px] bg-white text-center m-auto py-[100px] px-[150px]">
              <img className="max-w-[57px] mx-auto" src="fav.png" alt="logo" />
              <h2 className="text-[26px] font-display font-bold leading-[56px] mb-[20px] text-[#2C3C28]">
                Register Into Your Account
              </h2>
              <div className="input-wapper w-[500px] h-[50px] text-left mb-[60px]">
                <label className=" font-medium text-[#2C3C28]" for="name">
                  Username*
                </label>
                <input
                  className="border mt-[10px] border-[#ebebeb] rounded-[5px] w-full h-full text-[16px] font-display font-normal leading-7 bg-transparent px-[15px] outline-none focus:border-[#629D23] transition-all ease-in-out duration-500"
                  type="text"
                  id="id"
                  name="name"
                />
              </div>
              <div className="input-wapper w-[500px] h-[50px] text-left mb-[60px]">
                <label className=" font-medium text-[#2C3C28]" for="name">
                  Email*
                </label>
                <input
                  className="border mt-[10px] border-[#ebebeb] rounded-[5px] w-full h-full text-[16px] font-display font-normal leading-7 bg-transparent px-[15px] outline-none focus:border-[#629D23] transition-all ease-in-out duration-500"
                  type="text"
                  id="email"
                  name="email"
                />
              </div>
              <div className="input-wapper w-[500px] h-[50px] text-left mb-[60px]">
                <label className=" font-medium text-[#2C3C28]" for="password">
                  Password*
                </label>
                <input
                  className="border mt-[10px] border-[#ebebeb] rounded-[5px] w-full h-full text-[16px] font-display font-normal leading-7 bg-transparent px-[15px] outline-none focus:border-[#629D23] transition-all ease-in-out duration-500"
                  type="password"
                  id="password"
                  name="password"
                />
              </div>
              <button className="text-[16px] w-[500px] font-bold font-display text-[#fff] bg-[#629D23] px-[25px] py-[14px] rounded-[6px] mb-[30px] cursor-pointer">
                Register Account
              </button>
              <button className="text-[16px] w-[500px] font-bold font-display text-[#fff] bg-[#629D23] px-[25px] py-[14px] rounded-[6px] mb-[30px] cursor-pointer">
                Register with
                <span className="ml-[12px]">
                  <i class="fa-brands fa-google"></i> Google
                </span>
              </button>
              <p className="text-[16px] font-display font-normal text-[#6E777D]">
                Already Have an Account ?
                <Link
                  to="/login"
                  className="text-[16px] font-display font-bold text-black ml-[12px] cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Registration;
