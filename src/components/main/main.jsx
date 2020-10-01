import React from 'react'
import { Route, Switch } from 'react-router-dom';

import Categories from '../storefront/categories.jsx';
import Products from '../storefront/products.jsx';
import Details from '../products/details.jsx';
import Checkout from '../cart/checkout.jsx';

export default function Main() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/'>
                    <Categories />
                    <Products />
                </Route>
                <Route exact path='/details'>
                    <Details />
                </Route>
                <Route exact path='/checkout'>
                    <Checkout />
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
