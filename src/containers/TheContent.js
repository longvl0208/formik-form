import React, { Suspense } from 'react';
import {
  Redirect,
  Route,
  Switch,
  Router, BrowserRouter,
} from 'react-router-dom';
import { CContainer, CFade } from '@coreui/react';

// routes config
import { createBrowserHistory } from 'history';
import routes from '../routes';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

const TheContent = () => {
  const history = createBrowserHistory();
  console.log('go to main layout');
  return (
    <main className="c-main">
      <CContainer fluid>
        {/*<Router history={history}>*/}
        {/*<BrowserRouter>*/}
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => (
                  <CFade>
                    <route.component {...props} />
                  </CFade>
                )}
              />
            ))}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
        {/*</Router>*/}
        {/*</BrowserRouter>*/}
      </CContainer>
    </main>
  ); };

export default React.memo(TheContent);
