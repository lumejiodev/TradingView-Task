import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Application from './react-app';

const hotRender = (Component,elementID) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById( elementID )
    );
};

hotRender( Application, 'root' );

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
}
