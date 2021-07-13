import { VFC } from 'react';
import { useSelector } from 'react-redux';
import ApplicationHeader from '../templates/ApplicationHeader';
import TaskList from '../../container/templates/TaskList';
import IntroductionEdit from '../atoms/IntoductionEdit';
import { addTask, deleteTask, editTask, refreshTask } from '../../actions';
import Introduction from '../atoms/Intoduction';
import SignInButton from '../atoms/SignInButton';
import SignUpButton from '../atoms/SignUpButton';
import { RootState } from '../../reducer';

/* ----- 表示するページの本体 ------ */
const Home: VFC = () => {
  const loginUserState = useSelector<RootState, string>(
    (state: RootState) => state.loginUser,
  );

  return (
    <>
      {loginUserState === 'default' ? (
        <ApplicationHeader
          signIn={<SignInButton />}
          signUp={<SignUpButton />}
        />
      ) : (
        <ApplicationHeader />
      )}
      <IntroductionEdit />
      <TaskList
        add={addTask}
        del={deleteTask}
        edit={editTask}
        refresh={refreshTask}
      />
      <Introduction />
    </>
  );
};

export default Home;
