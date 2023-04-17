import { Item } from "@components/Item";
import { RefetchBar } from "@components/Refetch";
import { StoryTypes } from "@constants/stories";
import { useGetStoriesQuery } from "@redux/baseQuery";
import React from "react";
import { useParams } from "react-router-dom";

export const MainPage = () => {
  const { storyType = StoryTypes.TOP } = useParams();
  const { data: storyIds = [], refetch } = useGetStoriesQuery(storyType as StoryTypes, { pollingInterval: 60000 });

  const mapStories = storyIds.map((id) => <Item key={id} id={id} />);

  return (
    <div className="section stories">
      <RefetchBar className="stories__refetch" refetch={refetch} />
      <div className="stories__list">{mapStories}</div>
    </div>
  );
};
