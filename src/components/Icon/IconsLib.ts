import { ElementType } from "react";

import { MdAutorenew } from "react-icons/md";
import { AiOutlineArrowLeft } from "react-icons/ai";

export enum IconTypes {
  REFETCH = "refetch",
  ARROW_LEFT = "arrowLeft",
}

export const IconTypeMap: { [key in IconTypes]: ElementType } = {
  [IconTypes.REFETCH]: MdAutorenew,
  [IconTypes.ARROW_LEFT]: AiOutlineArrowLeft,
};
