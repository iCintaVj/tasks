import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ColumnContextType } from '../types/types.ts';
import { getColumns } from '../data/dbData.ts';

const ColumnContext = createContext<ColumnContextType | undefined>(undefined);

export const ColumnProvider =({ children }: { children: ReactNode }) => {
    const [columns, setColumns] = useState<string[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
          try {
            const response: string[] = await getColumns();
            setColumns(response);
          } catch (error) {
            console.error('Error fetching tasks:', error);
            setColumns([]);
          }
        };
        fetchTasks();
      },[]);

    return (
        <ColumnContext.Provider value={{ columns, setColumns }}>``
            {children}
        </ColumnContext.Provider>
    );
};

export const useColumnContext = () => {
    const context = useContext(ColumnContext);
    if (!context) {
        throw new Error('useColumnContext must be used within a ColumnProvider');
    }
    return context;
};