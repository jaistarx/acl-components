import { AuthAction } from '@/app/app.type';
import { GetTokensOptions } from '@forgerock/javascript-sdk';

export type TokenTimerProps = {
  authHydrate: (authAction: AuthAction, tokensOptions: GetTokensOptions) => Promise<void>;
};

export type PopupAction = 'continue' | 'logout';
