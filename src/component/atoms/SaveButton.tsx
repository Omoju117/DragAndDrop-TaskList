/* eslint-disable no-console */
import { useState, useEffect, VFC } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { Spinner } from 'react-activity';
import { RootState } from '../../reducer';
import { Task } from '../../Data/data';

const SaveButton: VFC = () => {
  // const url = 'http://localhost:5000/api/tasks/';
  // const url =
  //   'https://draganddroptasklist-env.eba-btryk2uf.ap-northeast-1.elasticbeanstalk.com/api/tasks/';
  const url = 'https://omojuproduct.link/api/tasks/';

  const [signal, setSignal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveSuccess, setIsSaveSuccess] = useState(false);
  const taskListState = useSelector<RootState, Task[]>(
    (state: RootState) => state.taskList,
  );
  const loginUserState = useSelector<RootState, string>(
    (state: RootState) => state.loginUser,
  );

  const postTaskList = (): void => {
    const newSignal = signal + 1;
    setSignal(newSignal);
    setIsSaveSuccess(false);
  };

  useEffect(() => {
    async function save() {
      try {
        const postData: { taskName: string; userName: string }[] = [];
        taskListState.forEach((task) => {
          postData.push({ taskName: task.title, userName: loginUserState });
        });

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postData),
        };

        setIsLoading(true);
        await fetch(url, requestOptions)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setIsSaveSuccess(true);
          });
      } catch (error) {
        console.log(error);
      }
    }
    // saveボタンが押下された際にのみ処理を実行する。
    if (signal > 0) {
      void save();
      setIsLoading(false);
      setSignal(0);
    }
  }, [signal, taskListState, loginUserState]);

  return (
    <>
      <Button
        className="save-button controlItem"
        color="violet"
        onClick={postTaskList}
      >
        Save
      </Button>
      {isSaveSuccess ? <p>Save is success👍</p> : null}
      {isLoading ? (
        <Spinner color="#727981" size={32} speed={1} animating />
      ) : null}
    </>
  );
};

export default SaveButton;
