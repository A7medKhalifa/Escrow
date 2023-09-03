import { EntityKeys } from '../schema';
import { createSlice } from '@reduxjs/toolkit';
import thunks from './thunks';
import { RootState } from '../store';
import * as actions from './actions';
import { initialState } from './types';
import Toast from 'react-native-toast-message';


const slice = createSlice({
  name: EntityKeys.USERS,
  initialState: initialState,
  reducers: {
    LOG_OUT: () => initialState,
    changecAccepted: (state, action) => { state.Accepted = action.payload; },
    changecRejected: (state, action) => { state.Rejected = action.payload; },
    changeCreated: (state, action) => { state.created = action.payload; },
    changeUploaded: (state, action) => { state.uploaded = action.payload; },
    changeInvited: (state, action) => { state.invited = action.payload; },
  },
  extraReducers: builder => {
    //getHome
    builder.addCase(thunks.getHome.fulfilled, (state, action) => {
      state.HomeData = action.payload?.data
    });
    builder.addCase(thunks.getHome.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.message,
      })
    });


    //createEscrow
    builder.addCase(thunks.createEscrow.fulfilled, (state, action) => {
      if (action.payload.status == 0) {
        Toast.show({
          type: "error",
          text1: action.payload.error,
        })
      } else {
        state.created = true
        // state.id=
        // Toast.show({
        //   type: "success",
        //   text1: action.payload.message,
        // })
      }

    });
    builder.addCase(thunks.createEscrow.rejected, (state, action: any) => {
      console.log(action.payload)
      Toast.show({
        type: "error",
        text1: action.payload.message,
      })
    });

    //getUsers
    builder.addCase(thunks.getUsers.fulfilled, (state, action) => {
      state.users = action.payload?.data
    });
    builder.addCase(thunks.getUsers.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.message,
      })
    });


    //myReceivedInvitation
    builder.addCase(thunks.myReceivedInvitation.fulfilled, (state, action) => {
      if (action.payload?.data?.length == undefined) {
        state.InvitationEscrow = action.payload?.data
      } else {
        state.ReceivedInvitations = action.payload?.data
      }
    });
    builder.addCase(thunks.myReceivedInvitation.rejected, (state, action: any) => {
    });

    //RseponseInvitation
    builder.addCase(thunks.RseponseInvitation.fulfilled, (state, action) => {
      console.log(action.payload)
      if (action.payload?.message?.includes('rejected')) {
        state.Rejected = true
        state.Accepted = false
        Toast.show({
          type: "success",
          text1: action.payload.message,
        })
      } else {
        state.Accepted = true
        state.Rejected = false
      }
    });
    builder.addCase(thunks.RseponseInvitation.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.message,
      })
    });


    //myReceivedInvitation
    builder.addCase(thunks.myEscrows.fulfilled, (state, action) => {

      if (action.payload?.data?.length == undefined) {
        state.EscrowDetails = action.payload?.data
      } else {
        state.MyEscrows = action.payload?.data
      }
    });
    builder.addCase(thunks.myEscrows.rejected, (state, action: any) => {
    });

    //getMilestone
    builder.addCase(thunks.getMilestone.fulfilled, (state, action) => {
      state.milestone = action.payload?.data
    });
    builder.addCase(thunks.getMilestone.rejected, (state, action: any) => {
    });

    //getMilestone
    builder.addCase(thunks.updateMilestone.fulfilled, (state, action) => {
      if (action.payload.status == 1) {
        state.uploaded = true
      }
    });
    builder.addCase(thunks.updateMilestone.rejected, (state, action: any) => {
      Toast.show({
        type: "error",
        text1: action.payload.message,
      })
    });



    //getMilestone
    builder.addCase(thunks.inviteToEscrow.fulfilled, (state, action) => {
      if (action.payload.status == 1) {
        state.invited = true
        Toast.show({
          type: "success",
          text1: action.payload.message,
        })
      }else{
        Toast.show({
          type: "error",
          text1: action.payload.error,
        })
      }
    });
    builder.addCase(thunks.inviteToEscrow.rejected, (state, action: any) => {
    console.log(action.payload)
      Toast.show({
        type: "error",
        text1: action.payload.message,
      })
    });

  }
});

const User = {
  thunks,
  slice,
  logout: slice.actions.LOG_OUT,
  changeRejected: slice.actions.changecRejected,
  changeAccepted: slice.actions.changecAccepted,
  changeUploaded: slice.actions.changeUploaded,
  changeInvited: slice.actions.changeInvited,
  changeCreated: slice.actions.changeCreated,
  actions,
};

export const selectHomeData = (state: RootState) => state.users.HomeData;
export const selectAllUsers = (state: RootState) => state.users.users;
export const selectReceivedInvitations = (state: RootState) => state.users.ReceivedInvitations;
export const selectInvitationEscrow = (state: RootState) => state.users.InvitationEscrow;
export const selectAccepted = (state: RootState) => state.users.Accepted;
export const selectRejected = (state: RootState) => state.users.Rejected;
export const selectCreated = (state: RootState) => state.users.created;
export const selectMyEscrows = (state: RootState) => state.users.MyEscrows;
export const selectEscrowDetails = (state: RootState) => state.users.EscrowDetails;
export const selectMilestone = (state: RootState) => state.users.milestone;
export const selectUploaded = (state: RootState) => state.users.uploaded;
export const selectInvited = (state: RootState) => state.users.invited;


export default User;
