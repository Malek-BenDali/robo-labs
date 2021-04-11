import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../constants/colors';

const PrimaryButton = props => {
  return (
    <TouchableOpacity {...props} style={{...styles.container, ...props.style}}>
      {props.title && <Text style={styles.primaryText}>{props.title}</Text>}
      {props.children}
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  primaryText: {
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    fontSize: 18,
  },
});
