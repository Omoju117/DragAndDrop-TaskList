import { Task } from './Data/data';

// * -------------------Common--------------------- * //
type ValueOf<T> = T[keyof T];

// * -------------------TaskList--------------------- * //
export const TaskListActionType = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  EDIT: 'EDIT',
  REFRESH: 'REFRESH',
} as const;

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

// * -------------------LoginUser--------------------- * //
export const LoginUserActionType = {
  SET: 'SET',
} as const;

export type LoginUserAction = {
  type: ValueOf<typeof LoginUserActionType>;
  loginUserName: string;
};

export const setLoginUser = (loginUser: string): LoginUserAction => ({
  type: LoginUserActionType.SET,
  loginUserName: loginUser,
});
