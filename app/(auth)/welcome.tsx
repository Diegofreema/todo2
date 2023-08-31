/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import Toast from 'react-native-toast-message';
import { Link, useRouter } from "expo-router";
import { Stack, Text, XStack } from "tamagui";
import { Spinner } from "tamagui";

import Heading from "../../components/Heading";
import MyButton from "../../components/MyButton";
import MyInput from "../../components/MyInput";
import { supabase } from "../../lib/supabase";
import { blue } from "../../utils/colors";

const Welcome = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const router = useRouter()
    const [loading, setLoading] = useState(false);
   
  const { email, password } = input;
  const handleChange = (text: string, val: string) => {
    setInput({
      ...input,
      [val]: text,
    });
    console.log(email, password);
  };

  const handleLogin = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Invalid credentials',
        text2: error.message
      });
      setLoading(false);
    }
    if (!error) {
      Toast.show({
        type: 'success',
        text1: 'Login successful',
        text2: `Welcome back! ${data?.user?.user_metadata?.full_name}`
      });
      router.replace('/home')
      setLoading(false);
      console.log(data?.user?.user_metadata?.full_name);
    }
  };

  return (
    <Stack marginHorizontal={"$5"} mt={"$10"}>
      <Heading fontSize={28} fontWeight="700">
        Welcome Back!
      </Heading>
      <Stack space={"$4"} my={"$6"}>
        <MyInput
          keyboardType="email-address"
          onChangeText={(text) => handleChange(text, "email")}
          value={email}
          placeholder="Email"
        />
        <MyInput
          secureTextEntry={true}
          onChangeText={(text) => handleChange(text, "password")}
          value={password}
          placeholder="Password"
        />
      </Stack>
     
       {loading ? (
        <Spinner size="small" color="$green10" />
      ) : (
       <MyButton button={true} backgroundColor={blue[10]} text={"Login"} onPress={handleLogin} />
      )}
      <XStack justifyContent="center" mt={"$4"} space={"$1"}>
        <Text color="#8B97A8" fontSize={15}>
          Not registered?{" "}
        </Text>
        <Link href={"/register"}>
          <Text color="#403572" fontWeight={"700"} fontSize={15}>
            Sign up!
          </Text>
        </Link>
      </XStack>
    </Stack>
  );
};

export default Welcome;
