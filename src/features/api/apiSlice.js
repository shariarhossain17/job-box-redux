import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const appSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({}),
    endpoints:(builder) => {
        
    }
})