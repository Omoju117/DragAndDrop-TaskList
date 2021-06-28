import { VFC } from 'react';
import { Helmet } from 'react-helmet';
import Home from './component/pages/Home';
import './App.css';

const App: VFC = () => (
  <>
    <Helmet>
      <style>{'body { background-color: #F4EFE3; }'}</style>
    </Helmet>
    <Home />
  </>
);

export default App;
