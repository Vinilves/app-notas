import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useNotes } from './context/notes_context';

type NewNoteScreenProps = {};

const NewNoteScreen: React.FC<NewNoteScreenProps> = () => {
  const [text, setText] = useState<string>(''); 
  const { notes, setNotes } = useNotes(); 
  const router = useRouter();

  const addNote = () => {
    if (text.trim()) {
      setNotes([...notes, text]);  
      router.back();  
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua anotação..."
        multiline
        value={text}
        onChangeText={setText}  
      />
      <Button title="Salvar" onPress={addNote} />  
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    minHeight: 100,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
});

export default NewNoteScreen;
