import { useDispatch } from "react-redux";
import BaseModalWrap from "../ModalWrap/ModalWrap";
import { Btn, Text, Window, WrapBtn } from "./Logout.styled";
import { logout } from "../../../redux/user/operations";

export const Logout = ({ onClose }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };
  return (
    <BaseModalWrap onClose={onClose}>
      <Window>
        <Text>Are you sure you want to log out?</Text>
        <WrapBtn>
          <Btn onClick={handleLogout} type="button">
            Yes
          </Btn>
          <Btn id="closeBtn" type="button">
            Cancel
          </Btn>
        </WrapBtn>
      </Window>
    </BaseModalWrap>
  );
};
