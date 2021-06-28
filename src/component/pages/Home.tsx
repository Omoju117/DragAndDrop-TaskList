import { VFC } from 'react';
import ApplicationHeader from '../templates/ApplicationHeader';
import TaskList from '../templates/TaskList';

const Home: VFC = () => (
  <>
    <ApplicationHeader />
    <TaskList />
  </>
);

export default Home;
