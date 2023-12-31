import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DashboardHeader from '../components/DashboardHeader';

const renderApp = () => {
  render(<DashboardHeader />);

  return { user: userEvent.setup() };
};

describe('Dashboard page', () => {
  it('should render the Dashboard page header', async () => {
    renderApp();

    expect(await screen.findByText(/Overview/i)).toBeVisible();
  });
});
