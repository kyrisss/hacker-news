import { useGetItemQuery } from "@redux/baseQuery";
import { ROUTES } from "src/routes/config";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link, generatePath } from "react-router-dom";

interface ItemProps {
  id: number;
}

export const Item: React.FC<ItemProps> = ({ id }) => {
  const { data, isLoading } = useGetItemQuery(id, { skip: !id });

  const linkToItem = generatePath(ROUTES.ITEM, { id });

  return (
    <>
      <Link to={linkToItem} className="item">
        <div className="item__head head">
          {isLoading ? (
            <Skeleton width={300} height={20} count={2} />
          ) : (
            <>
              <div className="head__title">{data?.title || ""}</div>
              <div className="head__author">{`by ${data?.by}`}</div>
            </>
          )}
        </div>
        <div className="item__options options">
          {isLoading ? (
            <Skeleton width={200} />
          ) : (
            <>
              <div className="options__rating">{`${data?.score} points`}</div>
              <div className="options__date">{data?.time}</div>
              <div className="options__comments">{`${data?.kids?.length || 0} comments`}</div>
            </>
          )}
        </div>
      </Link>
    </>
  );
};
