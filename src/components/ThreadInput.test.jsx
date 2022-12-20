/**
 * skenario testing
 *
 * - ThreadInput component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle body typing correctly
 *   - should call addThread function when buat button is clicked
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadInput from './ThreadInput';

import '@testing-library/jest-dom';

describe('ThreadInput component', () => {
  it('should handle Judul typing correctly', async () => {
    render(<ThreadInput addThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Judul');

    await userEvent.type(titleInput, 'titletest');

    expect(titleInput).toHaveValue('titletest');
  });

  it('should handle kategori typing correctly', async () => {
    render(<ThreadInput addThread={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Kategori');

    await userEvent.type(categoryInput, 'categorytest');

    expect(categoryInput).toHaveValue('categorytest');
  });

  it('should handle body typing correctly', async () => {
    render(<ThreadInput addThread={() => {}} />);
    const bodyInput = await screen.getByTestId('bodyEditable');

    await userEvent.click(bodyInput);
    await userEvent.keyboard('apcb');

    expect(bodyInput.textContent).toBe('apcb');
  });

  it('should call addThread function when buat button is clicked', async () => {
    const mockAddThread = jest.fn();
    render(<ThreadInput addThread={mockAddThread} />);

    const titleInput = await screen.getByPlaceholderText('Judul');
    await userEvent.type(titleInput, 'titletest');

    const categoryInput = await screen.getByPlaceholderText('Kategori');
    await userEvent.type(categoryInput, 'categorytest');

    const bodyInput = await screen.getByTestId('bodyEditable');
    await userEvent.click(bodyInput);
    await userEvent.keyboard('bodytest');

    const addThreadButton = await screen.getByRole('button', { name: 'Buat' });

    await userEvent.click(addThreadButton);

    expect(mockAddThread).toBeCalledWith({
      title: 'titletest',
      category: 'categorytest',
      body: 'bodytest',
    });
  });
});
