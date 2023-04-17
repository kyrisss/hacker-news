import { hackerApi, useLazyGetItemQuery } from "@redux/baseQuery";
import { getCountComments } from "@utils/getCountComments";
import { useEffect, useState } from "react";

export type GetCommentType = typeof hackerApi.useLazyGetItemQuery;

export const useCountComments = (ids: number[]) => {
  const [getComment] = useLazyGetItemQuery();
  const [countComments, setCountComments] = useState(0);

  useEffect(() => {
    getCountComments(getComment, ids).then((res) => {
      setCountComments(res);
    });
  }, [ids]);

  return { countComments };
};
