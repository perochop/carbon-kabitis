import { Content } from "carbon-components-react/lib/components/UIShell";
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';

import KabitisHeader from './components/header';
import AddContact from './components/addContact';
import LandingPage from './components/landingPage';
import Messages from "./components/messages";




class App extends Component {
  render() {
    return (
      <>
        <KabitisHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/addcontact" component={AddContact} />
            <Route path="/messages" component={Messages} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
