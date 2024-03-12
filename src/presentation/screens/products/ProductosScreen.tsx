import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {globalStyles} from '../../theme/theme';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigator';

const products = [
  {
    id: 1,
    name: 'product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'product 3',
    price: 300,
  },
];
export const ProductosScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Products</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() => {
              navigation.navigate('Product', {id: item.id, name: item.name});
            }}
            label={item.name}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Text style={{marginBottom: 10, fontSize: 30}}>Ajustes</Text>
      <PrimaryButton
        onPress={() => {
          navigation.navigate('Settings');
        }}
        label="Ajustes"
      />
    </View>
  );
};
