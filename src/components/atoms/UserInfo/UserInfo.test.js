import UserInfo from './UserInfo';
import { renderWithProviders } from '../../../assets/helpers/renderWithProviders';
import { screen } from '@testing-library/react';

describe('UserInfo', () => {
  it('shows user name', () => {
    renderWithProviders(<UserInfo />);
    screen.getByText('Mateusz');
  });
});
