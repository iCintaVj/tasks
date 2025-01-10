export type TaskType = {
  id: number;
  name: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status : 'Todo' | 'In Progress' | 'Done';
  taskListId: string;
  description? : string;
};

export type ColumnType = {
  id : string;
  name: string;
}

export type ColumnProps = {
  id : string;
  name: string;
  taskListId : string;
}

export type TaskListType = {
  id : string;
  name : string;
}

export type TaskListItemProps = TaskListType & {
  isEditing : boolean;
  setIsEditing : (isEditing : boolean) => void;
}

export type SidePanelProps = {
  taskLists: TaskListType[];
  onSelectTaskList: (taskListName: TaskListType) => void;
}

