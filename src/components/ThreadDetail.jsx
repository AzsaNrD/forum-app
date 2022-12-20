import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { BiLike, BiDislike } from 'react-icons/bi';
import postedAt from '../utils/postedAt';
import ThreadReplyInput from './ThreadReplyInput';

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
  authUser,
  replyThread,
  upVoteThread,
  downVoteThread,
  neutralVoteThread,
  upVoteComment,
  downVoteComment,
  neutralVoteComment,
  unAuthorizeVote,
}) {
  const isThreadUpVote = upVotesBy.includes(authUser?.id);
  const isThreadDownVote = downVotesBy.includes(authUser?.id);

  return (
    <div className="bg-gray-50 px-5 py-10 sm:px-12 sm:py-10 rounded-xl shadow">
      <section>
        <div>
          <h3 className="font-bold text-3xl text-slate-700">{title}</h3>
          <div>
            <div className="flex gap-2 items-center mt-2">
              <img className="w-8 h-8 rounded-full" src={owner.avatar} alt={owner.name} />
              <p className="text-gray-600">{owner.name}</p>
              <p className="text-gray-400">&#x2022;</p>
              <p className="text-gray-400">{postedAt(createdAt)}</p>
              <p className="text-gray-400">&#x2022;</p>
              <p className="text-gray-500">
                #
                {category}
              </p>
            </div>
            <div className="my-5 text-gray-600 overflow-auto">
              <p>{parse(body)}</p>
            </div>
            <div className="flex gap-2 text-gray-600">
              <div className="flex items-center gap-1">
                {authUser ? (
                  <button
                    type="button"
                    onClick={isThreadUpVote ? () => neutralVoteThread(id) : () => upVoteThread(id)}
                  >
                    {isThreadUpVote ? <BiLike style={{ fill: '#10b981' }} /> : <BiLike />}
                  </button>
                ) : (
                  <button type="button" onClick={() => unAuthorizeVote()}>
                    <BiLike />
                  </button>
                )}
                <p>{upVotesBy.length}</p>
              </div>
              <div className="flex items-center gap-1">
                {authUser ? (
                  <button
                    type="button"
                    onClick={
                      isThreadDownVote ? () => neutralVoteThread(id) : () => downVoteThread(id)
                    }
                  >
                    {isThreadDownVote ? <BiDislike style={{ fill: '#f43f5e' }} /> : <BiDislike />}
                  </button>
                ) : (
                  <button type="button" onClick={() => unAuthorizeVote()}>
                    <BiDislike />
                  </button>
                )}
                <p>{downVotesBy.length}</p>
              </div>
            </div>
          </div>
          <div className="my-5 flex gap-1 text-gray-700 font-medium">
            <p className="">{comments.length}</p>
            <p className="">Komentar</p>
          </div>
          {authUser ? (
            <ThreadReplyInput replyThread={replyThread} />
          ) : (
            <div className="mb-10 flex gap-1">
              <a className="font-medium hover:underline text-emerald-600" href="/login">
                Masuk
              </a>
              <p className="text-gray-600">untuk memberi komentar</p>
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="flex flex-col gap-5">
          {comments.map((comment) => (
            <div key={comment.createdAt} className="bg-zinc-100 shadow rounded-xl p-5">
              <div>
                <div className="flex items-center gap-2">
                  <img
                    className="w-5 h-5 rounded-full"
                    src={comment.owner.avatar}
                    alt={comment.owner.name}
                  />
                  <h4 className="font-medium">{comment.owner.name}</h4>
                </div>
                <p className="text-sm text-gray-500">{postedAt(comment.createdAt)}</p>
              </div>
              <div className="overflow-auto h-fit my-3">
                <p className="my-3">{parse(comment.content)}</p>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-1 text-gray-600">
                  {authUser ? (
                    <button
                      type="button"
                      onClick={
                        comment.upVotesBy.includes(authUser.id)
                          ? () => neutralVoteComment(comment.id)
                          : () => upVoteComment(comment.id)
                      }
                    >
                      {comment.upVotesBy.includes(authUser.id) ? (
                        <BiLike style={{ fill: '#10b981' }} />
                      ) : (
                        <BiLike />
                      )}
                    </button>
                  ) : (
                    <button type="button" onClick={() => unAuthorizeVote()}>
                      {comment.upVotesBy.includes(authUser?.id) ? (
                        <BiLike style={{ fill: '#10b981' }} />
                      ) : (
                        <BiLike />
                      )}
                    </button>
                  )}
                  <p>{comment.upVotesBy.length}</p>
                </div>
                <div className="flex items-center gap-1">
                  {authUser ? (
                    <button
                      type="button"
                      onClick={
                        comment.upVotesBy.includes(authUser.id)
                          ? () => neutralVoteComment(comment.id)
                          : () => downVoteComment(comment.id)
                      }
                    >
                      {comment.downVotesBy.includes(authUser.id) ? (
                        <BiDislike style={{ fill: '#f43f5e' }} />
                      ) : (
                        <BiDislike />
                      )}
                    </button>
                  ) : (
                    <button type="button" onClick={() => unAuthorizeVote()}>
                      {comment.downVotesBy.includes(authUser?.id) ? (
                        <BiDislike style={{ fill: '#f43f5e' }} />
                      ) : (
                        <BiDislike />
                      )}
                    </button>
                  )}
                  <p>{comment.downVotesBy.length}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  /** id thread */
  id: PropTypes.string.isRequired,
  /** the title of the thread */
  title: PropTypes.string.isRequired,
  /** the body of the thread  */
  body: PropTypes.string.isRequired,
  /** the category of the thread */
  category: PropTypes.string.isRequired,
  /** the posted time */
  createdAt: PropTypes.string.isRequired,
  /** owner thread */
  owner: PropTypes.shape(ownerShape).isRequired,
  /** the like of the thread */
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** the dislike of the thread */
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** the comment of the thread */
  comments: PropTypes.instanceOf(Array).isRequired,
  /** data user when login */
  // eslint-disable-next-line react/require-default-props
  authUser: PropTypes.shape(authUserShape),
  /** Action when the CTA button is clicked */
  replyThread: PropTypes.func.isRequired,
  /** Action when the CTA button is clicked */
  upVoteThread: PropTypes.func.isRequired,
  /** Action when the CTA button is clicked */
  downVoteThread: PropTypes.func.isRequired,
  /** Action when the CTA button is clicked */
  neutralVoteThread: PropTypes.func.isRequired,
  /** Action when the CTA button is clicked */
  upVoteComment: PropTypes.func.isRequired,
  /** Action when the CTA button is clicked */
  downVoteComment: PropTypes.func.isRequired,
  /** Action when the CTA button is clicked */
  neutralVoteComment: PropTypes.func.isRequired,
  /** Action when the CTA button is clicked */
  unAuthorizeVote: PropTypes.func.isRequired,
};

export default ThreadDetail;
