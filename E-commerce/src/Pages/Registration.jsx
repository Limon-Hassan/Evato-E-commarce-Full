import { Link, useNavigate } from 'react-router-dom';
import Container from '../Container';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import api from '../Api/axios';

const Registration = () => {
  let [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  let [showPassword, setShowPassword] = useState(false);
  let [error, setError] = useState('');
  let [loading, setLoading] = useState(false);
  let { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();

  let handleInputs = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (!formData.name || !formData.email || !formData.password) {
      enqueueSnackbar('please fill all the fields', { variant: 'error' });
      return;
    }
    try {
      let respons = await api.post('user/registation', formData);
      if (respons.data.msg === 'User Registation succesfull !') {
        setTimeout(() => {
          navigate('/Send_OTP');
        }, [2000]);
      } else {
        enqueueSnackbar(respons.data.msg, { variant: 'warning' });
      }
    } catch (error) {
      let backendMsg = error.response?.data?.msg || 'Something went wrong!';
      enqueueSnackbar(backendMsg, { variant: 'error' });
      setError(backendMsg);
    } finally {
      setLoading(false);
    }
  };

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
                  onChange={handleInputs}
                  className="border mt-[10px] border-[#ebebeb] rounded-[5px] w-full h-full text-[16px] font-display font-normal leading-7 bg-transparent px-[15px] outline-none focus:border-[#629D23] transition-all ease-in-out duration-500"
                  type="text"
                  id="name"
                  value={formData.name}
                  name="name"
                />
              </div>
              <div className="input-wapper w-[500px] h-[50px] text-left mb-[60px]">
                <label className=" font-medium text-[#2C3C28]" for="name">
                  Email*
                </label>
                <input
                  onChange={handleInputs}
                  className="border mt-[10px] border-[#ebebeb] rounded-[5px] w-full h-full text-[16px] font-display font-normal leading-7 bg-transparent px-[15px] outline-none focus:border-[#629D23] transition-all ease-in-out duration-500"
                  type="text"
                  id="email"
                  value={formData.email}
                  name="email"
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
              </div>
              <div className="input-wapper relative w-[500px] h-[50px] text-left mb-[60px]">
                <label className=" font-medium text-[#2C3C28]" for="password">
                  Password*
                </label>
                <input
                  onChange={handleInputs}
                  className="  border mt-[10px] border-[#ebebeb] rounded-[5px] w-full h-full text-[16px] font-display font-normal leading-7 bg-transparent pl-[15px] pr-[55px] outline-none focus:border-[#629D23] transition-all ease-in-out duration-500"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={formData.password}
                  name="password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-[45px] right-[10px] flex items-center text-lg text-black cursor-pointer"
                >
                  {showPassword ? (
                    <span>
                      <i class="fa-light fa-eye"></i>
                    </span>
                  ) : (
                    <span>
                      <i class="fa-light fa-eye-slash"></i>
                    </span>
                  )}
                </button>
              </div>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="text-[16px] w-[500px] font-bold font-display text-[#fff] bg-[#629D23] px-[25px] py-[14px] rounded-[6px] mb-[30px] cursor-pointer"
              >
                {loading ? 'Creating Account...' : 'Register Account'}
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
