import axios from "axios"
import { ColumnType } from "../types/types";

export const getColumns = async (): Promise<ColumnType[]> => {
    const response = await axios.get('http://localhost:8080/columns');
    return response.data;
}