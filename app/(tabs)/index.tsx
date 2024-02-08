import { ScrollView, StyleSheet } from "react-native";

import BrandInfos from "../../barber.config.json";
import { Text, View } from "../../components/Themed";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 30,
  },
  brandName: {
    fontSize: 20,
  },
  employerContainer: {
    flex: 1,
    marginTop: 35,
    backgroundColor: "green",
  },
  employersWrapper: { flexGrow: 1 },
  employers: {
    backgroundColor: "white",
    padding: 8,
  },
  employerText: {
    color: "red",
  },
});

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem Vindo a <Text style={styles.brandName}>{BrandInfos.name}</Text>
      </Text>
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.employersWrapper}
      >
        {BrandInfos.EmployerNames.map((item) => {
          return (
            <View style={styles.employers}>
              {/* <Image
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
              /> */}
              <Text style={styles.employerText}>
                {item.name} • {item.especialidade}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
