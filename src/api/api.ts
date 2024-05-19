import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Episodes } from "./types";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (builder) => ({
    getEpisodes: builder.query<Episodes, void>({
      query: () => `episode`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEpisodesQuery } = api;
