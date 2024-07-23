import { userActions } from '@/redux/user';
import { UserManager } from '@forgerock/javascript-sdk';
import { useEffect, useState } from 'react';
import useAppDispatch from './app-dispatch';
import useAppSelector from './app-selector';

const useAuthValidation = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [isAuthValid, setIsAuthValid] = useState<boolean>(user.isAuthenticated);
  const sessionUser = sessionStorage.getItem('user');

  useEffect(() => {
    const url = new URL(document.location.toString());
    const params = url.searchParams;
    const authCode = params.get('code');
    const state = params.get('state');

    const validateAccessToken = async () => {
      if (user.isAuthenticated || sessionUser) {
        try {
          await UserManager.getCurrentUser();
          setIsAuthValid(true);
        } catch (err) {
          dispatch(userActions.clearUser());
          setIsAuthValid(false);
        }
      } else {
        setIsAuthValid(false);
      }
    };

    if (!(state && authCode)) {
      validateAccessToken();
    }

    window.addEventListener('storage', validateAccessToken);

    return () => {
      window.removeEventListener('storage', validateAccessToken);
    };
  }, [dispatch, user.isAuthenticated, sessionUser]);

  return { isAuthValid };
};

export default useAuthValidation;
