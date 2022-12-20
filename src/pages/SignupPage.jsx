import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncSignupUser } from '../states/users/action';
import SignupInput from '../components/SignupInput';

function SignupPage() {
  const {
    authUser,
  } = useSelector((states) => states);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSignup = ({ name, email, password }) => {
    dispatch(asyncSignupUser({ name, email, password }));
    navigate('/login');
  };

  return (
    <section className="h-screen flex">
      {authUser ? (
        null
      ) : (
        <article className="w-11/12 sm:w-7/12 m-auto p-10">
          <h3 className="text-2xl font-bold text-neutral-600 text-center">SIGNUP</h3>
          <SignupInput signup={onSignup} />
        </article>
      )}
    </section>
  );
}

export default SignupPage;
