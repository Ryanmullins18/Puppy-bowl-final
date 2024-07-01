import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define an API using createApi
export const puppyBowlApi = createApi({
  // Unique string used in constructing Redux action types, state selectors, and React hook names
  reducerPath: "puppyBowlApi",
  // Define a base query function that all endpoints will use as the base of their request
  baseQuery: fetchBaseQuery({
    // The base URL for all requests
    baseUrl:"https://fsa-puppy-bowl.herokuapp.com/api/2403-ftb-et-web-PT/players",
  }),
      
  // Define endpoints for our API service
  endpoints: (builder) => ({
    // Define an endpoint that fetches players
    fetchPlayers: builder.query({
      // The part of the URL that comes after the baseUrl for this specific endpoint
      query: () => "/",
    }),
    addPlayer: builder.mutation({
      //this string will be added to the end of the baseUrl
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
  }),
    fetchPlayer: builder.query({
      query: (id)=>`/${id}`,
    }),
    deletePlayer: builder.mutation({
      query: (id)=> ({
        url: `/${id}`,
        method: "DELETE",
        body,
      }),
  }),
}),
});
// Export hooks for each endpoint - in this case, a React hook that triggers the fetchPlayers query
export const { useFetchPlayersQuery, useAddPlayerMutation, useFetchPlayerQuery, useDeletePlayerMutation } = puppyBowlApi;