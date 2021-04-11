import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.primaryText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  primaryText: {
    fontFamily: 'Poppins-SemiBold',
  },
});
