import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  asyncReceiveThreadDetail,
  asyncAddCommentThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
} from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';

function DetailPage() {
  const { id } = useParams();
  const { detailThread = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onReplyThread = (content) => {
    dispatch(asyncAddCommentThreadDetail(id, content));
  };

  const onUpVoteThread = (threadId) => {
    dispatch(asyncUpVoteThreadDetail(threadId));
  };

  const onDownVoteThread = (threadId) => {
    dispatch(asyncDownVoteThreadDetail(threadId));
  };

  const onNeutralVoteThread = (threadId) => {
    dispatch(asyncNeutralizeVoteThreadDetail(threadId));
  };

  const onUpVoteComment = (commentId) => {
    dispatch(asyncUpVoteComment(id, commentId));
  };

  const onDownVoteComment = (commentId) => {
    dispatch(asyncDownVoteComment(id, commentId));
  };

  const onNeutralVoteComment = (commentId) => {
    dispatch(asyncNeutralizeVoteComment(id, commentId));
  };

  const onUnAuthorizeVote = () => {
    alert('Masuk terlebih dahulu!');
  };

  if (detailThread === null) {
    return null;
  }

  return (
    <section className="w-full sm:w-11/12 lg:w-9/12 xl:w-7/12 mt-32 mb-12 transition-all duration-150">
      <ThreadDetail
        {...detailThread}
        authUser={authUser}
        replyThread={onReplyThread}
        upVoteThread={onUpVoteThread}
        downVoteThread={onDownVoteThread}
        neutralVoteThread={onNeutralVoteThread}
        upVoteComment={onUpVoteComment}
        downVoteComment={onDownVoteComment}
        neutralVoteComment={onNeutralVoteComment}
        unAuthorizeVote={onUnAuthorizeVote}
      />
    </section>
  );
}

export default DetailPage;
