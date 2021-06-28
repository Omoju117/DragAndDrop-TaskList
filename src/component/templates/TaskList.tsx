/* eslint @typescript-eslint/no-unsafe-member-access: 0 */
/* eslint no-alert: 0 */
// TODO event.targetを引数に指定できない方法を調査する。一旦問題が出ないことは確認済みなのでanyで回避。
import { useState, VFC } from 'react';
import { Item, Icon, Button } from 'semantic-ui-react';
import { Container, Draggable, DropResult } from 'react-smooth-dnd';
import arrayMove from 'array-move';
import ResetButton from '../atoms/ResetButton';
import AddButton from '../atoms/AddButton';
import InputForm from '../atoms/InputForm';

// タスクの型定義
export type Task = {
  id: number;
  title: string;
};

const TaskList: VFC = () => {
  // ------------------------------------
  // stateの制御

  // タスク名
  const [taskName, setTaskName] = useState<string>('');
  // タスクのid
  const [idCnt, setIdCnt] = useState(1);
  // 追加ボタンの非活性
  const [disabled, setDisabled] = useState(true);
  // タスクのリスト
  const [tasks, setTask] = useState<Task[]>([
    {
      id: idCnt,
      title: 'You can Add tasks, Delete, and Sort.',
    },
  ]);

  // ------------------------------------
  // stateの操作用関数の定義

  // ---タスクの追加
  const addTask = () => {
    const newIdCnt = idCnt + 1;
    setIdCnt(newIdCnt);
    setTask([
      ...tasks,
      {
        id: newIdCnt,
        title: taskName,
      },
    ]);

    // 入力された値をクリアーする
    setTaskName('');
    setDisabled(true);
  };

  // ---タスクの削除
  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };

  // ---全てのタスクのリセット
  const reset = () => {
    const confirmAnswer = window.confirm('Do you wanna delete All Task ?');
    // キャンセルされた場合はリセットを中断
    if (!confirmAnswer) {
      return;
    }

    setTask([]);
  };

  // ---タスクのタイトルの入力をフォームで受け付けるための関数
  const handleValue = (target: HTMLInputElement) => {
    // 35文字以上の入力はタスクからはみ出てしまうので受け付けない
    if (target.value.length > 35) {
      return;
    }
    setTaskName(target !== null ? target.value : '');
    setDisabled(!(target.value.length > 0));
  };

  // ---タスクをドラッグ&ドロップでソート可能にするための関数
  const onDrop = (dropResult: DropResult) => {
    // `DropResult` で型定義
    const { removedIndex, addedIndex } = dropResult;
    setTask((tasksArray) =>
      arrayMove(tasksArray, removedIndex || 0, addedIndex || 0),
    );
  };

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
            dragHandleSelector=".dragHandleSelector"
            lockAxis="y"
            onDrop={onDrop}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id}>
                <Item key={task.id} className="task">
                  <Item.Content>
                    <Icon className="taskIcon" name="certificate" size="big" />
                    <span className="taskNumber">{index + 1}</span>
                    <Item.Header className="taskHeader">
                      {task.title}
                    </Item.Header>
                    <Icon
                      className="dragHandleSelector"
                      name="sort"
                      size="big"
                    />
                    <Button
                      className="delete"
                      color="yellow"
                      size="mini"
                      onClick={() => deleteTask(index)}
                    >
                      ×
                    </Button>
                  </Item.Content>
                </Item>
              </Draggable>
            ))}
          </Container>
        </Item.Group>
      </div>
    </>
  );
};

export default TaskList;
