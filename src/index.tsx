import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './layout/index';
import { ModalProvider } from "@widgets/modal/lib";

ReactDOM.render(
    <React.StrictMode>
        <ModalProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ModalProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
