import { Icon } from "@components/Icon/Icon";
import { IconTypes } from "@components/Icon/IconsLib";
import { useGetItemQuery } from "@redux/baseQuery";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ItemPage = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const { data } = useGetItemQuery(Number(id), { skip: !id });

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
      {/* <div className="itemPage__refetch refetch">
        <Icon icon={IconTypes.REFETCH} className="refetch__icon" onClick={refetch} />
      </div> */}
      div.itemPage
    </div>
  );
};

// Страница новости
// • Должна содержать:
//  ⁃ ссылку на новость
//  ⁃ заголовок новости
//  ⁃ дату
//  ⁃ автора
//  ⁃ счётчик количества комментариев
//  ⁃ список комментариев в виде дерева
// • Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой
// • На странице должна быть кнопка для принудительного обновления списка комментариев
// • На странице должна быть кнопка для возврата к списку новостей
