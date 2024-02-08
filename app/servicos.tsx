import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Text, View } from "../components/Themed";

export default function ModalScreen() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [file, setFile] = useState<any>(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permissão negada",
        `Precisamos da permissão de sua camera para darmos continuidade`
      );
    } else {
      const result = await ImagePicker.launchImageLibraryAsync();

      if (!result.canceled) {
        setFile(result.assets[0].uri);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Serviço</Text>

      <View style={{ display: "flex", marginTop: 30, width: "80%", gap: 30 }}>
        <View style={{ display: "flex", width: "100%", gap: 10 }}>
          <Text>Nome</Text>
          <TextInput
            onChange={(e: any) => setName(e.target.value)}
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderColor: "#4A6CB5",
              borderWidth: 2,
              height: 35,
              borderRadius: 4,
              padding: 5,
            }}
          />
        </View>
        <View style={{ display: "flex", width: "100%", gap: 10 }}>
          <Text>Valor</Text>
          <TextInput
            onChange={(e: any) => setValue(e.target.value)}
            placeholder="R$00,00"
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderColor: "#4A6CB5",
              borderWidth: 2,
              height: 35,
              borderRadius: 4,
              padding: 5,
            }}
          />
        </View>
        <View style={{ display: "flex", width: "100%", gap: 10 }}>
          <Text>imagem</Text>
          <TouchableOpacity
            onPress={() => pickImage()}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#4A6CB5",
              width: "100%",
              height: 70,
              borderRadius: 12,
            }}
          >
            <FontAwesome5 name="images" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#19B674",
          position: "absolute",
          bottom: 50,
          width: "60%",
          height: 40,
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white" }}>Adicionar</Text>
      </TouchableOpacity>

      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
