import React from "react";
import { Comment } from "@components/Comments/Comment";

interface CommentsProps {
  ids: number[];
}

export const Comments: React.FC<CommentsProps> = ({ ids }) => {
  const mapComments = ids.map((id) => <Comment key={id} id={id} />);

  return (
    <div className="article__comments comments">
      <div className="comments__title">Comments:</div>
      <div className="comments__items">{mapComments}</div>
    </div>
  );
};
