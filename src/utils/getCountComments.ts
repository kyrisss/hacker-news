import { Item } from "@models/item";

export const getCountComments = async (getComment: any, ids: number[]): Promise<number> => {
  if (ids.length) {
    const comments: Item[] = await Promise.all(ids.map((id) => getComment(id).unwrap()));
    const filteredComments = comments.filter((comment) => !comment.deleted);
    const flatComments = filteredComments.filter((comment) => comment.kids && !comment.deleted).flatMap((comment) => comment?.kids) as number[];
    const kids = await getCountComments(getComment, flatComments);
    return new Promise((res) => res(filteredComments.length + kids));
  } else {
    return new Promise((res) => res(0));
  }
};
