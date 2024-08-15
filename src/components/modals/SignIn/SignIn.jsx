import { CloseModalIcon } from "../../icons/CloseModalIcon";
import BaseModalWrap from "../ModalWrap/ModalWrap";
import {
  CloseBtn,
  ErrorText,
  InputField,
  SaveBtn,
  StyledForm,
  Window,
  WrapField,
} from "./SignIn.styled";
import { Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
};
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameRegexp = /^[a-zA-Z]+$/;
const schema = Yup.object().shape({
  name: Yup.string()
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
export const SignIn = ({ onClose }) => {
  return (
    <BaseModalWrap onClose={onClose} >
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
                  className={errors.name && touched.name && "error"}
                  type="text"
                  placeholder="Your name"
                  // onChange={handleChange}
                  value={values.name}
                  name="name"
                />
                {errors.name && touched.name && (
                  <ErrorText>{errors.name}</ErrorText>
                )}
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
                {errors.email && touched.email && (
                  <ErrorText>{errors.email}</ErrorText>
                )}
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
                {errors.password && touched.password && (
                  <ErrorText>{errors.password}</ErrorText>
                )}
              </WrapField>
              <SaveBtn type="submit">Sing Up</SaveBtn>
            </StyledForm>
          )}
        </Formik>
      </Window>
    </BaseModalWrap>
  );
};
