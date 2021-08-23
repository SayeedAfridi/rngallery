import Appbar from '@src/components/appbar/appbar.comp';
import { makeStyles } from '@src/theme';
import React from 'react';
import { SafeAreaView, View, ViewProps } from 'react-native';

export interface ContainerProps extends ViewProps {
  children: React.ReactNode | React.ReactNode[];
}

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  safeView: {
    flex: 1,
  },
}));

const Container: React.FC<ContainerProps> = ({ children, style, ...rest }) => {
  const styles = useStyles();
  return (
    <View style={[styles.root, style]} {...rest}>
      <Appbar />
      <SafeAreaView style={styles.safeView}>{children}</SafeAreaView>
    </View>
  );
};

export default Container;
