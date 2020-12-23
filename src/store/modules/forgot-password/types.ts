export type IForgotPasswordState = IForgotPassword;

export type IForgotPassword = {
  isLoading: boolean;
  visible: boolean;
};

export type IEmail = {
  email: string;
};

export const ForgotPasswordActionTypes = {
  OPEN_MODAL: '@@forgot-password/OPEN_MODAL',
  CLOSE_MODAL: '@@forgot-password/CLOSE_MODAL',
  FETCH_FORGOT_PASSWORD: '@@forgot-password/FETCH_FORGOT_PASSWORD',
  FETCH_FORGOT_PASSWORD_SUCCESS:
    '@@forgot-password/FETCH_FORGOT_PASSWORD_SUCCESS',
  FETCH_FORGOT_PASSWORD_ERROR: '@@forgot-password/FETCH_FORGOT_PASSWORD_ERROR',
};
