import React from "react";
import {render} from "@testing-library/react";
import Home from "./Home";

describe('Home', () => {
    it('has a heading', () => {
        const {getByText} = render(<Home/>);
        let howdy = getByText('Howdy, Fellow Coaches!');
        expect(howdy).toBeInTheDocument();
        expect(howdy.tagName.toLowerCase()).toBe('h1');
    });
});