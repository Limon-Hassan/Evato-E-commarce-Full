import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../Api/axios';

function GoogleRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get('user/me', {
          withCredentials: true,
        });
        if (res.data.user) {
          localStorage.setItem(
            'auth-Info',
            JSON.stringify({ user: res.data.user })
          );
          navigate('/');
        } else {
          navigate('/login');
        }
      } catch (err) {
        console.log('Error fetching user', err);
        navigate('/login');
      }
    }

    fetchUser();
  }, [navigate]);

  return <div>Logging in with Google...</div>;
}

export default GoogleRedirect;
