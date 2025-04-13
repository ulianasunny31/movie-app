import css from './Register.module.css';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { registerUser } from '../../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const Register = () => {
  const dispatch = useDispatch();

  function handleSubmit(values, { resetForm }) {
    dispatch(registerUser(values));
    resetForm();
  }

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          email: '',
          password: '',
        }}
      >
        <Form className={css.registerForm}>
          <div>
            <label> Email: </label>
            <Field type="text" name="email"></Field>
          </div>
          <div>
            <label> Password: </label>
            <Field type="password" name="password"></Field>
          </div>
          <button type="submit">Register</button>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
