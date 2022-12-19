import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, SectionList, StyleSheet, Text, View } from "react-native";
import Card from "./Card";

export default function App() {
  const [datas, setDatas] = useState();
  const [sectionDatas, setSectionDatas] = useState();

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setDatas(resp.data);
    };
    getData();
  }, []);

  setTimeout(() => {
    const sectionDatas = () => {
      let existed =
        datas &&
        datas.map(
          (data) =>
            sectionDatas &&
            sectionDatas.filter(
              (sectionData) => sectionData.userId === data.userId
            )
        );

      console.log(existed);
    };

    sectionDatas();
  }, 3000);

  const renderItem = ({ item }) => <Card id={item.id} title={item.title} />;
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <Text style={styles.mainTxt}>Goals</Text>
      {/* <FlatList
        contentContainerStyle={styles.cardWrapper}
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
      {/* <SectionList
        data={datas}
        contentContainerStyle={styles.cardWrapper}
        renderItem={renderItem}
        renderSectionHeader={({ section: userId }) => {
          <Text style={styles.mainTxt}>{userId}</Text>;
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    paddingHorizontal: 10,
  },
  mainTxt: {
    marginTop: 45,
    fontWeight: "700",
    fontSize: 35,
  },
  cardWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
