import axiosInstance, { createCancelToken } from "@/utils/common/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse, CancelTokenSource } from "axios";

let cancelSource: CancelTokenSource;

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  if (cancelSource) {
    cancelSource.cancel("Operation canceled due to new request.");
  }
  const { source, cancelToken } = createCancelToken();
  cancelSource = source;

  const response: AxiosResponse = await axiosInstance.get("/data", {
    cancelToken,
  });
  return response.data.json();
});
