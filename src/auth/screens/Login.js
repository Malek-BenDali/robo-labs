import React from 'react';
import {StyleSheet, Dimensions, View, StatusBar} from 'react-native';
import {PrimaryButton, Input} from '../../components';
import {colors} from '../../constants/colors';
import {connect} from 'react-redux';
import {Login as LoginAuth} from '../../store/actions/AuthActions';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <View style={styles.formLogin}>
        <Input style={styles.input} placeholder="email or phone number" />
        <Input style={styles.input} secureTextEntry placeholder="password" />
      </View>
      <View style={styles.submit}>
        <PrimaryButton
          onPress={() => LoginAuth()}
          style={styles.LoginButton}
          title="Login"></PrimaryButton>
      </View>
    </View>
  );
};

// const mapDispatchToProps = actions => console.log(actions);
const mapStateToProps = state => ({
  isAuthentificated: state.isAuthentificated,
});

export default connect(mapStateToProps, {LoginAuth})(Login);

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
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
