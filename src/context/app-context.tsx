'use client';

import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface AppContextType {
  contactMessage: string;
  setContactMessage: Dispatch<SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [contactMessage, setContactMessage] = useState('');
  return (
    <AppContext.Provider value={{ contactMessage, setContactMessage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
