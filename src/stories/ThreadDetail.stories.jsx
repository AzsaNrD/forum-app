/* eslint-disable react/function-component-definition */
import React from 'react';
import ThreadDetail from '../components/ThreadDetail';

const stories = {
  title: 'Thread Detail',
  component: ThreadDetail,
};

export default stories;

const TemplateStory = (args) => <ThreadDetail {...args} />;

const AuthorizedUser = TemplateStory.bind({});
AuthorizedUser.args = {
  id: 'thread-1',
  title: 'Introduction to Storybook for React',
  body: 'Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.',
  category: 'Storybook',
  createdAt: '2022-12-19T12:33:59.916Z',
  owner: {
    id: 'User-x',
    name: 'User-x',
    avatar: 'https://ui-avatars.com/api/?name=User-x&background=random',
  },
  upVotesBy: [],
  downVotesBy: [],
  comments: [
    {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
      createdAt: '2022-12-19T12:44:18.519Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://ui-avatars.com/api/?name=JohnDoe&background=random',
      },
      upVotesBy: [],
      downVotesBy: [],
    },
  ],
  authUser: {
    id: 'user-1',
    name: 'user-1',
    avatar: 'https://generated-image-url.jpg',
  },
  replyThread: () => {},
  upVoteThread: () => {},
  downVoteThread: () => {},
  neutralVoteThread: () => {},
  upVoteComment: () => {},
  downVoteComment: () => {},
  neutralVoteComment: () => {},
  unAuthorizeVote: () => alert('Masuk terlebih dahulu!'),
};

const UnauthorizedUser = TemplateStory.bind({});
UnauthorizedUser.args = {
  id: 'thread-1',
  title: 'Introduction to Storybook for React',
  body: 'Storybook is a tool for UI development. It makes development faster and easier by isolating components. This allows you to work on one component at a time. You can develop entire UIs without needing to start up a complex dev stack, force certain data into your database, or navigate around your application.',
  category: 'Storybook',
  createdAt: '2022-12-19T12:33:59.916Z',
  owner: {
    id: 'User-x',
    name: 'User-x',
    avatar: 'https://ui-avatars.com/api/?name=User-x&background=random',
  },
  upVotesBy: [],
  downVotesBy: [],
  comments: [
    {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
      createdAt: '2022-12-19T12:44:18.519Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://ui-avatars.com/api/?name=JohnDoe&background=random',
      },
      upVotesBy: [],
      downVotesBy: [],
    },
  ],
  unAuthorizeVote: () => alert('Masuk terlebih dahulu!'),
};

export { AuthorizedUser, UnauthorizedUser };
