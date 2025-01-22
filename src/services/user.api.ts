import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Comments, Post, User} from "./types";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getUser: builder.query<User[], void>({
            query: () => `users`,
        }),
        getPosts: builder.query<Post[], void>({
            query: () => `posts`,
        }),
        changePostTitle:builder.mutation<Post, Post>({
            query: (payload) => ({
                url: `posts/${payload.id}`,
                method: 'PUT',
                body: payload,
            }),
        }),
        getComments: builder.query<Comments[], void>({
            query: () => `comments`,
        }),
    }),
})

export const { useGetUserQuery, useGetPostsQuery, useLazyGetCommentsQuery, useChangePostTitleMutation } = userApi