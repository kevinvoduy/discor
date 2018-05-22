import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from './feed';

const ContentSwitcher = () => (
  <Switch>
    <Route path="/home/feed" component={Feed} />
  </Switch>
);

export default ContentSwitcher;
