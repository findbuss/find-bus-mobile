import { Alert, View, Text, StyleSheet } from "react-native";
import Wrapper from "../components/Wrapper";
import Button from "../components/Button";
import Card from "../components/Card";
import Avatar from "../components/Avatar";
import * as SecureStore from "expo-secure-store";
import colors from "../styles/colors";
import { useEffect, useState } from "react";
import { getUser } from "../services/backend-api/api.services";

export default function Profile({ navigation }) {
  const [data, setData] = useState("null");

  useEffect(() => {
    async function fetchUser() {
      const userId = parseInt(await SecureStore.getItemAsync("user_id"));
      setData(await getUser(userId));
    }

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync("user_id");
      Alert.alert("Logout", "Você foi desconectado.");
      navigation.navigate("Tabs");
    } catch (error) {
      console.error("Erro ao limpar os dados de login", error);
      Alert.alert("Erro", "Houve um problema ao tentar fazer logout.");
    }
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <View style={styles.contentArea}>
          <Avatar username={data.nome} size={96} />
          <Text style={styles.title}>{data.nome}</Text>
        </View>
        <Card title="Configurações">
          <View style={styles.cardContentArea}>
            <Button variant="error" onPress={handleLogout}>
              Sair
            </Button>
          </View>
        </Card>
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
  contentArea: {
    alignItems: "center",
    display: "flex",
    gap: 8,
  },
  title: {
    color: colors.primaryTextColor,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardContentArea: {
    flex: 1,
    justifyContent: "space-between",
  },
});
