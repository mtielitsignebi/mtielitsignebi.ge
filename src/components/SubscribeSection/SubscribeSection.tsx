import React from "react";
import * as SC from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { Pencilicon2 } from "../../icons/Pencilicon2";
import { Platform } from "../../hooks/usePlatform";
import { IconEnvelope } from "../../icons";

interface Props {
  platform: Platform;
}

export const SubscribeCard = ({ platform }: Props): JSX.Element => {
  return (
    <SC.Container platform={platform}>
      <SC.Content platform={platform}>
        <SC.Heading platform={platform}>გამოიწერე სიახლეები</SC.Heading>
        <SC.Text platform={platform}>
          მიიღე ინფორმაცია ჩვენი დაგეგმილი და შესრულებული მოგზაურობების შესახებ
        </SC.Text>
        <SC.Form platform={platform}>
          <Input
            className="form-input"
            label="მეილი"
            message={false}
            override={<Pencilicon2 className="" />}
            stateProp="default"
            icon={true}
          />
          <Button
            className="form-button"
            icon={false}
            style="default"
            text="გამოიწერე"
          />
        </SC.Form>
      </SC.Content>
      <SC.Image
        platform={platform}
        alt="Image"
        src="https://c.animaapp.com/X9C4eF1s/img/image-3.png"
      />
      <SC.IconWrapper platform={platform}>
        <IconEnvelope />
      </SC.IconWrapper>
    </SC.Container>
  );
};
