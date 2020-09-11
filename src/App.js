import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import Bio from './pages/Bio/Bio';
import Projects from './pages/Projects/Projects';
import Hobbies from './pages/Hobbies/Hobbies';
import Menu from './components/Menu/Menu';
import classes from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <header className={classes.Header}>
          <Link to="/">
            <h1>Paulina Ng</h1>
          </Link>
        </header>
        <Menu />
        <main className={classes.Content}>
          <Switch>
            <Route path="/" exact component={Bio} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/hobbies" exact component={Hobbies} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
