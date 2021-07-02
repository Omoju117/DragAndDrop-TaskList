/* eslint @typescript-eslint/no-unsafe-member-access: 0 */
/* eslint no-alert: 0 */
/* eslint @typescript-eslint/no-unsafe-call: 0 */
// TODO event.targetを引数に指定できない方法を調査する。一旦問題が出ないことは確認済みなのでanyで回避。
import { useState, VFC } from 'react';
import { Item, Icon, Button } from 'semantic-ui-react';
import { Container, Draggable, DropResult } from 'react-smooth-dnd';
import arrayMove from 'array-move';
import { useDispatch, useSelector } from 'react-redux';
import ResetButton from '../atoms/ResetButton';
import AddButton from '../atoms/AddButton';
import InputForm from '../atoms/InputForm';
import Introduction from '../atoms/Intoduction';
// eslint-disable-next-line import/no-cycle
import { TaskListState } from '../../reducer';

/* ---------タスクリスト本体のコンポーネント--------- */

/* ----------タスクの型定義---------- */
export type Task = {
  id: number;
  title: string;
  mode: string;
};

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
  /* --------状態(state)の定義------------- */

  // タスク名
  const [taskName, setTaskName] = useState<string>('');
  // タスクのid
  const [idCnt, setIdCnt] = useState(1);
  // 追加ボタンの活性制御
  const [disabled, setDisabled] = useState(true);

  // タスクを編集可能にするためのオブジェクト
  const [editTask, setEditTask] = useState<Task>({
    id: 0,
    title: '',
    mode: '',
  });

  /* ------------Store,Reducerに関する------------ */
  // Storeに格納してあるタスクリストの本体
  const taskListState = useSelector<TaskListState, Task[]>((state) => state);

  // dispatcher
  const dispatch = useDispatch();

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

  /* ------------タスクの削除に関する処理------------ */

  // ---全てのタスクのリセット
  const reset = () => {
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

  /* ------------タスクのUpdateに関する処理------------ */

  // タスクの編集中に他のコントロールを操作できないようにする処理
  const toggleInvalidControlTarget = () => {
    const targetList = document.getElementsByClassName('controlItem');
    const tempTargetList = Array.prototype.slice.call(targetList);

    tempTargetList.forEach((target) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      target.classList.toggle('event-invalid'),
    );
  };

  // 編集用タスクに引数のタスクをセットして編集可能にする処理
  const editTaskTitle = (task: Task) => {
    if (taskListState.filter((t) => t.mode === 'edit').length > 0) {
      return;
    }
    const tempTask = task;
    tempTask.mode = 'edit';

    // タスクのリストを更新して再レンダリングさせる
    // call reducer
    dispatch(edit());
    setEditTask(task);
    toggleInvalidControlTarget();
  };

  // タスクの内容を編集する処理
  const handleTaskTitle = (target: HTMLInputElement) => {
    const newEditTask = { ...editTask };
    newEditTask.title = target.value;
    setEditTask(newEditTask);
  };

  // タスクの編集を完了する処理
  const onEnterForCompleteEdit = (key: string) => {
    if (key === 'Enter') {
      // タスクリストの配列を最新化する
      const foundEditTask = taskListState.find(
        (task: Task) => task.mode === 'edit',
      );
      if (foundEditTask === undefined) {
        return;
      }
      const newTasks = [...taskListState];
      editTask.mode = 'display';
      newTasks[newTasks.indexOf(foundEditTask)] = editTask;
      // call reducer
      dispatch(refresh(newTasks));
      toggleInvalidControlTarget();
    }
  };

  /* ------------------------------------------------------ */

  return (
    <>
      <div className="task-list-container">
        <InputForm
          taskName={taskName}
          onChangeHandler={(e) => handleValue(e.target)}
        />
        <AddButton addTask={addTask} disabled={disabled} />
        <ResetButton reset={reset} />

        <Item.Group>
          <Container
            drag-handle-selector=".drag-handle-selector"
            lockAxis="y"
            onDrop={onDrop}
          >
            {taskListState.map((task, index) => (
              <Draggable key={task.id}>
                <Item key={task.id} className="task">
                  <Item.Content>
                    <Icon className="task-icon" name="certificate" size="big" />
                    <span className="task-number">{index + 1}</span>
                    {task.mode === 'edit' ? (
                      <input
                        className="edit-input-form"
                        type="text"
                        value={editTask.title}
                        onChange={(e) => handleTaskTitle(e.target)}
                        onKeyPress={(e) => onEnterForCompleteEdit(e.key)}
                      />
                    ) : (
                      <Item.Header
                        className="task-header"
                        onDoubleClick={() => editTaskTitle(task)}
                      >
                        {task.title}
                      </Item.Header>
                    )}
                    <Icon
                      className="drag-handle-selector controlItem"
                      name="sort"
                      size="big"
                    />
                    <Button
                      className="delete controlItem"
                      color="yellow"
                      size="mini"
                      onClick={() => dispatch(del(index))}
                    >
                      ×
                    </Button>
                  </Item.Content>
                </Item>
              </Draggable>
            ))}
          </Container>
        </Item.Group>
        <Introduction />
      </div>
    </>
  );
};

export default TaskList;
