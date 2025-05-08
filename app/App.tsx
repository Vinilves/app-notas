import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from '../app/index';
import { NotesProvider } from './context/notes_context';

export default function App() {
  return (
    <NotesProvider>
      <HomeScreen />
      <StatusBar style="auto" />
    </NotesProvider>
  );
}
