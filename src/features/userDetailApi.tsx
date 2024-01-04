import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/studennt.model";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://65784a9df08799dc8044d036.mockapi.io/',
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => "/crud-rtk",
            providesTags: ["User"]
        }),
        editUser: builder.query<User, string>({
            query: (id) => `/crud-rtk/${id}`,
            providesTags: ["User"]
        }),
        addUser: builder.mutation<void, User>({
            query: (student) => ({
                url: "/crud-rtk",
                method: "POST",
                body: student,
            }),
            invalidatesTags: ["User"],
        }),
        deleteUser: builder.mutation<void, string>({
            query: (id) => ({
                url: `/crud-rtk/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["User"],
        }),

    })
})

export const { useGetUsersQuery, useEditUserQuery, useAddUserMutation, useDeleteUserMutation } = userApi;