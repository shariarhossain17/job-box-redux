import apiSlice from "../api/apiSlice";

const jobAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postJob: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/job",
        body: data,
      }),
    }),
  }),
});

export const { usePostJobMutation } = jobAPi;
