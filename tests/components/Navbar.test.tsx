// validates that component render correctly
import { render, screen } from '@testing-library/react';
import Navbar from '../../src/components/Navbar';

test('renders Navbar component', () => {
    render(<Navbar />);
    const heading = screen.getByText(/Dihaari/i);
    expect(heading).toBeInTheDocument();
});