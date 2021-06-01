import React from 'react';
import ReactDOM from 'react-dom';
import './Css/index.css';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import * as serviceWorker from './serviceWorker';
import Routing from './Routing';

function Main() {
    const client = new QueryClient();

    setLogger({
        log: () => {},
        warn: () => {},
        error: window.console.error,
    });

    return (
        <QueryClientProvider client={client}>
            <Routing />
        </QueryClientProvider>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));
serviceWorker.register();
