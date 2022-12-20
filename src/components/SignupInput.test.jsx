/**
 * skenario testing
 *
 * - SignupInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call signup function when signup button is clicked
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignupInput from './SignupInput';

import '@testing-library/jest-dom';

describe('SignupInput component', () => {
  it('should handle name typing correctly', async () => {
    render(<SignupInput signup={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Name');

    await userEvent.type(nameInput, 'nametest');

    expect(nameInput).toHaveValue('nametest');
  });

  it('should handle email typing correctly', async () => {
    render(<SignupInput signup={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    await userEvent.type(emailInput, 'email@test.com');

    expect(emailInput).toHaveValue('email@test.com');
  });

  it('should handle password typing correctly', async () => {
    render(<SignupInput signup={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    await userEvent.type(passwordInput, 'passwordtest');
  });

  it('should call signup function when signup button is clicked', async () => {
    const mockSignup = jest.fn();
    render(<SignupInput signup={mockSignup} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'nametest');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'email@test.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const signupButton = screen.getByRole('button', { name: 'SIGNUP' });

    await userEvent.click(signupButton);

    expect(mockSignup).toBeCalledWith({
      name: 'nametest',
      email: 'email@test.com',
      password: 'passwordtest',
    });
  });
});
