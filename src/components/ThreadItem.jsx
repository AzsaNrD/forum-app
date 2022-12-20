import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { BiLike, BiDislike, BiCommentDetail } from 'react-icons/bi';
import postedAt from '../utils/postedAt';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  ownerId,
  totalComments,
  upVotesBy,
  downVotesBy,
  authUser,
  upVote,
  downVote,
  neutralVote,
}) {
  const isThreadUpVote = upVotesBy.includes(authUser?.id);
  const isThreadDownVote = downVotesBy.includes(authUser?.id);

  const onUpVoteClick = () => {
    upVote(id);
  };

  const onDownVoteClick = () => {
    downVote(id);
  };

  const onNeutralVoteClick = () => {
    neutralVote(id);
  };

  const onUnAuthorizeVoteClick = () => {
    alert('Masuk terlebih dahulu');
  };

  return (
    <div className="p-10 bg-gray-50 shadow-sm rounded-xl">
      <div className="max-w-3xl">
        <div>
          <a
            href={`threads/${id}`}
            className="font-bold text-xl text-slate-600 visited:text-gray-500 active:text-emerald-500"
          >
            {title}
          </a>
          <div className="text-sm flex gap-2">
            <p className="text-gray-600">{ownerId.name}</p>
            <p className="text-gray-400">&#x2022;</p>
            <p className="text-gray-400">{postedAt(createdAt)}</p>
            <p className="text-gray-400">&#x2022;</p>
            <p className="text-gray-500 text-sm">
              #
              {category}
            </p>
          </div>
        </div>
        <div className="overflow-hidden my-5 text-gray-600 line-clamp-2 thread__body">
          {parse(body)}
        </div>
        <div className="flex gap-3 text-gray-600">
          <p className="flex items-center gap-1">
            {authUser ? (
              <button
                type="button"
                onClick={upVotesBy.includes(authUser?.id) ? onNeutralVoteClick : onUpVoteClick}
              >
                {isThreadUpVote ? <BiLike style={{ fill: '#10b981' }} /> : <BiLike />}
              </button>
            ) : (
              <button type="button" onClick={onUnAuthorizeVoteClick}>
                {isThreadUpVote ? <BiLike style={{ fill: '#10b981' }} /> : <BiLike />}
              </button>
            )}
            {upVotesBy.length}
          </p>
          <p className="flex items-center gap-1">
            {authUser ? (
              <button
                type="button"
                onClick={downVotesBy.includes(authUser?.id) ? onNeutralVoteClick : onDownVoteClick}
              >
                {isThreadDownVote ? <BiDislike style={{ fill: '#f43f5e' }} /> : <BiDislike />}
              </button>
            ) : (
              <button type="button" onClick={onUnAuthorizeVoteClick}>
                {isThreadDownVote ? <BiDislike style={{ fill: '#f43f5e' }} /> : <BiDislike />}
              </button>
            )}
            {downVotesBy.length}
          </p>
          <p className="flex items-center gap-1">
            <BiCommentDetail />
            {totalComments}
          </p>
        </div>
      </div>
    </div>
  );
}

const ownerIdShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  ownerId: PropTypes.shape(ownerIdShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.object,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadItem;
