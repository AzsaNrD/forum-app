import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  const {
    authUser,
  } = useSelector((states) => states);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <section className="h-screen flex">
      {authUser ? (
        null
      ) : (
        <article className="w-11/12 sm:w-10/12 m-auto p-10">
          <h3 className="text-2xl font-bold text-neutral-600 text-center">LOGIN</h3>
          <LoginInput login={onLogin} />
        </article>
      )}
    </section>
  );
}

export default LoginPage;
