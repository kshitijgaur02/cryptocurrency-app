import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "b1ab21c78amsh85c121d786e05c6p1e8dd7jsn79f5e5592fb2",
};

const baseUrl = "https://coinranking1.p.rapidapi.com/stats";

const createRequest = (url) => ({ url, header: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});
