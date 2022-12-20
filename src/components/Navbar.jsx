import React from 'react';
import { BiLogOut, BiMenu, BiX } from 'react-icons/bi';
import PropTypes from 'prop-types';
import useToggle from '../hooks/useToggle';

function Navbar({ authUser, signOut }) {
  const [toggle, onToggleClick] = useToggle();

  return (
    <nav className="bg-gray-50 px-10 md:px-20 py-5 flex items-center justify-between shadow-sm z-[9999999999999] relative">
      <div className="select-none">
        <h1 className="text-2xl font-bold text-emerald-600">FORUM APP</h1>
      </div>
      <div className="flex items-center text-3xl text-gray-700 transition-all duration-150 md:hidden relative z-[10] ml-auto">
        <button type="button" onClick={onToggleClick}>
          {toggle ? <BiX /> : <BiMenu />}
        </button>
      </div>
      <div>
        <div
          className={`${
            toggle ? 'absolute left-0 right-0 top-[100%] md:static' : 'hidden'
          } bg-gray-50 md:bg-none shadow md:shadow-none py-10 md:py-0 justify-center md:flex md:gap-20 text-gray-400 md:items-center`}
        >
          <ul className="flex md:flex-row flex-col gap-5 text-center">
            <li className="hover:text-gray-800 transition-all duration-300 text-gray-500">
              <a href="/">THREADS</a>
            </li>
            <li className="hover:text-gray-800 transition-all duration-300 text-gray-500">
              <a href="/leaderboards">LEADERBOARDS</a>
            </li>
          </ul>
          {authUser ? (
            <div className="flex md:flex-row flex-col text-center md:mt-0 mt-4 gap-5 md:gap-7 transition-all duration-300 text-gray-600 uppercase">
              <p>{authUser.name}</p>
              <button
                className="text-2xl flex justify-center"
                type="button"
                title="keluar"
                onClick={signOut}
              >
                <BiLogOut />
              </button>
            </div>
          ) : (
            <ul className="flex gap-5 items-center md:mt-0 mt-5 justify-center">
              <li className="hover:text-gray-800 transition-all duration-300 text-gray-500">
                <a href="/login">LOGIN</a>
              </li>
              <li>
                <a
                  className="transition-all cursor-pointer duration-300 bg-emerald-500 active:bg-emerald-600 w-full text-white rounded-md px-4 py-2"
                  href="/signup"
                >
                  SIGNUP
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navbar.propTypes = {
  /** data user when avaiable */
  // eslint-disable-next-line react/require-default-props
  authUser: PropTypes.shape(userShape),
  /** Action when the CTA button is clicked */
  signOut: PropTypes.func.isRequired,
};

export default Navbar;
