/* eslint-disable react/function-component-definition */
import React from 'react';
import Navbar from '../components/Navbar';

const stories = {
  title: 'Navbar',
  component: Navbar,
};

export default stories;

const TemplateStory = (args) => <Navbar {...args} />;

const AuthorizedUser = TemplateStory.bind({});
AuthorizedUser.args = {
  authUser: {
    id: 'user-1',
    name: 'user-1',
    avatar: 'https://generated-image-url.jpg',
  },
  signOut: () => {},
};

const UnauthorizedUser = () => <Navbar />;

export { AuthorizedUser, UnauthorizedUser };
