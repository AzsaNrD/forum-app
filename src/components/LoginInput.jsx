import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form>
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
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        className="border rounded-md py-3 px-6 mt-5 w-full outline-gray-400"
        required
      />
      <p className="mt-5 text-gray-500 text-left">
        Belum punya akun?
        <a
          href="/signup"
          className="ml-1 text-emerald-400 hover:text-emerald-500 hover:underline transition-all duration-150"
        >
          daftar
        </a>
      </p>
      <button
        type="button"
        onClick={() => login({ email, password })}
        className="mt-8 bg-emerald-500 active:bg-emerald-600 transition-all duration-150 w-full text-white rounded-md py-3"
      >
        LOGIN
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
