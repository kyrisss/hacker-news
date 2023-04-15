import { StoryTypes } from "@constants/stories";
import { Item } from "@models/item";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://hacker-news.firebaseio.com/v0/",
});

export const hackerApi = createApi({
  reducerPath: "hackerApi",
  baseQuery,
  endpoints: (build) => ({
    getStories: build.query<number[], StoryTypes>({
      query: (storyType) => {
        console.log({ storyType });
        return {
          url: `/${storyType}.json?print=pretty`,
        };
      },
      transformResponse: (data: number[]) => data.slice(0, 100),
    }),
    getItem: build.query<Item, number>({
      query: (id) => ({
        url: `item/${id}.json?print=pretty`,
      }),
    }),
  }),
});

export const { useGetStoriesQuery } = hackerApi;
export const { useGetItemQuery } = hackerApi;
