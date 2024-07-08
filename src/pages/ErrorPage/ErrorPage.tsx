import React from "react";
import { useNavigate } from "react-router";
import * as SC from "./styles";
import { Layout } from "../../components/Layout";
import { IconError } from "../../icons";

export const ErrorPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Layout>
      <SC.Container>
        <IconError />
        <SC.ErrorTitle>გვერდი არ მოიძებნა</SC.ErrorTitle>
        <SC.ErrorText>
          სამწუხაროდ, თქვენს მიერ მოთხოვნილი გვერდი არ მოიძებნა. გთხოვთ, სცადოთ
          თავიდან ან დაბრუნდეთ მთავარ გვერდზე.
        </SC.ErrorText>
        <SC.ErrorAction text="მთავარზე დაბრუნება" style="default" onClick={() => navigate('/home')}/>
      </SC.Container>
    </Layout>
  );
};
