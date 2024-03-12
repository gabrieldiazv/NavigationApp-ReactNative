import React, {useEffect} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Pressable, Text} from 'react-native';
import { IonIcon } from './IonIcon';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 10}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="menu" size={30} />
        </Pressable>
      ),
    });
  }, []);
  return <></>;
};
