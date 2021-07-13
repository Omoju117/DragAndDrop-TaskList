import { combineReducers, Reducer } from 'redux';
import { LoginUserAction, TaskListAction } from './actions';
import { Task } from './Data/data';

// * -------------------TaskList--------------------- * //
export type TaskListState = Task[];
export const initialState: TaskListState = [
  {
    id: 0,
    title: 'You can Add tasks, Delete, and Sort.',
    mode: 'display',
  },
  {
    id: 1,
    title: 'Happy Tasking!',
    mode: 'display',
  },
  {
    id: 2,
    title: '👌',
    mode: 'display',
  },
];

export const taskListReducer: Reducer<TaskListState, TaskListAction> = (
  state: TaskListState = initialState,
  action: TaskListAction,
): TaskListState => {
  let newTaskList = null;
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id || 0,
          title: action.taskName || '',
          mode: 'display',
        },
      ];
    case 'DELETE':
      newTaskList = [...state];
      newTaskList.splice(action.index || 0, 1);

      return newTaskList;
    case 'EDIT':
      return [...state];

    case 'REFRESH':
      return action.list || [];

    default: {
      const _: never = action.type;

      return state;
    }
  }
};

// * -------------------LoginUser--------------------- * //
export type LoginUserState = string;
export const loginUserReducer: Reducer<LoginUserState, LoginUserAction> = (
  state: LoginUserState = 'default',
  action: LoginUserAction,
): LoginUserState => {
  switch (action.type) {
    case 'SET':
      return action.loginUserName;
    default: {
      const _: never = action.type;

      return state;
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  taskList: taskListReducer,
  loginUser: loginUserReducer,
});
