import { Item } from "@components/Item";
import { StoryTypes } from "@constants/stories";
import { useGetStoriesQuery } from "@redux/baseQuery";
import React from "react";
import { useParams } from "react-router-dom";

export const MainPage = () => {
  const { storyType = StoryTypes.TOP } = useParams();
  const { data: storyIds = [] } = useGetStoriesQuery(storyType as StoryTypes, { pollingInterval: 60000 });
  console.log("storyIds", storyIds);

  const mapStories = storyIds.map((id) => <Item key={id} id={id} />);

  return <div>{mapStories}</div>;
};
