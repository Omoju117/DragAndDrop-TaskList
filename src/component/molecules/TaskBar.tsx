/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useState, VFC } from 'react';
import { Item, Icon, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { TaskListState } from '../../reducer';
import { Task } from '../../Data/data';

/* ---------個別のタスクを表現するコンポーネント--------- */

/* ----------タスクの型定義---------- */
// export type Task = {
//   id: number;
//   title: string;
//   mode: string;
// };

type Props = {
  targetTask: Task;
  index: number;
  del?: (index: number) => void;
  edit?: () => void;
  refresh?: (list: Task[]) => void;
};

/* -------------------------------- */
const TaskBar: VFC<Props> = ({
  targetTask,
  index,
  del = () => undefined,
  edit = () => undefined,
  refresh = () => undefined,
}) => {
  /* --------状態(state)の定義------------- */
  // タスクを編集可能にするためのオブジェクト
  const [editModeTask, setEditModeTask] = useState<Task>({
    id: 0,
    title: '',
    mode: '',
  });

  /* ------------Store,Reducerに関する処理------------ */
  // Storeに格納してあるタスクリストの本体
  const taskListState = useSelector<TaskListState, Task[]>((state) => state);

  // dispatcher
  const dispatch = useDispatch();

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
  const editTaskTitle = (editTarget: Task) => {
    if (taskListState.filter((t) => t.mode === 'edit').length > 0) {
      return;
    }
    const tempEditTarget = editTarget;
    tempEditTarget.mode = 'edit';

    // タスクのリストを更新して再レンダリングさせる
    // call reducer
    dispatch(edit());
    setEditModeTask(targetTask);
    toggleInvalidControlTarget();
  };

  // タスクの内容を編集する処理
  const handleTaskTitle = (target: HTMLInputElement) => {
    const newEditTask = { ...editModeTask };
    newEditTask.title = target.value;
    setEditModeTask(newEditTask);
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
      editModeTask.mode = 'display';
      newTasks[newTasks.indexOf(foundEditTask)] = editModeTask;
      // call reducer
      dispatch(refresh(newTasks));
      toggleInvalidControlTarget();
    }
  };

  /* ------------------------------------------------------ */

  return (
    <Item key={targetTask.id} className="task">
      <Item.Content>
        <Icon className="task-icon" name="certificate" size="big" />
        <span className="task-number">{index + 1}</span>
        {targetTask.mode === 'edit' ? (
          <input
            className="edit-input-form"
            type="text"
            value={editModeTask.title}
            onChange={(e) => handleTaskTitle(e.target)}
            onKeyPress={(e) => onEnterForCompleteEdit(e.key)}
          />
        ) : (
          <Item.Header
            className="task-header"
            onDoubleClick={() => editTaskTitle(targetTask)}
          >
            {targetTask.title}
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
  );
};

export default TaskBar;
