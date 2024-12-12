import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  loggedIn: boolean;
}

const initialState: UserState = {
  name: '',
  loggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.name = action.payload.name;
      state.loggedIn = true;
    },
    logOut: (state) => {
      state.name = '';
      state.loggedIn = false;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
