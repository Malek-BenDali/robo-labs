import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const SecondaryButton = props => {
  return (
    <TouchableOpacity {...props} style={{...styles.container, ...props.styles}}>
      {props.children}
    </TouchableOpacity>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  container: {},
});
