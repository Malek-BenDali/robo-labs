import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import moment from 'moment';
import {colors} from '../../constants';

const RobotItem = ({item: {date, disponibile, name}}) => {
  const format = 'DD/MM/YY HH:mm';
  const formattedDate = moment(date).format(format);

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.PoppinText}>{name}</Text>
      <Text style={styles.PoppinText}>{formattedDate}</Text>
      <Text
        style={[
          styles.PoppinText,
          disponibile ? styles.dispo : styles.occuper,
        ]}>
        {disponibile ? 'disponible' : 'occuper'}
      </Text>
    </TouchableOpacity>
  );
};

export default RobotItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    marginHorizontal: 15,
    marginVertical: 6,
  },
  PoppinText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  dispo: {
    color: '#0add08',
  },
  occuper: {
    color: '#dc143c',
  },
});
