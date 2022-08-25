import * as S from './LoginForm.styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components/macro';

let LoginSchema = yup.object().shape({
  login: yup.string().email().required(),
  password: yup.string().min(8).max(24).required(),
});

const initialValues = {
  login: '',
  password: '',
};

const ErrorText = styled.div`
  display: inline-block;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.accent};
`;

const ValidationError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}>
      <S.Form as={Form}>
        <label>
          Login
          <Field type="email" name="login" placeholder="Email" />
        </label>
        <ValidationError name="login" />
        <label>
          Password
          <Field type="password" name="password" placeholder="Password" />
        </label>
        <ValidationError name="password" />
        <button type="submit">Submit</button>
      </S.Form>
    </Formik>
  );
};
