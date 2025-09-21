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
        const res = await api.get('user/me', {
          withCredentials: true,
        });
        console.log('Cookies received:', req.cookies);
        console.log(res);
        // if (res.data.user) {
        //   console.log(res.data);
        //   localStorage.setItem(
        //     'auth-Info',
        //     JSON.stringify({ user: res.data.user })
        //   );
        //   navigate('/');
        // } else {
        //   navigate('/login');
        // }
      } catch (error) {
        console.log(error);
        let backendMsg = error.res?.data?.message || 'Something went wrong!';
        enqueueSnackbar(backendMsg, { variant: 'error' });
        navigate('/login');
      }
    }

    fetchUser();
  }, [navigate]);

  return <div>Logging in with Google...</div>;
}

export default GoogleRedirect;
