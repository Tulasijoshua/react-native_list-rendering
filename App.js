import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PokomonList from './components/PokemonList';
import FlatPokemon from './components/FlatPokemon';
import FlatGroupedPoke from './components/FlatGroupedPoke';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <PokomonList /> */}
      {/* <FlatPokemon /> */}
      <FlatGroupedPoke />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
