import { CloseModalIcon } from "../../icons/CloseModalIcon";
import BaseModalWrap from "../ModalWrap/ModalWrap";
import {
  CloseBtn,
  ErrMessage,
  InputField,
  SaveBtn,
  StyledForm,
  Window,
  WrapField,
} from "./SignIn.styled";
import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const schema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Volume can't be < 6")
    .required("This field is required"),
  email: Yup.string()
    .email()
    .matches(emailRegexp, "Enter correct email")
    .required("This field is required"),
});
export const SignIn = ({ onClose }) => {
  return (
    <BaseModalWrap onClose={onClose}>
      <Window>
        <CloseBtn type="button" id="closeBtn">
          <CloseModalIcon width={32} height={32} />
        </CloseBtn>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
          validationSchema={schema}
        >
          {({ values, errors, touched, handleSubmit }) => (
            <StyledForm onSubmit={handleSubmit}>
              <WrapField>
                <InputField
                  className={errors.email && touched.email && "error"}
                  type="email"
                  placeholder="Email"
                  // onChange={handleChange}
                  value={values.email}
                  name="email"
                />
                <ErrMessage component="span" name="email" />
              </WrapField>
              <WrapField>
                <InputField
                  className={errors.password && touched.password && "error"}
                  type="password"
                  placeholder="Password"
                  min="6"
                  // onChange={handleChange}
                  value={values.password}
                  name="password"
                />
                <ErrMessage component="span" name="password" />
              </WrapField>
              <SaveBtn type="submit">Sing Up</SaveBtn>
            </StyledForm>
          )}
        </Formik>
      </Window>
    </BaseModalWrap>
  );
};
