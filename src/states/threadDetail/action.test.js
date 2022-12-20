/**
 * skenario test
 *
 * - asyncReceiveThreadDetail thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncReceiveThreadDetail, receiveThreadDetailActionCreator, clearThreadDetailActionCreator } from './action';

const fakeDetailThreadResponse = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2022-12-16T05:46:11.474Z',
  owner: {
    id: 'users-1',
    name: 'John Doe',
    avatar: 'https://generated-image-url.jpg',
  },
  upVotesBy: [],
  downVotesBy: [],
  comments: [],
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncReceiveThreadDetail thunk', () => {
  beforeEach(() => {
    api._getDetailThread = api.getDetailThread;
  });

  afterEach(() => {
    api.getDetailThread = api._getDetailThread;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getDetailThread = () => Promise.resolve(fakeDetailThreadResponse);

    const dispatch = jest.fn();

    await asyncReceiveThreadDetail('exampleid')(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(clearThreadDetailActionCreator());
    expect(dispatch).toHaveBeenCalledWith(
      receiveThreadDetailActionCreator(fakeDetailThreadResponse),
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getDetailThread = () => Promise.reject(fakeErrorResponse);

    const dispatch = jest.fn();
    window.alert = jest.fn();

    await asyncReceiveThreadDetail('exampleid')(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
