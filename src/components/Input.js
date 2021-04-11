import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../constants/colors';

const Input = props => {
  return <TextInput {...props} style={{...styles.container, ...props.style}} />;
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderColor: colors.primary,
  },
});
