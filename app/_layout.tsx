import { Stack } from 'expo-router';
import { NotesProvider } from './context/notes_context';

export default function Layout() {
  return (
    <NotesProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: 'Minhas Anotações' }}
        />
        <Stack.Screen
          name="new_note"
          options={{ title: 'Nova Anotação' }}
        />
      </Stack>
    </NotesProvider>
  );
}
