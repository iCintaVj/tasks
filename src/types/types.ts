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
  setIsModalOpen : (isModalOpen : boolean) => void;
  onSelectTask : (task : TaskType) => void;
}

export type ColumnType = {
  name: string;
}

export type ColumnProps = ColumnType & {
  taskListId : string;
  tasks : TaskType[];
  setTasks : (tasks : TaskType[]) => void;
  setIsModalOpen : (isModalOpen : boolean) => void;
  onSelectTask : (task : TaskType) => void;
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
  setIsModalOpen : (isModalOpen : boolean) => void;
  onSelectTask : (task : TaskType | null) => void;
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

export type TaskModalProps = {
  tasks : TaskType[];
  setTasks : (tasks : TaskType[]) => void;
  task?: TaskType | null;
  onClose: () => void;
  taskListId: string;
}