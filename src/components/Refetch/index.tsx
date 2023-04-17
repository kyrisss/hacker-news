import { Icon } from "@components/Icon/Icon";
import { IconTypes } from "@components/Icon/IconsLib";
import React from "react";
import cn from "classnames";

interface RefetchBarProps {
  refetch: () => void;
  className?: string;
}

export const RefetchBar: React.FC<RefetchBarProps> = ({ refetch, className = "" }) => (
  <div className={cn(className, "refetch")}>
    <Icon icon={IconTypes.REFETCH} className="refetch__icon" onClick={refetch} />
  </div>
);
