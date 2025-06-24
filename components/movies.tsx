import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { fetchTrendingMovies } from "../api/movieService";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 12 * 2 - 12) / 2;

export default function Movies() {
  const [info, setInfo] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchTrendingMovies();
      setInfo(data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FlatList
      data={info.results}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
            }}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.release_date}</Text>
        </View>
      )}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#18181b",
    flex: 1,
  },
  loading: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 18,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    width: CARD_WIDTH,
    padding: 12,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 16,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
    minHeight: 48,
  },
  date: {
    color: "gray",
    fontSize: 16,
    padding: 10,
    minHeight: 48,
  },
});
