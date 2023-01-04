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
    getJob: builder.query({
      query: () => ({
        url: "/job",
      }),
    }),
    getJobById: builder.query({
      query: (id) => ({
        url: `/job/${id}`,
      }),
    }),
  }),
});

export const { usePostJobMutation, useGetJobByIdQuery, useGetJobQuery } =
  jobAPi;
