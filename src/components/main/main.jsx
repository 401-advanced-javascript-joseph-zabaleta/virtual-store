import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Categories from '../storefront/categories.jsx';
import Products from '../storefront/products.jsx';

export default function Main() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/'>
                    <Categories />
                    <Products />
                </Route>
                <Route exact path='/details'>
                    <h1>
                        Details reached!
                    </h1>
                </Route>
                <Route exact path='/checkout'>
                    <h1>
                        Checkout reached!
                    </h1>
                </Route>
                <Route>
                    <div>
                        404 Error, no route found!
                    </div>
                </Route>
            </Switch>
        </React.Fragment>
    )
}
