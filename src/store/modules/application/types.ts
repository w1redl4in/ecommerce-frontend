export type IApplicationState = IApplication;

export type IApplication = {
  firstLogin: IFirstLogin;
};

export type IFirstLogin = {
  component: React.FC;
  isLoading: boolean;
};

export const ApplicationActionTypes = {
  CHANGE_COMPONENT: '@@application/CHANGE_COMPONENT',
  SET_IMAGE: '@@application/SET_IMAGE',
};
