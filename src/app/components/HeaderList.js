import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants';

const HeaderList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.PoppinText}>Nom</Text>
      </View>
      <View style={[styles.header, styles.middle]}>
        <Text style={styles.PoppinText}>Date</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.PoppinText}>Etat</Text>
      </View>
    </View>
  );
};

export default HeaderList;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60,
    marginHorizontal: 15,
    marginVertical: 6,
    overflow: 'hidden',
  },
  middle: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: colors.primary,
  },
  PoppinText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  header: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dispo: {
    color: '#0add08',
  },
  occuper: {
    color: '#dc143c',
  },
});
