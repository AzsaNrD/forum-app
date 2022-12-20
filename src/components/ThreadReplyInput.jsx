import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadReplyInput({ replyThread }) {
  const [text, setText] = useState('');

  const onTextChange = ({ target }) => {
    setText(target.innerHTML);
  };

  const onCommentClick = () => {
    replyThread(text);
  };

  return (
    <div className="my-10">
      <div
        data-testid="commentEditable"
        className="border border-gray-300 p-5 text-gray-600 rounded-xl min-h-[150px] outline-gray-400"
        data-placeholder="Beri komentar..."
        onInput={onTextChange}
        contentEditable
      />
      <div className="mt-5 grid justify-items-end">
        <button
          className="transition-all cursor-pointer duration-300 bg-emerald-500 active:bg-emerald-700 text-white rounded-md px-4 py-2"
          type="button"
          onClick={onCommentClick}
        >
          Komentar
        </button>
      </div>
    </div>
  );
}

ThreadReplyInput.propTypes = {
  replyThread: PropTypes.func.isRequired,
};

export default ThreadReplyInput;
