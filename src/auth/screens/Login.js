import React from 'react';
import {StyleSheet, Dimensions, View, StatusBar} from 'react-native';
import {PrimaryButton, Input} from '../../components';
import {colors} from '../../constants/colors';
import {useDispatch} from 'react-redux';
import {Login as LoginAuth} from '../../store/actions';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <View style={styles.formLogin}>
        <Input style={styles.input} placeholder="email or phone number" />
        <Input style={styles.input} secureTextEntry placeholder="password" />
      </View>
      <View style={styles.submit}>
        <PrimaryButton
          onPress={() => dispatch(LoginAuth())}
          style={styles.LoginButton}
          title="Login"></PrimaryButton>
      </View>
    </View>
  );
};

export default Login;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginButton: {
    width: width * 0.5,
  },
  formLogin: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: width * 0.75,
    marginVertical: 10,
  },
});
