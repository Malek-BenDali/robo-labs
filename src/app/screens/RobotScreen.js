import React, {useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {CustomHeaderButton} from '../../components';
import {colors} from '../../constants/colors';
import {useSelector} from 'react-redux';
import {RobotItem, HeaderList} from '../components';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const RobotScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Mes Robots',
      headerTitleStyle: {fontFamily: 'Poppins-Medium'},
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Cart"
            iconName="add"
            onPress={() => navigation.navigate('AddRobot')}
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
  const {robots} = useSelector(state => state.robots);
  let header;
  if (robots.length > 0) header = <HeaderList />;
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <FlatList
        data={robots}
        renderItem={({item}) => <RobotItem item={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={header}
        ListEmptyComponent={() => (
          <>
            <Text style={styles.empty}>
              vous n'avez aucun robot <FontAwesome5 size={25} name="robot" />
            </Text>
          </>
        )}
      />
    </View>
  );
};

export default RobotScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  empty: {
    alignSelf: 'center',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
});
