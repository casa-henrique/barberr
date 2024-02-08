import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "../components/Themed";

import { FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export default function ModalScreen() {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
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
      <Text style={styles.title}>Adicionar Profissional</Text>

      <View style={styles.cardWrapper}>
        <View style={styles.employers}>
          {file !== null && (
            <Image
              style={styles.employerImage}
              source={{
                uri: file,
              }}
            />
          )}
          {file !== null ? (
            <View
              style={{
                position: "absolute",
                zIndex: 20,
                bottom: 0,
                paddingLeft: 15,
                paddingBottom: 10,
                paddingTop: 10,
                width: "100%",
                backgroundColor: "rgba(29, 29, 29, 0.69)",
              }}
            >
              <Text style={styles.employerText}>
                {name ? name : "Nome"} •{" "}
                {specialty ? specialty : "Especialidade"}
              </Text>
            </View>
          ) : (
            <Text style={styles.employerTextBlack}>
              {name ? name : "Nome"} • {specialty ? specialty : "Especialidade"}
            </Text>
          )}
        </View>
      </View>

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
          <Text>Especialidade</Text>
          <TextInput
            onChange={(e: any) => setSpecialty(e.target.value)}
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
    width: "100%",
    height: "auto",
  },
  cardWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 30,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  },
  employers: {
    backgroundColor: "white",
    position: "relative",
    height: "90%",
    width: "90%",
    overflow: "hidden",
    borderRadius: 10,
  },
  employerImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  employerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  employerTextBlack: {
    color: "black",
    position: "absolute",
    bottom: 10,
    fontWeight: "bold",
    fontSize: 18,
    left: 15,
    zIndex: 20,
  },
});
