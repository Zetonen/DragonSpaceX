import { Logout } from "./Logout/Logout";
import { SignIn } from "./SignIn/SignIn";
import { SignUp } from "./SignUp/SignUp";

export const ModalSelector = ({ modalName, closeModal }) => {
  switch (modalName) {
    case "signin":
      return <SignIn onClose={closeModal} />;
    case "signup":
      return (
        <SignUp
          onClose={() => {
            closeModal();
          }}
        />
      );
    case "logout":
      return (
        <Logout
          isLogout={true}
          onClose={() => {
            closeModal();
          }}
        />
      );
    default:
      return <></>;
  }
};
