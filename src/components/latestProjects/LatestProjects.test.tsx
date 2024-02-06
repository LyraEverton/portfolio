import React, {useRef} from 'react';
import {render, screen} from '@testing-library/react';
import {LatestProjects} from "./LatestProjects";
const ref = useRef<any>();
test('renders learn react link', () => {
    render(<LatestProjects ref={ref}/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
