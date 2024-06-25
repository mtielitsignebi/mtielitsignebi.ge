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
        <div className="SBC-content">
          <h3 className="SBC-content-heading">გამოიწერე სიახლეები</h3>
          <p className="SBC-content-text">
            მიიღე ინფორმაცია ჩვენი დაგეგმილი და შესრულებული მოგზაურობების
            შესახებ
          </p>
          <div className="SBC-form-container">
            <Input
              className="SBC-form-input"
              label="მეილი"
              message={false}
              override={<Pencilicon2 className="" />}
              stateProp="default"
              icon={true}
            />
            <Button
              className="SBC-form-button"
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
        <Envelopeicon1 className="SBC-envelope-icon" size={platform !== 'web' ? '40' : '40'
        } />
    </StyledSubscribeSection>
  );
};

SubscribeCard.propTypes = {
  platform: PropTypes.oneOf(Object.values(Platform)),
};
