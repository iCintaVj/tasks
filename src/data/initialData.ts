import { ColumnType, TaskListType, TaskType } from "../types/types";

export const dummyTaskLists : TaskListType[] = [
  {
    id: 'taskList1',
    name: 'Work',
  },
  {
    id: 'taskList2',
    name: 'Financial',
  },
  {
    id: 'taskList3',
    name: 'Self Development',
  },
  {
    id: 'taskList4',
    name: 'Health',
  }
];

export const dummyColumns : ColumnType[] = [
  {
    id: 'todo',
    name: 'Todo',
  },
  {
    id: 'in-progress',
    name: 'In Progress',
  },
  {
    id: 'Done',
    name: 'Done',
  }
]


export const dummyTasks : TaskType[] = [
  { id: 10, name: 'Morning run', priority: 'High', dueDate: '2021-12-31', status: 'Todo', taskListId: 'taskList4' },
  { id: 11, name: 'Healthy meal prep', priority: 'Medium', dueDate: '2021-12-25', status: 'In Progress', taskListId: 'taskList4' },
  { id: 12, name: 'Yoga session', priority: 'Low', dueDate: '2021-12-20', status: 'Done', taskListId: 'taskList4' },
  { id: 19, name: 'Doctor appointment', priority: 'High', dueDate: '2021-12-23', status: 'Todo', taskListId: 'taskList4' },
  { id: 20, name: 'Gym workout', priority: 'Medium', dueDate: '2021-12-26', status: 'In Progress', taskListId: 'taskList4' },
  { id: 7, name: 'Read a book', priority: 'High', dueDate: '2021-12-31', status: 'Todo', taskListId: 'taskList3' },
  { id: 8, name: 'Learn a new skill', priority: 'Medium', dueDate: '2021-12-25', status: 'In Progress', taskListId: 'taskList3' },
  { id: 9, name: 'Practice meditation', priority: 'Low', dueDate: '2021-12-20', status: 'Done', taskListId: 'taskList3' },
  { id: 17, name: 'Attend workshop', priority: 'High', dueDate: '2021-12-19', status: 'Todo', taskListId: 'taskList3' },
  { id: 18, name: 'Write a journal', priority: 'Medium', dueDate: '2021-12-21', status: 'In Progress', taskListId: 'taskList3' },
  { id: 4, name: 'Pay bills', priority: 'High', dueDate: '2021-12-31', status: 'Todo', taskListId: 'taskList2' },
  { id: 5, name: 'Review budget', priority: 'Medium', dueDate: '2021-12-25', status: 'In Progress', taskListId: 'taskList2' },
  { id: 6, name: 'Invest wisely', priority: 'Low', dueDate: '2021-12-20', status: 'Done', taskListId: 'taskList2' },
  { id: 15, name: 'Tax planning', priority: 'High', dueDate: '2021-12-22', status: 'Todo', taskListId: 'taskList2' },
  { id: 16, name: 'Savings review', priority: 'Medium', dueDate: '2021-12-28', status: 'In Progress', taskListId: 'taskList2' },
  { id: 1, name: 'Finish project', priority: 'High', dueDate: '2021-12-31', status: 'Todo', taskListId: 'taskList1' },
  { id: 2, name: 'Email client', priority: 'Medium', dueDate: '2021-12-25', status: 'In Progress', taskListId: 'taskList1' },
  { id: 3, name: 'Prepare report', priority: 'Low', dueDate: '2021-12-20', status: 'Done', taskListId: 'taskList1' },
  { id: 13, name: 'Team meeting', priority: 'High', dueDate: '2021-12-15', status: 'Todo', taskListId: 'taskList1' },
  { id: 14, name: 'Code review', priority: 'Medium', dueDate: '2021-12-18', status: 'In Progress', taskListId: 'taskList1' }
]

