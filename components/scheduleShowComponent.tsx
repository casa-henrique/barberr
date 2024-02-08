import { View } from "react-native";
import { Text } from "./Themed";

interface ScheduleProps {
  style: any;
  item: any;
  dayIndex?: any;
  daysTotal: any;
}
export default function ScheduleShowComponent({
  style,
  item,
  dayIndex,
  daysTotal,
}: ScheduleProps) {
  return (
    <View
      style={{
        ...style,
        backgroundColor: "red",
        borderRadius: 10,
        elevation: 5,
      }}
    >
      <Text>{item.title}</Text>
      <Text>
        {dayIndex} of {daysTotal}
      </Text>
    </View>
  );
}
