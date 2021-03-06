import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

import Container from './components/Container';
import AppBar from './components/AppBar/AppBar';
import Loader from './components/Loader';

const SearchUsersPage = lazy(() =>
  import('./views/SearchUsersPage' /* webpackChunkName: "search_users_page" */),
);
const UserDetailsPage = lazy(() =>
  import('./views/UserDetailsPage' /* webpackChunkName: "user_details_page" */),
);
const NotFoundViews = lazy(() =>
  import(
    './views/NotFoundViews' /* webpackChunkName: "not_found_views_page" */
  ),
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path={routes.search} component={SearchUsersPage} />
          <Route path={routes.userDetails} component={UserDetailsPage} />
          <Route component={NotFoundViews} />
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
