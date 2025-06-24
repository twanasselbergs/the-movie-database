import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
  const [info, setInfo] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const apiUrl =
    "https://api.themoviedb.org/3/trending/movie/day?api_key=d75bf94d8a40cedf89713e3d8635c16d";

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
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
    <View>
      <Text className="font-bold text-5xl">Home</Text>
      <Link href="/about">Go to About Page</Link>

      {loading && <Text>Loading...</Text>}

      {info.results?.map((movie: any) => (
        <>
          <Text key={movie.id}>{movie.title}</Text>
        </>
      ))}
    </View>
  );
}
