export enum APP_SCREEN {
  UN_AUTHORIZE = 'UN_AUTHORIZE',
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',

  AUTHORIZE = 'AUTHORIZE',
  HOME = 'HOME',
  DATE_REMINDER = 'DATE_REMINDER',
  DESCRIPTION_REMINDER = 'DESCRIPTION_REMINDER',
  ADD_TITLE_NOTE = 'ADD_TITLE_NOTE',
}

export type UnAuthorizeParamsList = {
  [APP_SCREEN.LOGIN]: undefined;
  [APP_SCREEN.REGISTER]: undefined;
  [APP_SCREEN.SPLASH]: undefined;
};
export type AuthorizeParamsList = {
  [APP_SCREEN.HOME]: undefined;
  [APP_SCREEN.DATE_REMINDER]: undefined;
  [APP_SCREEN.DESCRIPTION_REMINDER]: undefined;
  [APP_SCREEN.ADD_TITLE_NOTE]: undefined;
};
export type RootStackParamList = {
  [APP_SCREEN.UN_AUTHORIZE]: undefined;
  [APP_SCREEN.AUTHORIZE]: undefined;
} & UnAuthorizeParamsList &
  AuthorizeParamsList;
