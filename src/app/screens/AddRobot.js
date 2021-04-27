import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {colors} from '../../constants/colors';
import {PrimaryButton, Input} from '../../components';
import {addRobot} from '../../store/actions/RobotActions';

const AddRobot = ({navigation}) => {
  const dispatch = useDispatch();
  const [robotName, setRobotName] = useState('');
  const handleChange = text => {
    setRobotName(text);
  };
  const handleClick = () => {
    dispatch(addRobot(robotName));
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.formLogin}>
        <Text style={styles.label}>Entrer le nom du robot</Text>
        <Input
          onChangeText={handleChange}
          defaultValue={robotName}
          style={styles.input}
          placeholder="Nom du robot"
        />
      </View>
      <View style={styles.submit}>
        <PrimaryButton
          onPress={handleClick}
          style={styles.LoginButton}
          title="Login"></PrimaryButton>
      </View>
    </View>
  );
};

export default AddRobot;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
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
