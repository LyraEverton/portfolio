import React from 'react';
import { render, screen } from '@testing-library/react';
import {Cases} from "./Cases";

test('renders learn react link', () => {
    render(<Cases />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
