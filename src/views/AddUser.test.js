import React from 'react';
import AddUser from './AddUser';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from 'helpers/renderWithThemeProviders';
import Dashboard from './Dashboard';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grazyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Grazyna');
  });

  it('Prevents adding new user if the consent it not checked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grazyna' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.5' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Grazyna');
    expect(newUser).not.toBeInTheDocument();
  });
});
