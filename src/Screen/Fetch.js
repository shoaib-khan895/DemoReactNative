import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    FlatList,
} from "react-native";

const movieURL = "https://reactnative.dev/movies.json";

const Fetch = () => {
    const [data, setData] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        fetch(movieURL)
            .then((response) => response.json())
            .then((json) => {
                setData(json.movies);
                setTitle(json.title);
            })
            .catch((error) => alert(error))
    });

    return (
        (
            <View>
                <Text style={styles.title}>{title}</Text>
                <View style={{ borderBottomWidth: 1, marginBottom: 12 }}></View>
                <FlatList
                    data={data}
                    keyExtractor={({ id }) => id}
                    renderItem={({ item }) => (
                        <View style={{ paddingBottom: 10 }}>
                            <Text style={styles.movieText}>
                                {item.id}. {item.title}, {item.releaseYear}
                            </Text>
                        </View>
                    )}
                />
            </View>
        )
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 48,
    },
    movieText: {
        fontSize: 26,
        fontWeight: "200",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
    },
    description: {
        textAlign: "center",
        marginBottom: 18,
        fontWeight: "200",
        color: "green",
    },
});

export default Fetch;

// {
//     "title": "The Basics - Networking",
//     "description": "Your app fetched this from a remote endpoint!",
//     "movies": [
//       { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
//       { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
//       { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
//       { "id": "4", "title": "Inception", "releaseYear": "2010" },
//       { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
//     ]
//   }