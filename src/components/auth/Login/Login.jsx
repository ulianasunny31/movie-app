import { Field, Form, Formik } from 'formik';
import css from './Login.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();

  function handleSubmit(values, { resetForm }) {
    dispatch(loginUser(values));
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
        <Form className={css.loginForm}>
          <div>
            <label> Email: </label>
            <Field type="text" name="email"></Field>
          </div>
          <div>
            <label> Password: </label>
            <Field type="password" name="password"></Field>
          </div>
          <button type="submit">Log in</button>
          <p>
            Don't have an account yet? <Link to="/register">Register</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
