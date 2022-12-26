import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
const initialState = {
  email: "",
  role: "",
  isLoading: true,
  isError:false,
  error: "",
};

export const createUser = createAsyncThunk(
  "auth/create",
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);
export const googleLogin = createAsyncThunk("auth/googleLogin", async () => {
  const provider = new GoogleAuthProvider();

  const data = await signInWithPopup(auth, provider);
  return data.user.email;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.email = payload;
        state.error = "";
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.email = "";
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.email = payload;
        state.error = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.email = "";
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(googleLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(googleLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.email = payload;
        state.error = "";
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.email = "";
        state.isError = true;
        state.error = action.error.message;
      });
  },
  reducers: {
    logOut: (state) => {
      state.email = "";
    },
    setUser: (state, { payload }) => {
      state.email = payload;
      state.isLoading = false;
    },
  },
});

export const { logOut, setUser } = authSlice.actions;
export default authSlice.reducer;
