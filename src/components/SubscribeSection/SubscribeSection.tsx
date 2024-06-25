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
    <StyledSubscribeSection>
      <div className="card-2">
        <div className="content-2">
          <div className="txt-2">
            <div className="heading">
              <div className="title-3">გამოიწერე სიახლეები</div>
            </div>
            <p className="paragraph">
              მიიღე ინფორმაცია ჩვენი დაგეგმილი და შესრულებული მოგზაურობების
              შესახებ
            </p>
            <div className="form">
              <div className="form-2">
                <Input
                  className="input-instance"
                  label="მეილი"
                  message={false}
                  override={<Pencilicon2 className="pencilicon-2" />}
                  stateProp="default"
                  icon={true}
                />
                <Button
                  className="button-3"
                  icon={false}
                  style="default"
                  text="გამოიწერე"
                />
              </div>
            </div>
          </div>
          <img
            className="image-2"
            alt="Image"
            src="https://c.animaapp.com/X9C4eF1s/img/image-3.png"
          />
        </div>
        <div className="envelope-icon-wrapper">
          <Envelopeicon1 className="envelope-icon" />
        </div>
      </div>
    </StyledSubscribeSection>
  );
};

SubscribeCard.propTypes = {
  platform: PropTypes.oneOf(Object.values(Platform)),
};
