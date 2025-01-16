export type TaskType = {
  id: string;
  name: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  status: 'Todo' | 'In Progress' | 'Done';
  taskListId: string;
  description?: string;
};

export type AppContextType = {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
  updateTask: (updatedTask: TaskType) => void;
  createTask: (newTask: TaskType) => void;
  deleteTask: (taskId: string) => void;
  selectedTask : TaskType | null;
  setSelectedTask: (task: TaskType | null) => void;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  columns: string[];
  setColumns : (columns: string[]) => void;
  taskLists: TaskListType[];
  setTaskLists: (taskLists: TaskListType[]) => void;
  createTaskList: (newTask: TaskListType) => void;
  deleteTaskList: (taskId: string) => void;
  updateTaskList: (taskId: TaskListType) => void;
  selectedTaskList: TaskListType;
  setSelectedTaskList: (taskList: TaskListType) => void;
  isTableView: boolean;
  setIsTableView: (isTableView: boolean) => void;
};

export type TasksContextType = {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
  updateTask: (updatedTask: TaskType) => void;
  createTask: (newTask: TaskType) => void;
  deleteTask: (taskId: string) => void;
  selectedTask : TaskType | null;
  setSelectedTask: (task: TaskType | null) => void;
};

export type ModalContextType = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export type TaskCardProps = TaskType & {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
  onSelectTask: (task: TaskType) => void;
}

export type ColumnProps = {
  name: string;
}

export interface ColumnContextType {
  columns: string[];
  setColumns : (columns: string[]) => void;
}

export type TaskListType = {
  id: string;
  name: string;
}

export type TaskListContextType = {
  taskLists: TaskListType[];
  setTaskLists: (taskLists: TaskListType[]) => void;
  createTaskList: (newTask: TaskListType) => void;
  deleteTaskList: (taskId: string) => void;
  updateTaskList: (taskId: TaskListType) => void;
  selectedTaskList: TaskListType;
  setSelectedTaskList: (taskList: TaskListType) => void;
};

export type TaskListCardProps = TaskListType & {
  taskLists: TaskListType[];
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
}

export type TaskListHeaderProps = {
  taskListId: string;
  taskListName: string;
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
  setIsModalOpen: (isModalOpen: boolean) => void;
  onSelectTask: (task: TaskType | null) => void;
}

export type SidePanelNavItemProps = TaskListType & {
  taskLists: TaskListType[];
  setTaskLists: (taskLists: TaskListType[]) => void;
}

export type TaskListItemProps = TaskListType & {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}

export type SidePanelProps = {
  taskLists: TaskListType[];
  setTaskLists: (taskLists: TaskListType[]) => void;
  selectedTaskList: TaskListType;
  onSelectTaskList: (taskListName: TaskListType) => void;
}

export type TaskModalProps = {
  tasks: TaskType[];
  setTasks: (tasks: TaskType[]) => void;
  task?: TaskType | null;
  onClose: () => void;
  taskListId: string;
}