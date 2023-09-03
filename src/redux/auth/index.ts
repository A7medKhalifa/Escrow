import { EntityKeys } from '../schema';
import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { RootState } from '../store';
import * as actions from './actions';
import { initialState } from './types';
import Toast from 'react-native-toast-message';


const slice = createSlice({
  name: EntityKeys.AUTH,
  initialState: initialState,
  reducers: {
    LOG_OUT: () => initialState,
    changecurrentUser: (state, action) => { state.user = action.payload; },
    changeDoneIndvidualSignup: (state, action) => { state.doneIndvidualSignup = action.payload; },
    changeDoneCompanySignup: (state, action) => { state.doneCompanySignup = action.payload; },
    changedoneForget: (state, action) => { state.doneForget = action.payload; },
    changeDoneVerified: (state, action) => { state.doneVerified = action.payload; },
  },
  extraReducers: builder => {
    //login
    builder.addCase(thunks.doSignIn.fulfilled, (state, action) => {
      state.user = action.payload?.data
      state.logged = true
    });
    builder.addCase(thunks.doSignIn.rejected, (state, action: any) => {
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: "error",
          text1: action.payload.data.error,
        })
      } else {
        Toast.show({
          type: "error",
          text1: action.payload.data.message,
        })
      }
    });

    //doForgetPassword
    builder.addCase(thunks.doForgetPassword.fulfilled, (state, action) => {
      state.doneForget = true
      Toast.show({
        type: "success",
        text1: 'Code sent to E-mail',
      })
    });
    builder.addCase(thunks.doForgetPassword.rejected, (state, action: any) => {
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: "error",
          text1: action.payload.data.error,
        })
      } else {
        Toast.show({
          type: "error",
          text1: action.payload.data.message,
        })
      }
    });

    //doVerifyCode
    builder.addCase(thunks.doVerifyCode.fulfilled, (state, action) => {
      if (action.payload.status == 1) {
        state.doneVerified = true
        Toast.show({
          type: "success",
          text1: 'Code verified successfully',
        })
      } else {
        state.doneVerified = false
        Toast.show({
          type: "success",
          text1: action.payload?.message,
        })
      }
    });
    builder.addCase(thunks.doVerifyCode.rejected, (state, action: any) => {
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: "error",
          text1: action.payload.data.error,
        })
      } else {
        Toast.show({
          type: "error",
          text1: action.payload.data.message,
        })
      }
    });

    //changePassword
    builder.addCase(thunks.changePassword.fulfilled, (state, action) => {
      state.user = action.payload?.data
      state.logged = true
      Toast.show({
        type: "success",
        text1: action.payload?.message,
      })
    });
    builder.addCase(thunks.changePassword.rejected, (state, action: any) => {
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: "error",
          text1: action.payload.data.error,
        })
      } else {
        Toast.show({
          type: "error",
          text1: action.payload.data.message,
        })
      }
    });


    //doIndividualSignUp
    builder.addCase(thunks.doIndividualSignUp.fulfilled, (state, action) => {
      state.doneIndvidualSignup = true
    });
    builder.addCase(thunks.doIndividualSignUp.rejected, (state, action: any) => {
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: "error",
          text1: action.payload.data.error,
        })
      } else {
        Toast.show({
          type: "error",
          text1: action.payload.data.message,
        })
      }
    });

    //doCompanySignUp
    builder.addCase(thunks.doCompanySignUp.fulfilled, (state, action) => {
      state.doneCompanySignup = true
    });
    builder.addCase(thunks.doCompanySignUp.rejected, (state, action: any) => {
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: "error",
          text1: action.payload.data.error,
        })
      } else {
        Toast.show({
          type: "error",
          text1: action.payload.data.message,
        })
      }
    });
  }
});

const Auth = {
  thunks,
  slice,
  logout: slice.actions.LOG_OUT,
  changecurrentUser: slice.actions.changecurrentUser,
  doneIndividualSignup: slice.actions.changeDoneIndvidualSignup,
  doneCompanySignup: slice.actions.changeDoneCompanySignup,
  changedoneForget: slice.actions.changedoneForget,
  changeDoneVerified: slice.actions.changeDoneVerified,
  actions,
};

export const selectType = (state: RootState) => state.auth.user?.type;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectAuth = (state: RootState) => state.auth.logged;
export const selectCompanySignup = (state: RootState) => state.auth.doneCompanySignup;
export const selectIndividualSignup = (state: RootState) => state.auth.doneIndvidualSignup;
export const selectDoneForget = (state: RootState) => state.auth.doneForget;
export const selectDoneVerified = (state: RootState) => state.auth.doneVerified;

export default Auth;
