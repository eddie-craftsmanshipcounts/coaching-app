import React from "react";
import {render} from "@testing-library/react";
import Home from "./Home";

describe('Home', () => {
    it('has a page heading', () => {
        const {container} = render(<Home/>);
        let howdy = container.querySelector('.page__heading');
        expect(howdy).toBeInTheDocument();
        expect(howdy).toHaveTextContent('Howdy, Fellow Coaches!');
    });
});
