import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Wrapper from "../../components/Wrapper";
import SearchBar from "../../components/SearchBar";
import ChipBar from "../../components/ChipBar";
import Card from "../../components/Card";

export default function Home({ navigation }) {
  const data = [
    {
      title: "Linhas",
      action: null,
    },
    {
      title: "Paradas",
      action: null,
    },
  ];

  return (
    <Wrapper>
      <View style={styles.container}>
        <SearchBar navigation={navigation} />
        <ChipBar data={data} />
        <Card title="Linhas recentes">{/* Conteúdo adicional */}</Card>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("StopLines", {
              stopId: 240007262,
            });
          }}
        >
          <Text>
            Botão de testes da lista de linhas de uma parada pq eu to com
            preguiça de arrumar o erro que tá dando quando você faz isso no mapa
          </Text>
        </TouchableOpacity>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    padding: 12,
  },
});
