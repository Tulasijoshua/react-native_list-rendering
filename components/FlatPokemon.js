import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, FlatList } from "react-native";
import pokemonList from '../data.json';

export default function FlatPokemon() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.scrollView}>
                <FlatList
                    data={pokemonList}
                    renderItem={({ item }) => {
                        console.log(item.id)
                        return (
                            <View style={styles.card} key={item.id}>
                                <Text style={styles.cardText}>{item.type}</Text>
                                <Text style={styles.cardText}>{item.name}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    // horizontal
                    ItemSeparatorComponent={<View style={{ height: 16}} />}
                    ListEmptyComponent={<Text>No items found</Text>}
                    ListHeaderComponent={<Text style={styles.headerText}>Pokemon List</Text>}
                    ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 8,
        borderWidth: 1,
        // marginBottom: 16,
    },
    cardText: {
        fontSize: 30,

    },
    headerText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 12,
    },
    footerText: {
        fontSize: 24, 
        textAlign: "center",
        marginTop: 12
    }
})