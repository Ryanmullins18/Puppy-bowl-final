import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const puppyBowlApi = createApi({
  reducerPath: "puppyBowlApi",
 baseQuery: fetchBaseQuery({
    baseUrl:"https://fsa-puppy-bowl.herokuapp.com/api/2403-ftb-et-web-PT/players",
  }),
      
  endpoints: (builder) => ({
    fetchPlayers: builder.query({
     query: () => "/",
     providesTags: ["players"],
    }),
    
    

    addPlayer: builder.mutation({
     query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["players"],

  }),
    fetchPlayer: builder.query({
      query: (id)=>`/${id}`,
    }),
    deletePlayer: builder.mutation({
      query: (id)=> ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["players"],
  }),
}),
});
export const { useFetchPlayersQuery, useAddPlayerMutation, useFetchPlayerQuery, useDeletePlayerMutation } = puppyBowlApi;