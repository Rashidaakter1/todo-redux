import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    getTodo: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append("priority", priority);
        }
        return {
          url: "/todos",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        console.log("inside addtodo", data);
        return {
          url: "/todos",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["todo"],
    }),
    updateTodo: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/todo/${data.id}`,
          method: "PUT",
          body: data.body,
        };
      },
      invalidatesTags: ["todo"],
    }),
    removeTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/todo/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const {
  useGetTodoQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useRemoveTodoMutation,
} = baseApi;
