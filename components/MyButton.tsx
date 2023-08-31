/* eslint-disable prettier/prettier */
import React from "react";
import { OpaqueColorValue } from "react-native";
import { Link } from "expo-router";
import { Href } from "expo-router/build/link/href";
import { Button, ColorTokens } from "tamagui";

type Props = {
  text: string;
  backgroundColor: ColorTokens | OpaqueColorValue | string;

  href?: Href;
  button?: boolean;
  onPress?: () => void;
};

const MyButton = ({
  text,
  backgroundColor,
  onPress,
  href,
  button = false,
}: Props) => {
  if (button) {
    return (
      <Button  onPress={onPress} backgroundColor={backgroundColor} color='white'>
        {text}
      </Button>
    );
  }
  return (
    <Link href={href} asChild>
      <Button backgroundColor={backgroundColor} color='white'>
        {text}
      </Button>
    </Link>
  );
};

export default MyButton;
