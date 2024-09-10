import { userActions } from '@/redux/user';
import useAppDispatch from '@/utils/hooks/app-dispatch';
import { AclButton, AclModal } from '@acl/ui';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import TokenTimerStyles from './token-timer.module.css';
import { PopupAction, TokenTimerProps } from './token-timer.type';

const TokenTimer = ({ authHydrate }: TokenTimerProps) => {
  const dispatch = useAppDispatch();
  const [showTimeExpiryPopup, setShowTimeExpiryPopup] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const fiveMinutes = useMemo(() => 5 * 60 * 1000, []); // 5 minutes in milliseconds
  const frSdk = useMemo(() => localStorage.getItem(`FR-SDK-${window.REACT_APP_CLIENTID}`) ?? '', []);

  const handlePopUpAction = useCallback(
    (popUpAction: PopupAction): void => {
      setShowTimeExpiryPopup(false);

      switch (popUpAction) {
        case 'continue':
          authHydrate('login', { forceRenew: true });
          break;
        case 'logout':
          dispatch(userActions.clearUser());
          break;
        default:
          break;
      }
    },
    [dispatch, authHydrate],
  );

  const formatTime = useCallback((milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes} minutes ${seconds < 10 ? '0' : ''}${seconds} seconds`;
  }, []);

  useEffect(() => {
    if (Boolean(frSdk)) {
      const tokenExpiry = JSON.parse(frSdk)?.tokenExpiry ?? 0;
      const currentTime = Date.now();
      const initialTimeRemaining = tokenExpiry - currentTime;

      if (initialTimeRemaining <= 0) {
        handlePopUpAction('logout');
      } else {
        if (initialTimeRemaining > fiveMinutes) {
          setShowTimeExpiryPopup(false);
          const popupTimer = setTimeout(() => {
            setTimeRemaining(fiveMinutes);
            setShowTimeExpiryPopup(true);
          }, initialTimeRemaining - fiveMinutes);

          return () => {
            clearTimeout(popupTimer);
          };
        } else {
          setTimeRemaining(initialTimeRemaining);
          setShowTimeExpiryPopup(true);
        }
      }
    }
  }, [frSdk, fiveMinutes, handlePopUpAction]);

  useEffect(() => {
    if (showTimeExpiryPopup) {
      const intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1000) {
            clearInterval(intervalId);
            handlePopUpAction('logout');

            return 0;
          }

          return prevTime - 1000;
        });
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [showTimeExpiryPopup, handlePopUpAction]);

  return (
    <>
      <AclModal openModal={showTimeExpiryPopup} toggleOpenModal={setShowTimeExpiryPopup}>
        <div className={TokenTimerStyles['text-wrapper']}>
          <div>
            You will be logged out in
            <span className={TokenTimerStyles['formatted-time']}>{' ' + formatTime(timeRemaining)}</span>!
          </div>
          <div>Do you want to continue your session?</div>
        </div>
        <div className={TokenTimerStyles['button-wrapper']}>
          <AclButton onClick={() => handlePopUpAction('continue')}>Continue</AclButton>
          <AclButton variant="outlined" onClick={() => handlePopUpAction('logout')}>
            Logout
          </AclButton>
        </div>
      </AclModal>
    </>
  );
};

export default TokenTimer;
