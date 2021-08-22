import { makeStyles } from '@src/theme';
import React from 'react';
import { SafeAreaView, StatusBar, View, ViewProps } from 'react-native';

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
    paddingTop: StatusBar.currentHeight,
  },
}));

const Container: React.FC<ContainerProps> = ({ children, style, ...rest }) => {
  const styles = useStyles();
  return (
    <View style={[styles.root, style]} {...rest}>
      <SafeAreaView style={styles.safeView}>{children}</SafeAreaView>
    </View>
  );
};

export default Container;
