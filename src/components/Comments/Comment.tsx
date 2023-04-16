import React, { useEffect, useState } from "react";
import { useGetItemQuery } from "@redux/baseQuery";
import Skeleton from "react-loading-skeleton";
import parse from "html-react-parser";

interface CommentProps {
  id: number;
}

export const Comment: React.FC<CommentProps> = ({ id }) => {
  const { data: comment, isLoading } = useGetItemQuery(id, { skip: !id, refetchOnMountOrArgChange: true });
  const [isExpand, setIsExpand] = useState(false);
  const kids = comment?.kids;

  const toggleExpand = () => {
    if (isExpand) {
      setIsExpand(false);
    } else {
      setIsExpand(true);
    }
  };

  const expandHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleExpand();
  };

  useEffect(() => {
    if (isExpand) {
    }
  }, [isExpand]);

  if (comment?.deleted) {
    return null;
  }

  return (
    <>
      <div onClick={expandHandler} className="comment">
        <div className="comment__head head">
          {isLoading ? (
            <Skeleton width={200} count={2} />
          ) : (
            <>
              <div className="head__author">{`by ${comment?.by || ""}`}</div>
              <div className="head__date">{comment?.time || ""}</div>
            </>
          )}
        </div>
        <div className="comment__text">{isLoading ? <Skeleton height={100} /> : parse(comment?.text || "")}</div>

        <div className="comment__replies">{isLoading ? <Skeleton width={200} /> : `${kids?.length || 0} replies`}</div>
      </div>
      {isExpand && kids && (
        <div className="comments__kids comments__items">
          {kids?.map((id) => (
            <Comment key={id} id={id} />
          ))}
        </div>
      )}
    </>
  );
};
