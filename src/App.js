import React, { useContext, useState, createContext } from 'react';
import {
  BrowserRouter as Router, Route, Switch, useHistory, Link, Redirect, useLocation,
} from 'react-router-dom';
import './scss/style.scss';
import useProvideAuth from './reusable/custom-hook';
// import { TheLayout } from './containers';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

// function App() {
//   return (
//     <HashRouter>
//       <React.Suspense fallback={loading}>
//         <Switch>
//           <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
//           <Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />} />
//           <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
//           <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
//           <Route path="/" name="Home" render={(props) => <TheLayout {...props} />} />
//         </Switch>
//       </React.Suspense>
//     </HashRouter>
//   );
// }
//
// export default App;

const authContext = createContext();

// eslint-disable-next-line react/prop-types
function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

// eslint-disable-next-line react/prop-types
function PrivateRoute(props) {
  const auth = useAuth();
  const user = JSON.parse(localStorage.getItem('user'));
  console.log('PrivateRoute, auth.user', user);
  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) => (user ? (
  //       children
  //     ) : (
  //       <Redirect
  //         to={{
  //           pathname: '/login',
  //           state: { from: location },
  //         }}
  //       />
  //     ))}
  //   />
  // );
  if (!user) return <Redirect to="/login" />;
  console.log('--Props ', props);
  return (
    <Switch>
      <Route {...props} />
    </Switch>
  );
}

function App() {
  // const history = useLocation();

  // console.log('history', history);

  return (
    <ProvideAuth>
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <PrivateRoute path="/" name="Home" render={(props) => <TheLayout {...props} />} />
            <Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />} />
            {/*<Route path="/" name="Home Page" render={(props) => <TheLayout {...props} />} />*/}
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
          </Switch>
        </React.Suspense>
      </Router>
    </ProvideAuth>
  );
}

export default App;
