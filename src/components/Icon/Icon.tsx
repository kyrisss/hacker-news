import React, { FC } from "react";
import { IconTypeMap, IconTypes } from "./IconsLib";

export interface IconProps {
  className?: string;
  disabled?: boolean;
  icon: IconTypes;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  size?: number;
  title?: string;
  id?: string;
}

export enum IconSize {
  SMALL = 24,
  MEDIUM = 28,
  LARGE = 32,
  EXTRA_LARGE = 48,
}

export const Icon: FC<IconProps> = ({ icon, className, size = IconSize.SMALL, title, disabled, onClick, id, ...rest }) => {
  const IconComponent = IconTypeMap[icon];

  if (IconComponent) {
    return <IconComponent {...rest} id={id} className={className} size={size} title={title} onClick={!disabled ? onClick : null} />;
  } else {
    return <span>NoIcon</span>;
  }
};
