import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.scss';
import 'react-id-swiper/src/styles/scss/swiper.scss';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCheck,
  faRedoAlt
} from '@fortawesome/free-solid-svg-icons';

// Components
import Loading from '../loading';
import TopBar from '../top-bar';
// import Footer from '../footer';

// Pages
const Menu = React.lazy(() => import('../menu'));
const NotFoundPage = React.lazy(() => import('../not-found-page'));
const HomePage = React.lazy(() => import('../home-page'));

library.add(faBars, faCheck, faRedoAlt);

const App = () => {
  return (
    <React.Fragment>
      <main className="app">
        <Router basename={process.env.PUBLIC_URL}>
          <div className="app__router-view">
            <TopBar />
            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route key="1" path="/" component={HomePage} exact />
                <Route key="2" path="/menu" component={Menu} exact />
                <Route key="100" path="/loading" component={Loading} exact />
                <Route key="0" component={NotFoundPage} />
              </Switch>
            </React.Suspense>
          </div>
        </Router>
      </main>
    </React.Fragment>
  );
};

export default App;
