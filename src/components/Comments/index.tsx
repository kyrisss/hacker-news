import React, { useEffect, useState } from "react";
import { Comment } from "@components/Comments/Comment";
import { RefetchBar } from "@components/Refetch";
import { useCountComments } from "@hooks/useCountComments";
import { getCountComments } from "@utils/getCountComments";

interface CommentsProps {
  ids: number[];
  refetch: () => void;
}

export const Comments: React.FC<CommentsProps> = ({ ids, refetch }) => {
  // const [countComments, setcountComments] = useState(0);
  const { countComments } = useCountComments(ids);
  const mapComments = ids.map((id) => <Comment key={id} id={id} />);

  // useEffect(() => {
  //   (async () => {
  //     const count = await getCountComments(ids);
  //     setcountComments(count);
  //   })();
  // }, [ids]);

  return (
    <div className="article__comments comments">
      <div className="comments__title">{`Comments: (${countComments})`}</div>
      <RefetchBar className="comments__refetch" refetch={refetch} />
      <div className="comments__items">{mapComments}</div>
    </div>
  );
};
