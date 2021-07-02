import { VFC } from 'react';
import ApplicationHeader from '../templates/ApplicationHeader';
import TaskList from '../templates/TaskList';
import IntroductionEdit from '../atoms/IntoductionEdit';
import { addTask, deleteTask, editTask, refreshTask } from '../../actions';

/* ----- 表示するページの本体 ------ */
const Home: VFC = () => (
  <>
    <ApplicationHeader />
    <IntroductionEdit />
    <TaskList
      add={addTask}
      del={deleteTask}
      edit={editTask}
      refresh={refreshTask}
    />
  </>
);

export default Home;
