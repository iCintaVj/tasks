import { BoardData } from "../types/types.ts";

export const initialData: BoardData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Learn TypeScript' },
      'task-2': { id: 'task-2', content: 'Build a Kanban App' },
      'task-3': { id: 'task-3', content: 'Test the app' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'To Do',
        taskIds: ['task-1', 'task-2', 'task-3'],
      },
      'column-2': {
        id: 'column-2',
        title: 'In Progress',
        taskIds: [],
      },
      'column-3': {
        id: 'column-3',
        title: 'Done',
        taskIds: [],
      },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
  };