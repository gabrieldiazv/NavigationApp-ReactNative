import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {ProductosScreen} from '../screens/products/ProductosScreen';
import {ProductScreen} from '../screens/products/ProductScreen';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


export type RootStackParams = {
  Home: undefined;
  Settings: undefined;
  Products: undefined;
  Product: {id: number, name: string};
}
const Stack = createStackNavigator<RootStackParams>();


export const StackNavigator = () => {

  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerShown: false,
    })
  },[])
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Products" component={ProductosScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};
