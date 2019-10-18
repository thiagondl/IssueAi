import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './components/app/App';

import './index.css';
import 'blueprint-css/dist/blueprint.min.css';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://api.github.com',
});
const client = new ApolloClient({
    cache,
    link,
});

const mountNode = document.getElementById('app');

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
    mountNode
);
