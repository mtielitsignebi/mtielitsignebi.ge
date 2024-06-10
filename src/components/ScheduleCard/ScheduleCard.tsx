import React from "react";
import styled from "styled-components";
import { Calendaricon } from "../../icons/Calendaricon";
import { Locationicon3 } from "../../icons/Locationicon3";

interface Props {
  className: any;
}

const StyledScheduleCard = styled.div`
  align-items: flex-start;
  background-color: #77d07f;
  border-radius: 16px;
  box-shadow: 0px 4px 8px #3a88414c;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 32px;
  position: relative;
  width: 400px;

  & .title {
    color: #000d38;
    font-family: var(--title-XS-font-family);
    font-size: var(--title-XS-font-size);
    font-style: var(--title-XS-font-style);
    font-weight: var(--title-XS-font-weight);
    letter-spacing: var(--title-XS-letter-spacing);
    line-height: var(--title-XS-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .schedule {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    margin-right: -16px;
    padding: 0px 0px 7.63e-6px;
    position: relative;
    width: 352px;
  }

  & .item-2 {
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    gap: 16px;
    position: relative;
    width: 352px;
  }

  & .icon {
    align-items: center;
    background-color: #ffffff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    padding: 10px;
    position: relative;
    width: 56px;
    z-index: 1;
  }

  & .icon-instance-node {
    object-fit: cover !important;
    position: relative !important;
    width: 36px !important;
  }

  & .content {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 4px;
    position: relative;
    z-index: 0;
  }

  & .title-2 {
    color: #000d38;
    font-family: var(--subtitle-font-family);
    font-size: var(--subtitle-font-size);
    font-style: var(--subtitle-font-style);
    font-weight: var(--subtitle-font-weight);
    letter-spacing: var(--subtitle-letter-spacing);
    line-height: var(--subtitle-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .text-wrapper-2 {
    color: #000d38cc;
    font-family: "Noto Serif Georgian", Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 22.4px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const ScheduleCard = ({ className }: Props): JSX.Element => {
  return (
    <StyledScheduleCard className={`schedule-card ${className}`}>
      <div className="title">შემდეგი მოგზაურობა</div>
      <div className="schedule">
        <div className="item-2">
          <div className="icon">
            <Calendaricon className="icon-instance-node" />
          </div>
          <div className="content">
            <div className="title-2">თარიღი</div>
            <div className="text-wrapper-2">22 სექტემბერი, 2023</div>
          </div>
        </div>
        <div className="item-2">
          <div className="icon">
            <Locationicon3 className="icon-instance-node" />
          </div>
          <div className="content">
            <div className="title-2">ლოკაცია</div>
            <div className="text-wrapper-2">აჭარა</div>
          </div>
        </div>
      </div>
    </StyledScheduleCard>
  );
};
