import Router from '@/components/router';
import TokenTimer from '@/components/token-timer';
import { globalActions } from '@/redux/global';
import { userActions } from '@/redux/user';
import { createUser } from '@/utils/common/helper';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import useAppSelector from '@/utils/hooks/app-selector';
import { AclBackdrop, AclSnackbarProvider } from '@acl/ui';
import { Config, GetTokensOptions, TokenManager, UserManager } from '@forgerock/javascript-sdk';
import axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import { AuthAction } from './app.type';

Config.set({
  serverConfig: {
    baseUrl: window.REACT_APP_IAM_URL ?? '',
    timeout: parseFloat(window.REACT_APP_TIMEOUT ?? '5000'),
  },
  realmPath: window.REACT_APP_REALM_PATH,
  clientId: window.REACT_APP_CLIENTID,
  redirectUri: window.location.origin + '/starsreporting',
  scope: 'openid profile',
});

const App = () => {
  const user = useAppSelector((state) => state.user);
  const global = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  const frSdk = localStorage.getItem(`FR-SDK-${window.REACT_APP_CLIENTID}`) ?? '';

  if (Boolean(frSdk)) {
    const parsedFrSdk = JSON.parse(frSdk);
    axios.defaults.baseURL = window.REACT_APP_API_URL ?? '';
    axios.defaults.headers.common['Authorization'] = `Bearer ${parsedFrSdk?.accessToken}`;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = window.location.origin;
  }

  const authHydrate = useCallback(
    async (authAction: AuthAction, tokensOptions: GetTokensOptions) => {
      try {
        dispatch(globalActions.update({ showBackdrop: true }));
        await TokenManager.getTokens(tokensOptions)
          .then(async () => {
            await UserManager.getCurrentUser()
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .then((user: any) => {
                const parsedUser = createUser(user);
                dispatch(userActions.updateUser(parsedUser));
              })
              .catch((err) => {
                throw new Error(err.message);
              });
          })
          .catch((err) => {
            throw new Error(err.message);
          });
      } catch (err) {
        switch (authAction) {
          case 'authorize':
            console.error('Authorization failed:', err);
            authHydrate('login', { login: 'redirect' });
            break;
          case 'login':
            console.error('Not able to login at the moment:', err);
            dispatch(userActions.clearUser());
            break;
          default:
            break;
        }
      } finally {
        dispatch(globalActions.update({ showBackdrop: false }));
      }
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(globalActions.update({ showBackdrop: true }));
    const url = new URL(document.location.toString());
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    if (code && state) {
      authHydrate('authorize', { query: { code, state } });
    } else {
      authHydrate('login', { login: 'redirect' });
    }
  }, [dispatch, authHydrate]);

  useEffect(() => {
    const validateAccessToken = async () => {
      if (user.isAuthenticated) {
        try {
          dispatch(globalActions.update({ showBackdrop: true }));
          await UserManager.getCurrentUser();
        } catch (err) {
          console.error('Validation failed!!!', err);
          authHydrate('login', { login: 'redirect' });
        } finally {
          dispatch(globalActions.update({ showBackdrop: false }));
        }
      }
    };

    window.addEventListener('storage', validateAccessToken);

    return () => {
      window.removeEventListener('storage', validateAccessToken);
    };
  }, [user.isAuthenticated, dispatch, authHydrate]);

  return (
    <>
      {user.isAuthenticated && (
        <>
          <AclSnackbarProvider>
            <Router />
            <TokenTimer authHydrate={authHydrate} />
          </AclSnackbarProvider>
        </>
      )}
      <AclBackdrop open={global.showBackdrop || Boolean(user.isLoading)} />
    </>
  );
};

export default App;
