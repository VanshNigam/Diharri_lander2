// validates that component render correctly
import { render, screen } from '@testing-library/react';
import HomePage from '../../src/pages/index';

jest.mock('../../src/hooks/useLandingData', () => ({
    useLandingData: () => ({
        data: { landing: { title: 'Welcome to Dihaari', description: 'Your solution for hiring' } },
        loading: false,
        error: null,
    }),
}));

test('renders landing page content', () => {
    render(<HomePage />);
    expect(screen.getByText(/Welcome to Dihaari/i)).toBeInTheDocument();
    expect(screen.getByText(/Your solution for hiring/i)).toBeInTheDocument();
});