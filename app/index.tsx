import { useRouter } from 'expo-router';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useNotes } from './context/notes_context';

type HomeScreenProps = {};

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const router = useRouter();
  const { notes } = useNotes();  

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item, index) => index.toString()}  
        renderItem={({ item }) => (
          <View style={styles.note}>
            <Text style={styles.noteText}>{item}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma anotação ainda.</Text>} 
      />
      <Button title="Nova Anotação" onPress={() => router.push('/new_note')} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16,},
  note: { backgroundColor: '#e6e6fa', padding: 12, marginVertical: 8, borderRadius: 6 },
  noteText: { fontSize: 16 },
  empty: { textAlign: 'center', marginTop: 20, fontStyle: 'italic' },
});

export default HomeScreen;
