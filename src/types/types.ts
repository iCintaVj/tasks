export type TaskType = {
  id: number;
  name: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status : 'To Do' | 'In Progress' | 'Done';
};

export interface ColumnType {
  name: string;
  tasks : TaskType[];
}

export type TaskListType = {
  name: string;
  tasks : TaskType[];
};

export type SidePanelProps = {
  taskLists: TaskListType[];
  onSelectTaskList: (taskListName: TaskListType) => void;
}

