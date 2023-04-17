import React from "react";
import Skeleton from "react-loading-skeleton";
import cn from "classnames";

interface AuthorProps {
  by: string;
  date: string;
  isLoading?: boolean;
  className?: string;
}

export const Author: React.FC<AuthorProps> = ({ by, date, className = "", isLoading = false }) => (
  <div className={cn("author", className)}>
    <div className="author__avatar">
      <Skeleton circle width={50} height={50} />
    </div>
    <div className="author__info">
      {isLoading ? (
        <Skeleton width={200} count={2} />
      ) : (
        <>
          <div className="author__info_name">{`by ${by}`}</div>
          <div className="author__info_date">{date}</div>
        </>
      )}
    </div>
  </div>
);
