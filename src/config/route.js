import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store.js';

import PrivateRoute from '../components/Common/PrivateRoute';
import AuthLayout from '../components/Common/AuthLayout';

import Post from '../components/Post/Post'
import Explore from '../components/Explore/Explore';


export default function RouterComponent() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-right"
                    getState={(state) => state.toastr} // This is the default
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    closeOnToastrClick
                />
                <Router>
                    <Switch>
                        <AuthLayout exact path="/post" component={Post} />
                        <AuthLayout exact path="/explore" component={Explore} />
                        {/* <AuthLayout path="/signup" component={SignUp} />
                        <AuthLayout
                            path="/resetpassword"
                            component={ResetPassword}
                        />
                        <AuthLayout
                            path="/verification"
                            component={Verification}
                        />
                        <AuthLayout
                            path="/myaccount/profile"
                            component={Profile}
                        />
                        <AuthLayout
                            path="/myaccount/orders"
                            component={Orders}
                        />
                        <AuthLayout
                            path="/myaccount/favorites"
                            component={Favorites}
                        />
                        <AuthLayout
                            path="/myaccount/changepassword"
                            component={ChangePassword}
                        />
                        <AuthLayout
                            path="/myaccount/paymentmethods"
                            component={PaymentMethods}
                        />
                        <AuthLayout
                            path="/myaccount/contactpreferences"
                            component={ContactPreferences}
                        />
                        <AuthLayout
                            path="/myaccount/socialaccounts"
                            component={SocialAccounts}
                        />

                        <AuthLayout exact={true} path="/" component={Home} />

                        <AuthLayout
                            exact
                            path="/moneymatters"
                            component={MoneyMatters}
                        />
                        <AuthLayout
                            exact
                            path="/moneymatters/insurance"
                            component={Insurance}
                        />
                        <AuthLayout
                            exact
                            path="/moneymatters/insurance/motorinsurance"
                            component={MotorInsurance}
                        />
                        <AuthLayout exact path="/onthego" component={OnTheGo} />
                        <AuthLayout exact path="/onthego/bus" component={Bus} />
                        <AuthLayout
                            exact
                            path="/onthego/ferries"
                            component={Ferries}
                        />
                        <AuthLayout
                            exact
                            path="/onthego/train"
                            component={Train}
                        />
                        <AuthLayout
                            exact
                            path="/onthego/flightsearch"
                            component={FlightSearch}
                        />
                        <AuthLayout
                            exact
                            path="/onthego/flightsearch2"
                            component={FlightSearch2}
                        />
                        <AuthLayout
                            exact
                            path="/onthego/flightsearch/insurance"
                            component={InsuranceFlightSearch}
                        />
                        <AuthLayout
                            exact
                            path="/utilities"
                            component={Utilities}
                        />
                        <AuthLayout
                            exact
                            path="/utilities/airtime"
                            component={Airtime}
                        />
                        <AuthLayout
                            exact
                            path="/utilities/data"
                            component={Data}
                        />
                        <AuthLayout
                            exact
                            path="/utilities/cabletv"
                            component={CableTv}
                        />
                        <AuthLayout
                            exact
                            path="/utilities/electricity"
                            component={Electricity}
                        />
                        <AuthLayout
                            exact
                            path="/utilities/internet"
                            component={Internet}
                        />
                        <AuthLayout exact path="/askdoc" component={AskDoc} /> */}
                        {/* <AuthLayout path="/nomatch" component={NoMatch} /> */}
                    </Switch>
                </Router>
            </PersistGate>
        </Provider>
    );
}
