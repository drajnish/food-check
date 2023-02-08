import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="input-field">
      <label htmlFor={props.id || props.name}>{label}: </label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </div>
  );
};

const Login = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Please enter a valid email id')
            .required('Email id is required.'),

          password: Yup.string()
            .min(8, 'Too short must have 8 characters or more.')
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
              'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
            )
            .required('Password is required.'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="login-form">
          <h1>Login</h1>
          <InputField
            label="email"
            name="email"
            type="text"
            placeholder="Enter your email id"
          />
          <InputField
            label="password"
            name="password"
            type="password"
            placeholder="Please enter your password"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
