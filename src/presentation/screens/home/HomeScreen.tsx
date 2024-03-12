
import {View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import { type NavigationProp, useNavigation, DrawerActions} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {type RootStackParams} from '../../routes/StackNavigator';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

 

  return (
    <>
    <HamburgerMenu/>
    <View style={globalStyles.container}>
      {/* <Pressable
        onPress={() => navigation.navigate('Products' as never)}
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>productos</Text>
      </Pressable> */}
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="productos"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="settings"
      />
    </View>
    </>
  );
};
