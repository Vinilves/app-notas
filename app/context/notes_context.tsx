import React, { createContext, ReactNode, useContext, useState } from 'react';

type NotesContextType = {
  notes: string[];
  setNotes: React.Dispatch<React.SetStateAction<string[]>>;
};

const NotesContext = createContext<NotesContextType | undefined>(undefined);

type NotesProviderProps = {
  children: ReactNode;
};

export const NotesProvider: React.FC<NotesProviderProps> = ({ children }) => {
  const [notes, setNotes] = useState<string[]>([]);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = (): NotesContextType => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
