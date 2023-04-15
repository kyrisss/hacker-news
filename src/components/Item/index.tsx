import { useGetItemQuery } from "@redux/baseQuery";
import React from "react";

interface ItemProps {
  id: number;
}

export const Item: React.FC<ItemProps> = ({ id }) => {
  const { data } = useGetItemQuery(id, { skip: !id });

  return <div>{data?.id || ""}</div>;
};
