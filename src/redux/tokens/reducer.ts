import { createReducer } from '@reduxjs/toolkit';
import Auth from 'redux/auth';

const initialState = {
  token: null,
};

const tokenReducer = createReducer(initialState, builder => {
  builder.addCase(Auth.thunks.doSignIn.fulfilled, (state, action) => {
    if (action.payload.data) {
      const token = action.payload.data.token;
      state.token = token;
    }
  });

  builder.addCase(Auth.thunks.changePassword.fulfilled, (state, action) => {
    if (action.payload.data) {
      const token = action.payload.data.token;
      state.token = token;
    }
  });
});

export default tokenReducer;
