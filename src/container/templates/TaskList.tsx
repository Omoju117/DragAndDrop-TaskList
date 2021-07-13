/* eslint @typescript-eslint/no-unsafe-member-access: 0 */
// TODO event.targetを引数に指定できない方法を調査する。一旦問題が出ないことは確認済みなのでanyで回避。
import { useState, VFC } from 'react';
import { Item } from 'semantic-ui-react';
import { Container, Draggable, DropResult } from 'react-smooth-dnd';
import arrayMove from 'array-move';
import { useDispatch, useSelector } from 'react-redux';
import ResetButton from '../../component/atoms/ResetButton';
import AddButton from '../../component/atoms/AddButton';
import InputForm from '../../component/atoms/InputForm';
import { RootState } from '../../reducer';
import TaskBar from '../../component/molecules/TaskBar';
import { Task } from '../../Data/data';
import SaveButton from '../../component/atoms/SaveButton';
// import SaveButton from '../../component/atoms/SaveButton';

/* ---------タスクリスト本体のコンポーネント--------- */

/* ----------タスクの型定義---------- */

type Props = {
  add?: (id: number, taskName: string) => void;
  del?: (index: number) => void;
  edit?: () => void;
  refresh?: (list: Task[]) => void;
};
/* -------------------------------- */

const TaskList: VFC<Props> = ({
  add = () => undefined,
  del = () => undefined,
  edit = () => undefined,
  refresh = () => undefined,
}) => {
  /* ------------Store,Reducerに関する処理------------ */
  // Storeに格納してあるタスクリストの本体
  const taskListState = useSelector<RootState, Task[]>(
    (state: RootState) => state.taskList,
  );

  // dispatcher
  const dispatch = useDispatch();

  /* --------状態(state)の定義------------- */

  // タスク名
  const [taskName, setTaskName] = useState<string>('');
  // タスクのid
  const [idCnt, setIdCnt] = useState(
    taskListState.length > 0
      ? taskListState[taskListState.length - 1].id + 1
      : 0,
  );
  // 追加ボタンの活性制御
  const [disabled, setDisabled] = useState(true);

  /* ------------タスクの追加に関する処理------------ */
  // ---タスクの追加
  const addTask = () => {
    const newIdCnt = idCnt + 1;
    setIdCnt(newIdCnt);
    // call reducer
    dispatch(add(newIdCnt, taskName));

    // 入力された値をクリアーする
    setTaskName('');
    setDisabled(true);
  };

  /* ------------入力フォームに関する処理------------ */
  // 入力フォームの入力を受付けるための処理
  const handleValue = (target: HTMLInputElement) => {
    // 35文字以上の入力はタスクからはみ出てしまうので受け付けない
    if (target.value.length > 35) {
      return;
    }
    setTaskName(target !== null ? target.value : '');
    setDisabled(!(target.value.length > 0));
  };

  /* ------------タスクのリセットに関する処理------------ */

  // ---全てのタスクのリセット
  const reset = () => {
    // eslint-disable-next-line no-alert
    const confirmAnswer = window.confirm('Do you wanna delete All Task ?');
    // キャンセルされた場合はリセットを中断
    if (!confirmAnswer) {
      return;
    }

    // setTask([]);
    dispatch(refresh([]));
  };

  /* ------タスクをドラッグ&ドロップでソート可能にするための関数------ */

  const onDrop = (dropResult: DropResult) => {
    // `DropResult` で型定義
    const { removedIndex, addedIndex } = dropResult;
    // setTask((tasksArray) =>
    //   arrayMove(tasksArray, removedIndex || 0, addedIndex || 0),

    let newTaskListState = [...taskListState];
    newTaskListState = arrayMove(
      newTaskListState,
      removedIndex || 0,
      addedIndex || 0,
    );
    dispatch(refresh(newTaskListState));
  };

  /* ------------------------------------------------------ */

  return (
    <>
      <div className="task-list-container">
        <InputForm
          inputValue={taskName}
          placeholder="Enter any task that you have to do."
          onChangeHandler={(e) => handleValue(e.target)}
        />
        <AddButton addTask={addTask} disabled={disabled} />
        <ResetButton reset={reset} />
        <SaveButton />

        <Item.Group>
          <Container
            drag-handle-selector=".drag-handle-selector"
            lockAxis="y"
            onDrop={onDrop}
          >
            {taskListState.map((task, index) => (
              <Draggable key={task.id}>
                <TaskBar
                  targetTask={task}
                  index={index}
                  del={del}
                  edit={edit}
                  refresh={refresh}
                />
              </Draggable>
            ))}
          </Container>
        </Item.Group>
      </div>
    </>
  );
};

export default TaskList;
