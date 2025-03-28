import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "https://reqres.in/api";

// Thunks for async actions
export const loginUser = createAsyncThunk("user/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    localStorage.setItem("token", response.data.token);
    return response.data.token;
  } catch (error) {
    console.log(error);
    return rejectWithValue("Invalid credentials");
  }
});

export const fetchUsers = createAsyncThunk("user/fetchUsers", async (page) => {
  const response = await axios.get(`${API_BASE_URL}/users?page=${page}`);
  return response.data.data;
});

export const updateUser = createAsyncThunk("user/updateUser", async ({ id, userData }) => {
  await axios.put(`${API_BASE_URL}/users/${id}`, userData);
  return userData;
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  await axios.delete(`${API_BASE_URL}/users/${id}`);
  return id;
});

const userSlice = createSlice({
  name: "user",
  initialState: { token: localStorage.getItem("token") || null, users: [], error: null },
  reducers: {
    logout: (state) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.token = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = state.users.map((user) => (user.id === action.payload.id ? action.payload : user));
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
