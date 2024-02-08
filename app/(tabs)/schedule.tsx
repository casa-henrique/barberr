import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";

import moment from "moment";
import Timetable from "react-native-calendar-timetable";
import ScheduleShowComponent from "../../components/scheduleShowComponent";

export default function ScheduleComponent() {
  const [date] = useState(new Date());
  const [from] = useState(moment().subtract(3, "days").toDate());
  const [till] = useState(moment().add(3, "days").toISOString());
  const range = { from, till };

  const [items] = useState([
    {
      title: "Some event",
      startDate: moment().subtract(1, "hour").toDate(),
      endDate: moment().add(1, "hour").toDate(),
    },
  ]);

  const styles = StyleSheet.create({
    title: {
      fontSize: 22,
      fontWeight: "bold",
      marginTop: 30,
      width: "100%",
      paddingLeft: 20,
    },
    employersWrapper: {
      flexGrow: 1,
      width: "100%",
    },
  });

  return (
    <View>
      <Text style={styles.title}>Calendário</Text>

      <ScrollView
        style={styles.employersWrapper}
        contentContainerStyle={{
          flexGrow: 1,
          width: "100%",
          padding: 10,
        }}
      >
        <Timetable
          items={items}
          renderItem={(props) => <ScheduleShowComponent {...props} />}
          date={date}
          // range={range}
        />
      </ScrollView>
    </View>
  );
}
