import React from "react";
import { useNavigate } from "react-router";
import * as SC from "./styles";
import { usePlatform } from "../../hooks";
import { Layout } from "../../components/Layout";

export const ErrorPage = (): JSX.Element => {
  const navigate = useNavigate();
  const platform = usePlatform();

  return (
    <Layout>
      <SC.Container></SC.Container>
    </Layout>
  );
};
