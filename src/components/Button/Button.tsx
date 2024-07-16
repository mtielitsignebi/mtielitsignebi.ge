import React from "react";
import { Usericon1 } from "../../icons/Usericon1";
import * as SC from "./styles";

interface Props {
  text: string;
  icon?: boolean;
  style: "ghost" | "default" | "outline";
  className?: any;
  override?: JSX.Element;
  textClassName?: any;
  onClick?: () => void;
}

export const Button = ({
  text = "ლეიბლი",
  icon = true,
  style = "default",
  className,
  override = <Usericon1 className="user-icon" />,
  textClassName,
  onClick,
}: Props): JSX.Element => {
  return (
    <SC.Container className={`${style} ${className}`} onClick={onClick}>
      {icon && <>{override}</>}

      <SC.Text className={`text-wrapper ${textClassName ?? ""}`}>
        {text}
      </SC.Text>
    </SC.Container>
  );
};
