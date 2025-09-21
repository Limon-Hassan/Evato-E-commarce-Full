import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Api/axios';
import { useSnackbar } from 'notistack';

function GoogleRedirect() {
  const navigate = useNavigate();
  let { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get('user/me', {
          withCredentials: true,
        });
       
        if (response.data.user) {
          localStorage.setItem(
            'auth-Info',
            JSON.stringify({ user: response.data.user })
          );
          navigate('/');
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.log(error);
        let backendMsg =
          error.response?.data?.message || 'Something went wrong!';
        enqueueSnackbar(backendMsg, { variant: 'error' });
        navigate('/login');
      }
    }

    fetchUser();
  }, [navigate]);

  return (
    <div className="py-[200px] text-black font-display font-bold text-[30px] flex justify-center items-center">
      Logging in with Google...
    </div>
  );
}

export default GoogleRedirect;
