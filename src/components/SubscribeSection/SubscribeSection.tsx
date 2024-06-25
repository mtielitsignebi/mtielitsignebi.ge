import React from "react";
import PropTypes from "prop-types";
import { Platform } from "../../hooks/usePlatform";
import { StyledSubscribeSection } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { Pencilicon2 } from "../../icons/Pencilicon2";
import { Envelopeicon1 } from "../../icons/Envelopeicon1";

interface Props {
  platform: string;
}

export const SubscribeCard = ({ platform }: Props): JSX.Element => {
  return (
    <StyledSubscribeSection platform={platform}>
      <div className="SBC-wrapper">
        <div className="SBC-content">
          <h3 className="SBC-heading">გამოიწერე სიახლეები</h3>
          <p className="SBC-text">
            მიიღე ინფორმაცია ჩვენი დაგეგმილი და შესრულებული მოგზაურობების
            შესახებ
          </p>
          <div className="SBC-form-wrapper">
            <Input
              className=""
              label="მეილი"
              message={false}
              override={<Pencilicon2 className="" />}
              stateProp="default"
              icon={true}
            />
            <Button
              className=""
              icon={false}
              style="default"
              text="გამოიწერე"
            />
          </div>
        </div>
        <img
          className="SBC-image"
          alt="Image"
          src="https://c.animaapp.com/X9C4eF1s/img/image-3.png"
        />
      </div>
      <div className="SBC-envelope-icon-wrapper">
        <Envelopeicon1 className="SBC-envelope-icon" />
      </div>
    </StyledSubscribeSection>
  );
};

SubscribeCard.propTypes = {
  platform: PropTypes.oneOf(Object.values(Platform)),
};