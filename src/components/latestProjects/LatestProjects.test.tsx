import React from 'react';
import {render, screen} from '@testing-library/react';
import {LatestProjects} from "./LatestProjects";

test('renders learn react link', () => {
    render(<LatestProjects/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
