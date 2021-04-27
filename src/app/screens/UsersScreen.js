import React, {useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {CustomHeaderButton} from '../../components';
import {colors} from '../../constants/colors';

const UsersScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Utilisateurs',
      headerTitleStyle: {fontFamily: 'Poppins-Medium'},
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Cart"
            iconName="add"
            onPress={() => navigation.navigate('Cart')}
          />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Cart"
            iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, []);
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({});
