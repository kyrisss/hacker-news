import { useCountComments } from "@hooks/useCountComments";
import React from "react";

interface CounterCommentsProps {
  ids: number[];
}

export const CounterComments: React.FC<CounterCommentsProps> = ({ ids }) => {
  const { countComments } = useCountComments(ids);

  return <span>{countComments}</span>;
};
