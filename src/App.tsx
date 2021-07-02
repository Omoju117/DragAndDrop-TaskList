import { VFC } from 'react';
import { Helmet } from 'react-helmet';
import Home from './component/pages/Home';
import './App.css';

const App: VFC = () => (
  // window.onload = () =>
  //   window.alert('Welcome! You can manage any task that you have to do!');

  <>
    <Helmet>
      <style>{'body { background-color: #F4EFE3; }'}</style>
    </Helmet>
    <Home />
  </>
);
export default App;
