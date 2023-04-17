import { Author } from "@components/Author";
import { Comments } from "@components/Comments";
import { Icon } from "@components/Icon/Icon";
import { IconTypes } from "@components/Icon/IconsLib";
import { useGetItemQuery } from "@redux/baseQuery";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate, useParams } from "react-router-dom";

export const ItemPage = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { data: item, isLoading, refetch } = useGetItemQuery(Number(id), { skip: !id, pollingInterval: 60000 });

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="section itemPage">
      <div className="navBack" onClick={goBack}>
        <div className="navBack__icon">
          <Icon icon={IconTypes.ARROW_LEFT} />
        </div>
        <div className="navBack__text">Back to stories</div>
      </div>

      <div className="article">
        <Author className="article__head" isLoading={isLoading} by={item?.by || ""} date={item?.time || ""} />
        <div className="article__title title">
          <h1 className="title__name">{isLoading ? <Skeleton /> : item?.title}</h1>
          <a href={item?.url} className="title__url">
            {item?.url}
          </a>
        </div>
        {isLoading ? <Skeleton width={200} /> : <Comments refetch={refetch} ids={item?.kids || []} />}
      </div>
    </div>
  );
};

//  ⁃ счётчик количества комментариев
