export type TaskType = {
  id: string;
  name: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status : 'Todo' | 'In Progress' | 'Done';
  taskListId: string;
  description? : string;
};

export type TaskCardProps = TaskType & {
  tasks : TaskType[];
  setTasks : (tasks : TaskType[]) => void;
}

export type ColumnType = {
  id : string;
  name: string;
}

export type ColumnProps = {
  id : string;
  name: string;
  taskListId : string;
  tasks : TaskType[];
  setTasks : (tasks : TaskType[]) => void;
}

export type TaskListType = {
  id : string;
  name : string;
}

export type TaskListCardProps = TaskListType & {
  taskLists : TaskListType[];
  tasks : TaskType[];
  setTasks : (tasks : TaskType[]) => void;
}

export type TaskListHeaderProps = {
  taskListId : string;
  taskListName : string;
  tasks : TaskType[];
  setTasks: (tasks : TaskType[]) => void;
}

export type SidePanelNavItemProps = TaskListType & {
  taskLists : TaskListType[];
  setTaskLists : (taskLists : TaskListType[]) => void;
}

export type TaskListItemProps = TaskListType & {
  isEditing : boolean;
  setIsEditing : (isEditing : boolean) => void;
}

export type SidePanelProps = {
  taskLists: TaskListType[];
  setTaskLists: (taskLists: TaskListType[]) => void;
  selectedTaskList: TaskListType;
  onSelectTaskList: (taskListName: TaskListType) => void;
}

