import * as ActionTypes from './types';

export const signInAction = (email, password) => ({
    type: ActionTypes.AUTH_SIGNIN,
    email,
    password,
});

export const autoSignInAction = (user) => ({
    type: ActionTypes.AUTH_AUTO_SIGNIN,
    user,
  });
  
  export const registerAction = (email, password) => ({
    type: ActionTypes.AUTH_REGISTER,
    email,
    password,
  });
  
  export const signOutAction = () => ({
    type: ActionTypes.AUTH_SIGNOUT,
  });