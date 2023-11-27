import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated (e.g., token exists in localStorage)
    const isUserAuthenticated = Boolean(localStorage.getItem('token'));

    // Redirect to the home page if the user is authenticated
    if (isUserAuthenticated) {
      navigate('/');
    }
  }, [navigate]);

  return null; // This hook doesn't render any UI, so it returns null
};