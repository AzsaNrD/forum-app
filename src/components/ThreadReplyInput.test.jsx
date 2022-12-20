/**
 * skenario testing
 *
 * - ThreadReplyInput component
 *   - should handle comment typing correctly
 *   - should call replyThread function when Komentar button is clicked
 */
import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadReplyInput from './ThreadReplyInput';

import '@testing-library/jest-dom';

describe('ThreadReplyInput component', () => {
  it('should handle comment typing correctly', async () => {
    render(<ThreadReplyInput replyThread={() => {}} />);
    const commentInput = await screen.getByTestId('commentEditable');

    await userEvent.click(commentInput);
    await userEvent.keyboard('commenttest');

    expect(commentInput.textContent).toBe('commenttest');
  });

  it('should call replyThread function when Komentar button is clicked', async () => {
    const mockReplyThread = jest.fn();
    render(<ThreadReplyInput replyThread={mockReplyThread} />);
    const commentInput = await screen.getByTestId('commentEditable');
    await userEvent.click(commentInput);
    await userEvent.keyboard('commenttest');
    const replyButton = await screen.getByRole('button', { name: 'Komentar' });

    await userEvent.click(replyButton);

    expect(mockReplyThread).toBeCalledWith('commenttest');
  });
});
