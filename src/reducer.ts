/* eslint-disable import/no-cycle */
import { Reducer } from 'redux';
import { TaskListAction } from './actions';
import { Task } from './component/templates/TaskList';

export type TaskListState = Task[];
export const initialState: TaskListState = [
  {
    id: 0,
    title: 'You can Add tasks, Delete, and Sort.',
    mode: 'display',
  },
  {
    id: 99998,
    title: 'Happy Tasking!',
    mode: 'display',
  },
  {
    id: 99999,
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
