import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'threadDetail/receive',
  CLEAR_THREAD_DETAIL: 'threadDetail/clear',
  ADD_COMMENT_THREAD_DETAIL: 'threadDetail/add-comment',
  UP_VOTE_THREAD_DETAIL: 'threadDetail/upvote-thread',
  DOWN_VOTE_THREAD_DETAIL: 'threadDetail/downvote-thread',
  NEUTRALIZE_VOTE_THREAD_DETAIL: 'threadDetail/neutralvote-thread',
  UP_VOTE_COMMENT: 'threadDetail/upvote-comment',
  DOWN_VOTE_COMMENT: 'threadDetail/downvote-comment',
  NEUTRALIZE_VOTE_COMMENT: 'threadDetail/neutralvote-thread',
};

function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function addCommentThreadDetailActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT_THREAD_DETAIL,
    payload: {
      comment,
    },
  };
}

function upVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function neutralizeVoteThreadDetailActionCreator({ threadId, userId }) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_THREAD_DETAIL,
    payload: {
      threadId,
      userId,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function upVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function downVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function neutralizeVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.NEUTRALIZE_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());

    try {
      const detailThread = await api.getDetailThread(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncAddCommentThreadDetail(threadId, content) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment(threadId, content);
      dispatch(addCommentThreadDetailActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUpVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(upVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.upVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    }
  };
}

function asyncDownVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(downVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.downVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    }
  };
}

function asyncNeutralizeVoteThreadDetail(threadId) {
  return async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(neutralizeVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));

    try {
      await api.neutralizeVoteThread(threadId);
    } catch (error) {
      alert(error.message);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    }
  };
}

function asyncUpVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(upVoteCommentActionCreator(authUser?.id, commentId));

    try {
      await api.upVoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncDownVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteCommentActionCreator(authUser?.id, commentId));

    try {
      await api.downVoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncNeutralizeVoteComment(threadId, commentId) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(neutralizeVoteCommentActionCreator(authUser?.id, commentId));

    try {
      await api.neutralizeVoteComment(threadId, commentId);
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  neutralizeVoteThreadDetailActionCreator,
  upVoteCommentActionCreator,
  downVoteCommentActionCreator,
  neutralizeVoteCommentActionCreator,
  clearThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncUpVoteThreadDetail,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncAddCommentThreadDetail,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralizeVoteComment,
};
