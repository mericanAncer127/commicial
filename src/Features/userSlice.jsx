import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginInfo: {
    username: "Lily Watson",
    emailOrPhone: "lily.wastons@gmail.com",
    password: "random-password1234",
  },
  isSignIn: true,
  usersData: [
    {
      username: "Lily Watson",
      emailOrPhone: "lily.wastons@gmail.com",
      password: "random-password1234",
    },
  ],
};

const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    newSignUp: (state, { payload }) => {
      state.usersData = [...state.usersData, { ...payload }];
      state.isSignIn = true;
    },
    setLoginData: (state, { payload }) => {
      state.loginInfo = { ...payload };
      state.isSignIn = true;
    },
    signOut: (state, _) => {
      state.loginInfo = {
        username: "Guest",
        emailOrPhone: "",
        password: "",
      };
      state.isSignIn = false;
    },
  },
});

export const { newSignUp, setLoginData, signOut } = userSlice.actions;
export default userSlice.reducer;
