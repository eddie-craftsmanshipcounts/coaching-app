import React from "react";
import {render} from "@testing-library/react";
import SignIn from "./SignIn";

describe('SignIn', () => {
    it('has a page heading', () => {
        const {container} = render(<SignIn/>);
        let howdy = container.querySelector('.page__heading');
        expect(howdy).toBeInTheDocument();
        expect(howdy).toHaveTextContent('We\'re Excited to See You Again!');
    });
});
