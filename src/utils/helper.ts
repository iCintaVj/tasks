import { TaskListType } from "../types/types.ts";

export const convertToDashSeparatedId = (str:string) : string => {
    return str.trim().toLowerCase().replace(/\s+/g, '-');
}

export const getTaskListNameFromId = (id: string, taskLists: TaskListType[]): string => {
    const taskList = taskLists.find((taskList) => taskList.id === id);
    return taskList ? taskList.name : '';
}
  