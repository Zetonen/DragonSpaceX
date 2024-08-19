import { useDispatch } from "react-redux";
import { CloseModalIcon } from "../../icons/CloseModalIcon";
import BaseModalWrap from "../ModalWrap/ModalWrap";
import {
  CloseBtn,
  ErrMessage,
  InputField,
  SaveBtn,
  StyledForm,
  SwitchBtn,
  Window,
  WrapField,
} from "./SignUp.styled";
import { Formik } from "formik";
import * as Yup from "yup";
import { register, resendVerifyEmail } from "../../../redux/user/operations";
import { useState } from "react";

const initialValues = {
  userName: "",
  email: "",
  password: "",
};
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameRegexp = /^[a-zA-Z]+$/;
const schema = Yup.object().shape({
  userName: Yup.string()
    .matches(
      nameRegexp,
      "Only the first name. Only English letters are allowed"
    )
    .required("This field is required"),
  password: Yup.string()
    .min(6, "Volume can't be < 6")
    .required("This field is required"),
  email: Yup.string()
    .email()
    .matches(emailRegexp, "Enter correct email")
    .required("This field is required"),
});
const schemaVerify = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(emailRegexp, "Enter correct email")
    .required("This field is required"),
});
export const SignUp = ({ onClose }) => {
  const dispatch = useDispatch();
  const [verifyForm, setVerifyForm] = useState(false);
  return (
    <BaseModalWrap onClose={onClose}>
      <Window>
        <CloseBtn type="button" id="closeBtn">
          <CloseModalIcon width={32} height={32} />
        </CloseBtn>
        {verifyForm ? (
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values, actions) => {
              dispatch(resendVerifyEmail(values.email));
              actions.resetForm({ email: "" });
              onClose();
            }}
            validationSchema={schemaVerify}
          >
            {({ values, errors, touched, handleSubmit }) => (
              <StyledForm onSubmit={handleSubmit}>
                <WrapField>
                  <InputField
                    className={errors.email && touched.email && "error"}
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    name="email"
                  />
                  <ErrMessage component="span" name="email" />
                </WrapField>
                <SaveBtn type="submit">Send a verification</SaveBtn>
              </StyledForm>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
              dispatch(register(values));
              actions.resetForm(initialValues);
              onClose();
            }}
            validationSchema={schema}
          >
            {({ values, errors, touched, handleSubmit }) => (
              <StyledForm onSubmit={handleSubmit}>
                <WrapField>
                  <InputField
                    className={errors.name && touched.name && "error"}
                    type="text"
                    placeholder="Your name"
                    // onChange={handleChange}
                    value={values.name}
                    name="userName"
                  />
                  <ErrMessage component="span" name="userName" />
                </WrapField>
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
                <SaveBtn type="submit">Sign Up</SaveBtn>
              </StyledForm>
            )}
          </Formik>
        )}
        {verifyForm ? (
          <SwitchBtn type="button" onClick={() => setVerifyForm(false)}>
            Sign Up
          </SwitchBtn>
        ) : (
          <SwitchBtn type="button" onClick={() => setVerifyForm(true)}>
            Send a verification message again
          </SwitchBtn>
        )}
      </Window>
    </BaseModalWrap>
  );
};
