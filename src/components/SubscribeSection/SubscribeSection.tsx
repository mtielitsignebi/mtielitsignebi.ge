import React from "react";
import PropTypes from "prop-types";
import { Platform } from "../../hooks/usePlatform";
import {
  Content,
  EnvelopeIcon,
  Form,
  Heading,
  Image,
  StyledSubscribeSection,
  Text,
} from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { Pencilicon2 } from "../../icons/Pencilicon2";

interface Props {
  platform: string;
}

export const SubscribeCard = ({ platform }: Props): JSX.Element => {
  return (
    <StyledSubscribeSection platform={platform}>
      <Content platform={platform}>
        <Heading platform={platform}>გამოიწერე სიახლეები</Heading>
        <Text platform={platform}>
          მიიღე ინფორმაცია ჩვენი დაგეგმილი და შესრულებული მოგზაურობების შესახებ
        </Text>
        <Form platform={platform}>
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
        </Form>
      </Content>
      <Image
        platform={platform}
        alt="Image"
        src="https://c.animaapp.com/X9C4eF1s/img/image-3.png"
      />
      <EnvelopeIcon platform={platform} />
    </StyledSubscribeSection>
  );
};

SubscribeCard.propTypes = {
  platform: PropTypes.oneOf(Object.values(Platform)),
};
