import React, { useEffect, useRef, useState } from 'react';
import Container from '../Container';
import { useNavigate } from 'react-router-dom';
import api from '../Api/axios';
import { useSnackbar } from 'notistack';

const SentOTP = () => {
  let inputsRef = useRef([]);
  let navigate = useNavigate();
  let { enqueueSnackbar } = useSnackbar();
  let [counter, setCounter] = useState(60);
  let [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let timer;
    if (!canResend && counter > 0) {
      timer = setInterval(() => {
        setCounter(prev => prev - 1);
      }, 1000);
    } else if (counter === 0) {
      setCanResend(true);
    }
    return () => clearInterval(timer);
  }, [counter, canResend]);

  let handleKeyDown = (e, index) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== 'Backspace' &&
      e.key !== 'Delete' &&
      e.key !== 'Tab'
    ) {
      e.preventDefault();
    }

    if (e.key === 'Delete' || e.key === 'Backspace') {
      if (inputsRef.current[index].value) {
        inputsRef.current[index].value = '';
      } else if (index > 0) {
        inputsRef.current[index - 1].value = '';
        inputsRef.current[index - 1].focus();
      }
    }
  };
  const handleInput = (e, index) => {
    if (e.target.value) {
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handlePaste = e => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    if (!new RegExp(`^[0-9]{${inputsRef.current.length}}$`).test(text)) {
      return;
    }
    const digits = text.split('');
    digits.forEach((digit, idx) => {
      inputsRef.current[idx].value = digit;
    });
    inputsRef.current[inputsRef.current.length - 1].focus();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const OTP = inputsRef.current.map(input => input.value).join('');
    const user = JSON.parse(localStorage.getItem('auth-user'));
    const email = user?.email;
    try {
      let response = await api.post('user/otp-verify', { email, OTP });
      if (response.data.msg === 'Email verfiy succesfull !') {
        setTimeout(() => {
          navigate('/login');
        }, [1000]);
      } else {
        enqueueSnackbar(response.data.msg, { variant: 'warning' });
      }
    } catch (error) {
      let backendMsg = error.response?.data?.msg || 'Something went wrong!';
      enqueueSnackbar(backendMsg, { variant: 'error' });
    }
  };
  let handleResent = async () => {
    let user = JSON.parse(localStorage.getItem('auth-user'));
    let email = user?.email;
    try {
      let response = await api.post('user/resent-otp', { email });
      enqueueSnackbar(response.data.msg, { variant: 'success' });

      setCounter(60);
      setCanResend(false);
    } catch (error) {
      enqueueSnackbar(error.response?.data?.msg || 'Something went wrong!', {
        variant: 'error',
      });
    }
  };
  return (
    <section className="py-[100px]">
      <Container>
        <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
          <header className="mb-8">
            <h1 className="text-2xl font-bold mb-[16px]">
              Account Verification
            </h1>
            <p className="text-[15px] text-slate-500">
              Enter the 4-digit verification code that was sent to your Gmail
              Account.
            </p>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-center gap-3">
              {[0, 1, 2, 3].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  ref={el => (inputsRef.current[index] = el)}
                  onKeyDown={e => handleKeyDown(e, index)}
                  onInput={e => handleInput(e, index)}
                  onFocus={e => e.target.select()}
                  onPaste={handlePaste}
                  className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 
                bg-slate-100 border border-transparent hover:border-slate-200 
                rounded p-4 outline-none focus:bg-white focus:border-indigo-400 
                focus:ring-2 focus:ring-indigo-100"
                />
              ))}
            </div>
            <div className="max-w-[260px] mx-auto mt-4">
              <button
                type="submit"
                className="w-full inline-flex justify-center mt-[20px] cursor-pointer whitespace-nowrap rounded-lg 
               border border-[#e2e2e2] px-3.5 py-2.5 text-sm font-medium text-[#2C3C28] hover:bg-[#629D23] hover:text-white focus:outline-none 
              focus:ring focus:ring-indigo-300 transition-colors ease-in-out duration-300"
              >
                Verify Account
              </button>
            </div>
          </form>
          <div className="text-sm text-slate-500 mt-4">
            Didn&apos;t receive code?
            <button
              onClick={handleResent}
              disabled={!canResend}
              className={`font-medium ${
                canResend
                  ? ' text-indigo-600 cursor-pointer'
                  : ' text-gray-600 cursor-not-allowed'
              } ml-[8px] `}
            >
              {canResend ? 'Resend OTP' : `Resend in ${counter}s`}
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SentOTP;
