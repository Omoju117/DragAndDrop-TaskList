import { VFC } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router';
import Home from './component/pages/Home';
import './App.css';
import SignInPage from './component/pages/SignInPage';
import SignUpPage from './component/pages/SignUpPage';

const App: VFC = () => (
  <>
    <Helmet>
      <style>{'body { background-color: #F4EFE3; }'}</style>
    </Helmet>
    <Switch>
      <Route exact path="/DragAndDrop-TaskList">
        <Home />
      </Route>
      <Route path="/DragAndDrop-TaskList/signIn">
        <SignInPage />
      </Route>
      <Route path="/DragAndDrop-TaskList/signUp">
        <SignUpPage />
      </Route>
    </Switch>
  </>
);
export default App;
