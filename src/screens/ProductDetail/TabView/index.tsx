import * as React from "react";
import { View, StyleSheet, Dimensions, Text, ScrollView } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const FirstRoute = ({ description }) => {
  return (
    <View>
      <Text>{description}</Text>
      <Text>{description}</Text>
      <Text>{description}</Text>
      <Text>{description}</Text>
      <Text>{description}</Text>
      <Text>{description}</Text>
    </View>
  );
};

const SecondRoute = () => {
  return (
    <View>
      <Text>-</Text>
    </View>
  );
};

const initialLayout = { height: 0, width: Dimensions.get("window").width };

export default function TabViewExample({ description }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "คำอธิบาย" },
    { key: "second", title: "รายละเอียด" },
  ]);

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      activeColor="#ff8e25"
      inactiveColor="#8e8e8e"
      indicatorStyle={{ backgroundColor: "#ff8e25" }}
      style={{ backgroundColor: "#fff", elevation: 0, marginBottom: 20 }}
      tabStyle={{ width: 100 }}
    />
  );

  return (
    <ScrollView>
      <TabView
        navigationState={{ index, routes }}
        renderScene={() => null}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
      {index === 0 && <FirstRoute description={description} />}
      {index === 1 && <SecondRoute />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
