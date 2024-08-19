import styled from "styled-components";
import { colors } from "../../../constants/colors";
import { ErrorMessage, Field, Form } from "formik";

export const Window = styled.div`
  position: relative;
  width: 600px;
  border-radius: 10px;
  padding: 72px 48px 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: ${colors.WHITE};
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const WrapField = styled.div`
  position: relative;
  padding-bottom: 8px;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const InputField = styled(Field)`
  padding: 12px 10px;
  position: relative;
  text-align: center;
  border: 1px solid transparent;
  border-bottom: 1px solid ${colors.GREY};
  outline: none;
  font-size: 24px;
  line-height: 1.25;
  width: 100%;

  &.error {
    border-bottom: 1px solid ${colors.RED};
    color: ${colors.RED};
  }
`;
export const SaveBtn = styled.button`
  cursor: pointer;
  padding: 8px 30px;
  border-radius: 10px;
  background-color: transparent;
  border: none;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.34);
  color: ${colors.BLACK};
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: 1.9px;
  width: 100%;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.54);
  }
  &:active {
    box-shadow: none;
  }
`;
export const ErrMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  color: ${colors.RED};
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 1.9px;
  text-align: center;
  transform: translate(-50%, 100%);
`;
export const SwitchBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${colors.BLUE};
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: 1.9px;
  text-align: center;
  text-decoration: underline;
`;
