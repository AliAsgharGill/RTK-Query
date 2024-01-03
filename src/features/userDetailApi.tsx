import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/studennt.model";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://65784a9df08799dc8044d036.mockapi.io/',
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => "/CRUD"
        }),
    })
})

export const { useGetUsersQuery } = userApi;