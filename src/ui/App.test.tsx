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

function expectLink(signIn: Element | null, to: string, text: string) {
    expect(signIn).toHaveAttribute('to', to);
    expect(signIn).toHaveTextContent(text);
}

function expectRoute(route: Element | null, path: string, component: string) {
    expect(route).toHaveAttribute('path', path);
    expect(route).toHaveAttribute('component', component);
}

function expectExactRoute(route: Element | null, path: string, component: string) {
    expectRoute(route, path, component);
    expect(route).toHaveAttribute('exact', 'true');
}

describe('App', () => {
    describe('Header', () => {
        it('exists', () => {
            const {container} = render(<App/>);
            expect(container.querySelector('.app-header')).toBeInTheDocument();
        });

        it('has a link to Sign-In', () => {
            const {container} = render(<App/>);
            let signIn = container.querySelector('mock-link');
            expectLink(signIn, '/sign-in', 'Sign-In');
        });
    });

    describe('Structure', () => {
        it('is a site', () => {
            const {container} = render(<App/>);
            let site = container.querySelector('.App');
            expect(site).toBeInTheDocument();
        });

        it('has a header', () => {
            const {container} = render(<App/>);
            let siteHeader = container.querySelector('.App .App__header');
            expect(siteHeader).toBeInTheDocument();
        });

        it('has content', () => {
            const {container} = render(<App/>);
            let siteContent = container.querySelector('.App .App__content');

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

            let route = container.querySelector('mock-route[path="/"]');
            expectExactRoute(route, '/', 'Mock-Home');
        });

        it('Routes to Sign-In', () => {
            const history = createMemoryHistory();
            history.push('/sign-in');

            const {container} = render(<Router history={history}>
                <App />
            </Router>);

            let route = container.querySelector('mock-route[path="/sign-in"]');
            expectRoute(route, '/sign-in', 'Mock-Sign-In');
        });
    });
});

jest.mock('./pages/home/Home', () => {
    return {
        __esModule: true,
        default: 'Mock-Home'
    }
});

jest.mock('./pages/sign-in/SignIn', () => {
    return {
        __esModule: true,
        default: 'Mock-Sign-In'
    }
});
