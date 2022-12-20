import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function SignupInput({ signup }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="Name"
        className="border rounded-md py-3 px-6 mt-5 w-full outline-gray-400"
        required
      />
      <input
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        className="border rounded-md py-3 px-6 mt-5 w-full outline-gray-400"
        required
      />
      <input
        type="password"
        name={password}
        onChange={onPasswordChange}
        placeholder="Password"
        className="border rounded-md py-3 px-6 mt-5 w-full outline-gray-400"
        required
      />
      <p className="mt-5 text-gray-500 text-left">
        Sudah punya akun?
        <a
          href="/login"
          className="ml-1 text-emerald-400 hover:text-emerald-500 hover:underline transition-all duration-150"
        >
          masuk
        </a>
      </p>
      <button
        type="button"
        onClick={() => signup({ name, email, password })}
        className="mt-8 bg-emerald-500 active:bg-emerald-600 transition-all duration-150 w-full text-white rounded-md py-3"
      >
        SIGNUP
      </button>
    </form>
  );
}

SignupInput.propTypes = {
  signup: PropTypes.func.isRequired,
};

export default SignupInput;
