import { Image, ScrollView, StyleSheet } from "react-native";

import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import BrandInfos from "../../barber.config.json";
import { Text, View } from "../../components/Themed";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 30,
    width: "100%",
    paddingLeft: 20,
  },
  brandName: {
    fontSize: 24,
  },
  employersWrapper: {
    flex: 1,
    flexDirection: "row",
    gap: 50,
    maxHeight: 200,
    width: "100%",
    marginTop: 30,
  },
  employers: {
    backgroundColor: "white",
    position: "relative",
    height: "90%",
    marginLeft: 20,
    width: 300,
    overflow: "hidden",
    borderRadius: 10,
  },
  employersPlus: {
    backgroundColor: "white",
    position: "relative",
    padding: 10,
    height: "90%",
    marginLeft: 20,
    width: 300,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  employerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  employerImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem Vindo a <Text style={styles.brandName}>{BrandInfos.name}</Text>
      </Text>

      <ScrollView
        style={{
          maxHeight: 50,
          width: "100%",
          marginTop: 30,
        }}
        contentContainerStyle={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          width: "100%",
          paddingLeft: 30,
          gap: 20,
        }}
      >
        <TouchableOpacity
          style={{
            borderRadius: 1000,
            backgroundColor: "white",
            padding: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/configuracoes" asChild>
            <FontAwesome name="gears" size={34} color="black" />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 1000,
            backgroundColor: "white",
            padding: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/user" asChild>
            <FontAwesome name="user-circle" size={34} color="black" />
          </Link>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 1000,
            backgroundColor: "white",
            padding: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/schedule" asChild>
            <FontAwesome name="calendar" size={34} color="black" />
          </Link>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.title}>Profissionais</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.employersWrapper}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          width: "100%",
          paddingLeft: 800,
          paddingHorizontal: 80,
        }}
      >
        {BrandInfos.EmployerNames.map((item, i) => {
          return (
            <View style={styles.employers} key={i}>
              <Image
                style={styles.employerImage}
                source={{
                  uri: item.image,
                }}
              />

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
                  {item.name} • {item.especialidade}
                </Text>
              </View>
            </View>
          );
        })}
        <Link href="/AdicionarProfissional" asChild>
          <TouchableOpacity style={styles.employersPlus} onPress={() => {}}>
            <AntDesign name="plus" size={50} color="black" />
          </TouchableOpacity>
        </Link>
      </ScrollView>

      <Text style={styles.title}>Serviços</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.employersWrapper}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          width: "100%",
          paddingLeft: 800,
          paddingHorizontal: 80,
        }}
      >
        {BrandInfos.services.map((item, i) => {
          return (
            <View style={styles.employers} key={i}>
              <Image
                style={styles.employerImage}
                source={{
                  uri: item.image,
                }}
              />
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
                  {item.name} • R${item.valor}
                </Text>
              </View>
            </View>
          );
        })}
        <Link href="/servicos" asChild>
          <TouchableOpacity style={styles.employersPlus} onPress={() => {}}>
            <AntDesign name="plus" size={50} color="black" />
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </View>
  );
}
