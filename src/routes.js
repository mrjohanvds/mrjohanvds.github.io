import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {ContactPage, IntroPage, ProjectsPage, ResumePage} from './pages';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={IntroPage} />
      <Route exact path="/resume" component={ResumePage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  );
}


export default Routes;