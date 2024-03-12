import 'react-native-gesture-handler';


import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigation';
import { BottomTabNavigator } from './presentation/routes/BottomTabsNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator/>
      {/* <BottomTabNavigator/> */}
    </NavigationContainer>
  );
}

export default App;
