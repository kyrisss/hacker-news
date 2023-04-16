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
  const { data: item, isLoading } = useGetItemQuery(Number(id), { skip: !id });

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
        <div className="article__head head">
          {isLoading ? (
            <Skeleton width={200} count={2} />
          ) : (
            <>
              <div className="head__author">{`by ${item?.by || ""}`}</div>
              <div className="head__date">{item?.time || ""}</div>
            </>
          )}
        </div>
        <div className="article__title title">
          <h1 className="title__name">{isLoading ? <Skeleton /> : item?.title}</h1>
          <a href={item?.url} className="title__url">
            {item?.url}
          </a>
        </div>
        {isLoading ? <Skeleton width={200} /> : <Comments ids={item?.kids || []} />}
      </div>
    </div>
  );
};

//  ⁃ счётчик количества комментариев
// • На странице должна быть кнопка для принудительного обновления списка комментариев
