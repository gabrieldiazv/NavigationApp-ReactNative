import {Text, View} from 'react-native';
import {type RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';
import { useEffect } from 'react';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  // console.log(params);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    })
  },[])

  return (
    <View style={globalStyles.container}>
      <Text style={{
        marginBottom: 10,
        fontSize: 30,
        textAlign: 'center'
      }}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
