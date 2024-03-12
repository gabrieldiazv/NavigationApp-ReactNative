import {DrawerActions, useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: top + 20,
        paddingHorizontal: 20,
      }}>
      <Text style={{marginBottom: 10}}>Profile Screens</Text>
      <PrimaryButton
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        label="Abrir Menu"
      />
    </View>
  );
};
