import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';

import Home from './pages/Home';
import Single from './pages/Single';
import Category from './pages/Category';
import NotFound from './pages/NotFound';

import Header from './components/Header';
import Footer from './components/Footer';

import routes from './routes';

const queryConfig = {
    refetchAllOnWindowFocus: false,
    staleTime: 30 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
};

const App = () => {
    return (
        <ReactQueryConfigProvider config={queryConfig}>
            <div className="container">
                <Header />
                <Switch>
                    <Route exact path={routes.HOME}>
                        <Home />
                    </Route>
                    <Route path={routes.SINGLE_POST}>
                        <Single />
                    </Route>
                    <Route path={routes.CATEGORY}>
                        <Category />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </ReactQueryConfigProvider>
    );
};

export default App;
