import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// components
import Home from '../pages/home';
import Journey from '../pages/journey';
import Projects from '../pages/projects';
import Interests from '../pages/interests';
import Contact from '../pages/contact';

import '../../assets/css/default.min.css';

function Container({ location }) {
  return (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <Switch location={location}>
            <Route exact path='/' component={Home} />
            <Route exact path='/journey' component={Journey} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/interests' component={Interests} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
  );
}

export default withRouter(Container);
