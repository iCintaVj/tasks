import { ColumnType, TaskListType, TaskType } from "../types/types";

export const dummyTaskLists : TaskListType[] = [
  {
    id: 'work',
    name: 'Work',
  },
  {
    id: 'financial',
    name: 'Financial',
  },
  {
    id: 'self-development',
    name: 'Self Development',
  },
  {
    id: 'health',
    name: 'Health',
  }
];

export const dummyColumns : ColumnType[] = [
  {
    name: 'Todo',
  },
  {
    name: 'In Progress',
  },
  {
    name: 'Done',
  }
]


export const dummyTasks : TaskType[] = [
  { id: '10', name: 'Morning run', priority: 'High', dueDate: '2021-12-31', status: 'Todo', taskListId: 'health' },
  { id: '11', name: 'Healthy meal prep', priority: 'Medium', dueDate: '2021-12-25', status: 'In Progress', taskListId: 'health' },
  { id: '12', name: 'Yoga session', priority: 'Low', dueDate: '2021-12-20', status: 'Done', taskListId: 'health' },
  { id: '19', name: 'Doctor appointment', priority: 'High', dueDate: '2021-12-23', status: 'Todo', taskListId: 'health' },
  { id: '20', name: 'Gym workout', priority: 'Medium', dueDate: '2021-12-26', status: 'In Progress', taskListId: 'health' },
  { id: '7', name: 'Read a book', priority: 'High', dueDate: '2021-12-31', status: 'Todo', taskListId: 'self-development' },
  { id: '8', name: 'Learn a new skill', priority: 'Medium', dueDate: '2021-12-25', status: 'In Progress', taskListId: 'self-development' },
  { id: '9', name: 'Practice meditation', priority: 'Low', dueDate: '2021-12-20', status: 'Done', taskListId: 'self-development' },
  { id: '17', name: 'Attend workshop', priority: 'High', dueDate: '2021-12-19', status: 'Todo', taskListId: 'self-development' },
  { id: '18', name: 'Write a journal', priority: 'Medium', dueDate: '2021-12-21', status: 'In Progress', taskListId: 'self-development' },
  { id: '4', name: 'Pay bills', priority: 'High', dueDate: '2021-12-31', status: 'Todo', taskListId: 'financial' },
  { id: '5', name: 'Review budget', priority: 'Medium', dueDate: '2021-12-25', status: 'In Progress', taskListId: 'financial' },
  { id: '6', name: 'Invest wisely', priority: 'Low', dueDate: '2021-12-20', status: 'Done', taskListId: 'financial' },
  { id: '15', name: 'Tax planning', priority: 'High', dueDate: '2021-12-22', status: 'Todo', taskListId: 'financial' },
  { id: '16', name: 'Savings review', priority: 'Medium', dueDate: '2021-12-28', status: 'In Progress', taskListId: 'financial' },
  { id: '1', name: 'Finish project', priority: 'High', dueDate: '2021-12-31', status: 'Todo', taskListId: 'work' },
  { id: '2', name: 'Email client', priority: 'Medium', dueDate: '2021-12-25', status: 'In Progress', taskListId: 'work' },
  { id: '3', name: 'Prepare report', priority: 'Low', dueDate: '2021-12-20', status: 'Done', taskListId: 'work' },
  { id: '13', name: 'Team meeting', priority: 'High', dueDate: '2021-12-15', status: 'Todo', taskListId: 'work' },
  { id: '14', name: 'Code review', priority: 'Medium', dueDate: '2021-12-18', status: 'In Progress', taskListId: 'work' }
]
