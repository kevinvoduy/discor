import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Links from '../links';
import Feed from './feed';
import People from './people';

const ContentSwitcher = () => (
  <div>
    <Links />
    <Switch>
      <Route path="/home/people" component={People} />
      <Route path="/home" component={Feed} />
    </Switch>
  </div>
);

export default ContentSwitcher;
