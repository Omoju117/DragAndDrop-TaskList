import { VFC } from 'react';
import ApplicationHeader from '../templates/ApplicationHeader';
import TaskList from '../templates/TaskList';
import IntroductionEdit from '../atoms/IntoductionEdit';

/* ----- 表示するページの本体 ------ */
const Home: VFC = () => (
  <>
    <ApplicationHeader />
    <IntroductionEdit />
    <TaskList />
  </>
);

export default Home;
