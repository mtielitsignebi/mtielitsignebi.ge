import React from "react";
import { useNavigate } from "react-router";
import * as SC from "./styles";
import { usePlatform } from "../../hooks";
import { Layout } from "../../components/Layout";
import { IconError } from "../../icons";
import { ErrorIcon } from "./icon";

export const ErrorPage = (): JSX.Element => {
  const navigate = useNavigate();
  const platform = usePlatform();

  return (
    <Layout>
      <SC.Container>
        <ErrorIcon />
        <SC.ErrorTitle>გვერდი არ მოიძებნა</SC.ErrorTitle>
        <SC.ErrorText>
          სამწუხაროდ, თქვენს მიერ მოთხოვნილი გვერდი არ მოიძებნა. გთხოვთ, სცადოთ
          თავიდან ან დაბრუნდეთ მთავარ გვერდზე.
        </SC.ErrorText>
        <SC.ErrorAction text='მთავარზე დაბრუნება' style="default"/>
      </SC.Container>
    </Layout>
  );
};
