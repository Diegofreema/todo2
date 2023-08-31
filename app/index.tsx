import { StyleSheet } from "react-native";
import { Image, Stack, YStack } from "tamagui";
import { Text } from "tamagui";

import Heading from "../components/Heading";
import MyButton from "../components/MyButton";
import { blue, gray } from "../utils/colors";

export default function Home() {
  return (
    <Stack flex={1}>
      <Image
        source={require("../assets/background.png")}
        style={styles.imageCon}
      />
      <Stack
        marginTop="$-11"
        backgroundColor="white"
        height={"$7"}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
      />
      <Stack backgroundColor="white" height={"40%"}>
        <Heading textAlign="center" fontWeight="700" fontSize={22}>
          Best task management app
        </Heading>
        <Stack marginHorizontal={"$10"} marginTop={10} marginBottom={20}>
          <Text textAlign="center" color={gray[500]} fontSize={15}>
            Get organized by sorting out all your tasks and boost your
            productivity.
          </Text>
        </Stack>
        <YStack space="$4.5" marginHorizontal={"$10"}>
          <MyButton href="/welcome" text={"Login"} backgroundColor={blue[10]} />

          <MyButton
            href="/register"
            text="Get Started"
            backgroundColor={blue[20]}
          />
        </YStack>
      </Stack>
    </Stack>
  );
}

const styles = StyleSheet.create({
  imageCon: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
  abs: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
  },
});
