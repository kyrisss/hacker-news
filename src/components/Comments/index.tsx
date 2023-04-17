import React from "react";
import { Comment } from "@components/Comments/Comment";
import { RefetchBar } from "@components/Refetch";
import { useCountComments } from "@hooks/useCountComments";
import Skeleton from "react-loading-skeleton";

interface CommentsProps {
  ids: number[];
  refetch: () => void;
}

export const Comments: React.FC<CommentsProps> = ({ ids, refetch }) => {
  const { countComments, isLoading } = useCountComments(ids);
  const mapComments = ids.map((id) => <Comment key={id} id={id} />);

  return (
    <div className="article__comments comments">
      <div className="comments__title">
        Comments: (<span>{isLoading ? <Skeleton width={50} inline /> : countComments}</span>)
      </div>
      <RefetchBar className="comments__refetch" refetch={refetch} />
      <div className="comments__items">{mapComments}</div>
    </div>
  );
};
