/* eslint-disable prettier/prettier */

import React from 'react'
import { KeyboardTypeOptions } from 'react-native';
import { Input } from 'tamagui';

import { gray } from '../utils/colors';

type Props = {
    placeholder: string
    value: string
    onChangeText: (text: string) => void
    keyboardType?: KeyboardTypeOptions
    secureTextEntry?: boolean

};

      
const MyInput = ({placeholder, value, onChangeText, keyboardType,secureTextEntry = false }: Props) => {
  return (
  <Input
      backgroundColor={gray[1000]}
      placeholder={placeholder} 
      placeholderTextColor={'black'} 
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
  />
  );
};

export default MyInput;


