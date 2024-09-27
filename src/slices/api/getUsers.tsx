import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
    _id: string;
  username: string;
  profileImage?: string;
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/users' }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
