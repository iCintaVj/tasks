import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { ModalContextType } from '../types/types.ts';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider =({ children }: { children: ReactNode }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen}}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModalContext must be used within a TaskListProvider');
    }
    return context;
};