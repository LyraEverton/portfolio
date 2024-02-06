import React, {useRef} from 'react';
import {render, screen} from '@testing-library/react';
import {Intro} from "./Intro";
const ref = useRef<any>();
test('renders learn react link', () => {
    render(<Intro handleRefClick={() => ref?.current.handleClick()}/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
