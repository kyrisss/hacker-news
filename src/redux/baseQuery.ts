import { StoryTypes } from "@constants/stories";
import { Item, TransformItem } from "@models/item";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://hacker-news.firebaseio.com/v0/",
});

export const hackerApi = createApi({
  reducerPath: "hackerApi",
  baseQuery,
  endpoints: (build) => ({
    getStories: build.query<number[], StoryTypes>({
      query: (storyType) => ({
        url: `/${storyType}.json?print=pretty`,
      }),
      transformResponse: (data: number[]) => data.slice(0, 100).sort((a, b) => b - a),
    }),
    getItem: build.query<TransformItem, number>({
      query: (id) => ({
        url: `item/${id}.json?print=pretty`,
      }),
      transformResponse: (item: Item) => ({
        ...item,
        time: new Date((item?.time || 1) * 1000).toLocaleString("ru-RU"),
      }),
    }),
  }),
});

export const { useGetStoriesQuery } = hackerApi;
export const { useGetItemQuery } = hackerApi;
export const { useLazyGetItemQuery } = hackerApi;
