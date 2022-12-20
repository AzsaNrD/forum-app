import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, setBody] = useState('');

  const onBodyChange = ({ target }) => {
    setBody(target.innerHTML);
  };

  const onAddClick = () => {
    addThread({ title, body, category });
  };

  return (
    <form>
      <input
        type="text"
        className="border rounded-md py-3 px-6 mt-5 w-full bg-gray-100 border-gray-300 outline-gray-400"
        onChange={onTitleChange}
        placeholder="Judul"
      />
      <input
        type="text"
        className="border rounded-md py-3 px-6 mt-5 w-full bg-gray-100 border-gray-300 outline-gray-400"
        onChange={onCategoryChange}
        placeholder="Kategori"
      />
      <div
        data-testid="bodyEditable"
        className="border border-gray-300 bg-gray-100 p-5 text-gray-700 rounded-md min-h-[150px] mt-5 outline-gray-400"
        onInput={onBodyChange}
        contentEditable
      />
      <button
        type="button"
        onClick={onAddClick}
        className="mt-10 text-center w-full bg-emerald-500 active:bg-emerald-600 transition-all duration-150 py-2 rounded-md text-white"
      >
        Buat
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
