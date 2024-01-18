import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3000/api";

export const userRegister = createAsyncThunk("/auth/register", async (body) => {
  await axios.post("/auth/register", body);
});
