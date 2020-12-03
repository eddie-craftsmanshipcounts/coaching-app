import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

jest.mock('react-router-dom', () => {
    const module = jest.requireActual('react-router-dom');
    return {
        __esModule: true,
        Router: module.Router,
        Link: 'Mock-Link',
        Route: 'Mock-Route'
    }
});

jest.mock('./Home', () => {
    return {
        __esModule: true,
        default: 'Mock-Home'
    }
});

jest.mock('./SignIn', () => {
    return {
        __esModule: true,
        default: 'Mock-Sign-In'
    }
});

describe('App', () => {
    describe('Header', () => {
        it('exists', () => {
            const {container} = render(<App/>);
            expect(container.querySelector('.site-header')).toBeInTheDocument();
        });

        it('has a link to Sign-In', () => {
            const {container} = render(<App/>);
            let signIn = container.querySelector('mock-link');
            expect(signIn).toHaveAttribute('to', '/sign-in');
            expect(signIn).toHaveTextContent('Sign-In');
        });
    });

    describe('Structure', () => {
        it('is a site', () => {
            const {container} = render(<App/>);
            let site = container.querySelector('.site');
            expect(site).toBeInTheDocument();
        });

        it('has a header', () => {
            const {container} = render(<App/>);
            let siteHeader = container.querySelector('.site .site__header');
            expect(siteHeader).toBeInTheDocument();
        });

        it('has content', () => {
            const {container} = render(<App/>);
            let siteContent = container.querySelector('.site .site__content');

            expect(siteContent).toBeInTheDocument();
        });
    });

    describe('Content', () => {
        it('Routes to Home', () => {
            const history = createMemoryHistory();
            history.push('/');

            const {container} = render(<Router history={history}>
                <App />
            </Router>);

            let route = container.querySelector('mock-route');
            expect(route).toHaveAttribute('path', '/');
            expect(route).toHaveAttribute('exact', 'true');
            expect(route).toHaveAttribute('component', 'Mock-Home');
        });

        it('Routes to Sign-In', () => {
            const history = createMemoryHistory();
            history.push('/sign-in');

            const {container} = render(<Router history={history}>
                <App />
            </Router>);

            let route = container.querySelector('mock-route[path="/sign-in"]');
            expect(route).toHaveAttribute('path', '/sign-in');
            expect(route).toHaveAttribute('component', 'Mock-Sign-In');
        });
    });
});
