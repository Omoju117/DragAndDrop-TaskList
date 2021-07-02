// eslint-disable-next-line import/no-cycle
import { Task } from './component/templates/TaskList';

export const TaskListActionType = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  EDIT: 'EDIT',
  REFRESH: 'REFRESH',
} as const;

type ValueOf<T> = T[keyof T];

export type TaskListAction = {
  type: ValueOf<typeof TaskListActionType>;
  id?: number;
  taskName?: string;
  index?: number;
  list?: Task[];
};

export const addTask = (id: number, taskName: string): TaskListAction => ({
  type: TaskListActionType.ADD,
  id,
  taskName,
});

export const deleteTask = (deleteIndex: number): TaskListAction => ({
  type: TaskListActionType.DELETE,
  index: deleteIndex,
});

export const editTask = (): TaskListAction => ({
  type: TaskListActionType.EDIT,
});

export const refreshTask = (refreshTaskList: Task[]): TaskListAction => ({
  type: TaskListActionType.REFRESH,
  list: refreshTaskList,
});
