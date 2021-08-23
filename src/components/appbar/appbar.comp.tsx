import { makeStyles } from '@src/theme';
import React from 'react';
import { StatusBar, View } from 'react-native';
import Text from '../typography/text.typo';
import DarkModeSwitch from './dark-mode.switch';

const useStyle = makeStyles(theme => ({
  root: {
    backgroundColor: theme.colors.primary,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: theme.spacing.s,
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const Appbar = () => {
  const styles = useStyle();
  return (
    <View style={[styles.root, { alignItems: 'center' }]}>
      <Text variant='appbar'>RN Gallery</Text>
      <DarkModeSwitch />
    </View>
  );
};

export default Appbar;
