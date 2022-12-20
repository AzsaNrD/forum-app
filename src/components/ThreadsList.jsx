import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadsList({
  threads, upVote, downVote, neutralVote,
}) {
  const { categoriesThread } = useSelector((states) => states);

  if (categoriesThread === null) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          {...thread}
          upVote={upVote}
          downVote={downVote}
          neutralVote={neutralVote}
        />
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};

export default ThreadsList;
