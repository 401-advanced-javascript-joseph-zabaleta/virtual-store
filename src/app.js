import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/header/header.jsx';
import Main from './components/main/main.jsx';
import Footer from './components/footer/footer.jsx';

export default function App() {

    return (

        <React.Fragment>
            <BrowserRouter>
                <CssBaseline />
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </React.Fragment>

    );

};
