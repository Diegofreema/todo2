/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Linking, Pressable } from "react-native";
import Toast from 'react-native-toast-message';
import { CheckSquare, Square } from "@tamagui/lucide-icons";
import { Link, useRouter } from "expo-router";
import { Heading, Spinner, Text, XStack } from "tamagui";
import { Stack } from "tamagui";

import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import { supabase } from "../../lib/supabase";
import { blue } from "../../utils/colors";

export const TERMS =
  "https://www.freeprivacypolicy.com/live/d4773cb7-bd90-4bc9-9a7a-586b5b94543d";
export const POLICY =
  "https://www.freeprivacypolicy.com/live/e96fa01d-7af1-4a94-bb93-e97429904fa8";

const Register = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [checked, setChecked] = useState(false);

  const handleInput = (text: string, val: string) => {
    setUserInput({
      ...userInput,
      [val]: text,
    });
  };
  const { firstName, lastName, email, password, confirmPassword } = userInput;

  const handleLink = (url: string) => {
    Linking.openURL(url);
  };
  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return Toast.show({
        type: "error",
        text1: "Please fill in all fields",
      });
    }
    if (password !== confirmPassword) {
      return Toast.show({
        type: "error",
        text1: "Passwords do not match",
      });
    }
    if (!checked) {
      return Toast.show({
        type: "error",
        text1: "Please accept the terms and conditions",
      });
    }
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: `${firstName} ${lastName}`,
        },
      },
    });
    if (error) {
      console.log(error.message);

      setLoading(false);
      return Toast.show({
        type: "error",
        text1: "Error", 
        text2: error.message
      });
    }
    if (!error) {
      Toast.show({
        type: "success",
        text1: "Success",
        text2: `Welcome ${data?.user?.user_metadata?.full_name}`
      });
      console.log(data);
      
      router.replace("/home");
      setLoading(false);
    }
    setUserInput({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  console.log(firstName, lastName, email, password, confirmPassword);
  return (
    <Stack marginHorizontal={"$5"} mt={"$10"}>
      <Heading fontSize={28} fontWeight="700">
        Join the hub!
      </Heading>
      <Stack space={"$4"} mt={"$6"}>
        <MyInput
          onChangeText={(text) => handleInput(text, "firstName")}
          value={firstName}
          placeholder="First Name"
        />
        <MyInput
          onChangeText={(text) => handleInput(text, "lastName")}
          value={lastName}
          placeholder="Last Name"
        />
        <MyInput
          keyboardType="email-address"
          onChangeText={(text) => handleInput(text, "email")}
          value={email}
          placeholder="Email"
        />
        <MyInput
          secureTextEntry={true}
          onChangeText={(text) => handleInput(text, "password")}
          value={password}
          placeholder="Password"
        />
        <MyInput
          secureTextEntry={true}
          onChangeText={(text) => handleInput(text, "confirmPassword")}
          value={confirmPassword}
          placeholder="Confirm Password"
        />
      </Stack>
      <XStack my={"$2"} space={"$1"}>
        <Pressable onPress={() => setChecked((prev) => !prev)}>
          {checked ? <CheckSquare /> : <Square />}
        </Pressable>
        <Text>
          I agree to
          <Text
            onPress={() => handleLink(TERMS)}
            color="#707070"
            fontWeight={"600"}
          >
            Terms and Conditions
          </Text>
          and{" "}
          <Text
            onPress={() => handleLink(POLICY)}
            color="#707070"
            fontWeight={"600"}
          >
            Privacy Policy
          </Text>
        </Text>
      </XStack>
      {loading ? (
        <Spinner size="small" color="$green10" />
      ) : (
        <MyButton
          button={true}
          backgroundColor={blue[20]}
          text={"Create an account"}
          onPress={handleSignUp}
        />
      )}
      <XStack justifyContent="center" mt={"$4"} space={"$1"}>
        <Text color="#8B97A8" fontSize={15}>
          Already registered?
        </Text>
        <Link href={"/welcome"}>
          <Text color="#403572" fontWeight={"700"} fontSize={15}>
            Sign in!
          </Text>
        </Link>
      </XStack>
    </Stack>
  );
};

export default Register;
