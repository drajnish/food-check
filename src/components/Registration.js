import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = 'Full Name is Required';
  } else if (values.fullName.length > 15) {
    errors.fullName = 'Full Name must be less than 15 words.';
  }

  if (!values.email) {
    errors.email = 'Email is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email id';
  }

  return errors;
};

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="registration-input">
        <label htmlFor="fullName">Full Name : </label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <p>{formik.errors.fullName}</p>
        ) : null}
      </div>
      <div className="registration-email">
        <label htmlFor="email">Email : </label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Registration;
