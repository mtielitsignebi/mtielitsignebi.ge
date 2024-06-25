import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import styled from "styled-components";
import { Pencilicon } from "../../icons/Pencilicon";

interface Props {
  icon: boolean;
  label: string;
  message: boolean;
  stateProp: "focused" | "default";
  className: any;
  override: JSX.Element;
}

const StyledInput = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  position: relative;
  width: 100%;

  & .input-field {
    background-color: var(--primitives-white);
    border-radius: 8px;
    display: flex;
    height: 52px;
    position: relative;
    width: 100%;
  }

  & .txt {
    color: var(--zinc-600);
    font-family: var(--label-s-bold-font-family);
    font-size: var(--label-s-bold-font-size);
    font-style: var(--label-s-bold-font-style);
    font-weight: var(--label-s-bold-font-weight);
    letter-spacing: var(--label-s-bold-letter-spacing);
    line-height: var(--label-s-bold-line-height);
    position: relative;
    width: 82%;
  }

  & .label {
    color: var(--zinc-800);
    font-family: var(--label-m-font-family);
    font-size: var(--label-m-font-size);
    font-style: var(--label-m-font-style);
    font-weight: var(--label-m-font-weight);
    letter-spacing: var(--label-m-letter-spacing);
    line-height: var(--label-m-line-height);
    margin-top: -0.5px;
    position: relative;
    width: 282px;
  }

  & .message {
    color: var(--zinc-700);
    font-family: var(--label-s-regular-font-family);
    font-size: var(--label-s-regular-font-size);
    font-style: var(--label-s-regular-font-style);
    font-weight: var(--label-s-regular-font-weight);
    letter-spacing: var(--label-s-regular-letter-spacing);
    line-height: var(--label-s-regular-line-height);
    position: relative;
    width: fit-content;
  }

  & .text-wrapper-3 {
    color: var(--zinc-800);
    font-family: var(--label-s-regular-font-family);
    font-size: var(--label-s-regular-font-size);
    font-style: var(--label-s-regular-font-style);
    font-weight: var(--label-s-regular-font-weight);
    left: 16px;
    letter-spacing: var(--label-s-regular-letter-spacing);
    line-height: var(--label-s-regular-line-height);
    position: absolute;
    top: 3px;
  }

  & .pencil-icon {
    height: 20px !important;
    position: relative !important;
    width: 20px !important;
  }

  & .state-focused {
    align-items: flex-end;
    gap: 6px;
    padding: 0px 16px 10px;
  }

  & .state-default {
    align-items: center;
    gap: 8px;
    padding: 16px;
  }
`;

export const Input = ({
  icon = true,
  label = "სათაური",
  message = true,
  stateProp,
  className,
  override = <Pencilicon className="pencil-icon" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <StyledInput
      className={`input ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`input-field state-${state.state}`}>
        {state.state === "focused" && <div className="txt">თაიფინგ|</div>}

        {state.state === "default" && (
          <>
            <div className="label">{label}</div>
            {icon && <>{override}</>}
          </>
        )}
      </div>
      {message && <div className="message">Message</div>}

      {state.state === "focused" && <div className="text-wrapper-3">{label}</div>}
    </StyledInput>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "click":
      return {
        ...state,
        state: "focused",
      };
  }

  return state;
}

Input.propTypes = {
  icon: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.bool,
  stateProp: PropTypes.oneOf(["focused", "default"]),
};
